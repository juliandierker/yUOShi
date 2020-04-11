import React, { useCallback, useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"

import { StaticMulti } from "@xyng/yuoshi-backend-adapter"
import { Button, Card, Checkbox } from "semantic-ui-react";
import PromisifiedMeteor from "../../api/promisified";
import Swal from "sweetalert2";

const propTypes = {
    task: PropTypes.instanceOf(StaticMulti).isRequired,
    updateTask: PropTypes.func.isRequired,
}

/**
 * @typedef RenderMultiProps
 * @property {StaticMulti} task
 * @property {Function} updateTask
 */

/**
 * Render a MultiTask
 *
 * @param {RenderMultiProps} props
 * @returns {*}
 * @constructor
 */
const RenderMulti = (props) => {
    // destructure here and not in function-params so we get type-hints
    const { task, updateTask } = props

    const [ solution, setSolution ] = useState(undefined)
    const [ currentQuestId, setCurrentQuestId ] = useState("")
    const [ doneQuests, setDoneQuests ] = useState([])
    const [ selectedQuestionAnswers, setSelectedQuestionAnswers ] = useState({})
    const [ userSolutionId, setUserSolutionId ] = useState()

    const getNextQuest = useCallback(async () => {
        if (!task) {
            return
        }

        const data = await PromisifiedMeteor.call("tasks.getCurrentTaskPosition", task.id, userSolutionId)

        if (!data) {
            // TODO: handle error
            return
        }

        const { id, current_quest, done_quests } = data

        if (!current_quest) {
            await updateTask()
            return
        }

        setUserSolutionId(id)
        setCurrentQuestId(current_quest)
        setDoneQuests(done_quests)
    }, [task, updateTask, userSolutionId])

    useEffect(() => {
        getNextQuest()
    }, [getNextQuest])

    const isLastQuestion = useMemo(() => {
        return task.contents.length - doneQuests.length === 1
    }, [task, doneQuests])

    const question = useMemo(() => {
        if (!task || task.contents.length <= doneQuests.length) {
            return
        }

        return task.contents.find(quest => quest.id === currentQuestId)
    }, [task, currentQuestId, doneQuests])

    const selectedAnswers = useMemo(() => {
        if (!question) {
            return []
        }

        return selectedQuestionAnswers[question.id] || []
    }, [question, selectedQuestionAnswers])

    const onSubmitQuest = useCallback(async () => {
        if (!question) {
            return
        }

        const result = await PromisifiedMeteor.call(
            "tasks.checkQuestMulti",
            question.id,
            selectedAnswers.map(answer => {
                return {
                    quest_id: question.id,
                    content_id: question.content_id,
                    answer_id: answer,
                }
            })
        )

        if (!result) {
            // TODO: handle error
            // the error may be caused by the user submitting more than 3 solution-attempts.
            // in that case we have to redirect to the next quest.

            // return true for now so that the user is redirected to next quest
            return true
        }

        if (result.is_correct) {
            Swal.fire({
              position: "top-end",
              type: "success",
              title: "Geschafft!",
              timer: 2000
            }).then()
            return true
        }

        const { value: showSolution } = await Swal.fire({
            position: "top-end",
            type: "warning",
            title: "Nicht ganz...",
            text:
                "Es sind nicht alle Fragen richtig beantwortet. Willst du es nochmal versuchen, oder möchtest du dir die Lösung anschauen?",
            confirmButtonText: "Lösung zeigen",
            cancelButtonText: "Nochmal versuchen",
            cancelButtonColor: "#3085d6",
            showCancelButton: true
        })

        if (showSolution) {
            setSolution(await PromisifiedMeteor.call("tasks.getSolution", result.id))
        }

        return false
    }, [selectedAnswers, question])

    const onSubmit = useCallback(async () => {
        const result = await onSubmitQuest()

        if (!result) {
            // stay at current quest - user did not give correct answer
            // and may see the sample solution or submit another one
            return
        }

        await updateTask()
    }, [onSubmitQuest, updateTask])

    const onNextQuestion = useCallback(async () => {
        const result = await onSubmitQuest()

        if (!result) {
            // stay at current quest - user did not give correct answer
            // and may see the sample solution or submit another one
            return
        }

        setSolution(undefined)

        await getNextQuest()
    }, [onSubmitQuest, getNextQuest])

    const toggleAnswer = useCallback((question_id, answer_id) => () => {
        setSelectedQuestionAnswers(cur => {
            let selected = cur[question_id] || []

            if (!selected.includes(answer_id)) {
                selected = [
                    ...selected,
                    answer_id
                ]
            } else {
                selected = selected.filter(id => id !== answer_id)
            }

            return {
                ...cur,
                [question_id]: selected
            }
        })
    }, [])

    if (!task || !question) {
        return null
    }

    return <>
        <Card.Group>
            <div
                key={"questionDiv_" + question.id}
                style={{ width: "100%", paddingBottom: "16px" }}
            >
                <Card
                    key={"questionCard_" + question.id}
                    style={{ width: "100%" }}
                >
                    <Card.Content>
                        <Card.Header style={{ marginBottom: "2rem", textAlign: "left" }}>
                            <br />

                            {question.question}
                        </Card.Header>
                        <Card.Description>
                            {question.answers.map((answer) => {
                                let color = undefined
                                if (solution) {
                                    const solutionAnswer = solution.answers.find(cA => cA.id === answer.id)
                                    color = (solutionAnswer && solutionAnswer.is_correct) ? "green" : "red"
                                }

                                return <Checkbox
                                    style={{
                                        backgroundColor: color
                                    }}
                                    key={`answer_${answer.id}`}
                                    radio={!question.multiple}
                                    label={answer.content}
                                    value={answer.id}
                                    checked={selectedAnswers.includes(answer.id)}
                                    onChange={toggleAnswer(question.id, answer.id)}
                                />
                            })}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        </Card.Group>
        {solution && <Button
            id="solveTask"
            floated="right"
            onClick={getNextQuest}
        >
            Nächste Frage
        </Button>}
        {(!solution && isLastQuestion) && <Button
            id="solveTask"
            floated="right"
            onClick={onSubmit}
        >
            Aufgabe lösen
        </Button>}
        {(!solution && !isLastQuestion) && <Button
            id="solveTask"
            floated="right"
            onClick={onNextQuestion}
        >
            Nächste Frage
        </Button>}
    </>
}
RenderMulti.propTypes = propTypes

export default RenderMulti
