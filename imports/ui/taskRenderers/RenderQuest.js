import React, { useCallback, useEffect, useState, useMemo } from "react"
import PromisifiedMeteor from "../../api/promisified";

import "./RenderMulti.css"

/** @type React.FC */
const RenderQuest = ({ task, updateTask, question, onGetNextQuest, submitButton }) => {
    const [userSolutionId, setUserSolutionId] = useState()

    const onSubmit = () => {
        // What if this is a quest and not a task???
        console.log("TODO: IMPLEMENT MC SOLVE!!")
    }

    submitButton.current.onclick = onSubmit


    const getNextQuest = useCallback(async () => {
        if (!task) return

        const data = await PromisifiedMeteor.call("tasks.getCurrentTaskPosition", task.id, userSolutionId)
        if (!data) return

        const { id, current_quest } = data
        onGetNextQuest(data)

        if (!current_quest) {
            return
        }

        setUserSolutionId(id)
    }, [task, userSolutionId, onGetNextQuest])

    useEffect(() => {
        getNextQuest()
    }, [getNextQuest])

    if (!question) {
        return null
    }

    const renderAnswers = () => {
        return question.answers.map((answer, index) => {
            return (<div className="answer-container" key={"answer-" + index} >
                <input name={"checkbox_" + index} id={"checkbox_" + index} type="checkbox" className="answer-checkbox" />
                <label htmlFor={"checkbox_" + index} className="answer">{answer.content}</label>
            </div>)
        })
    }

    return <>
        <div className="question-container">{question.question}</div>
        <div className="answers-container">{renderAnswers()}</div>
    </>
}

export default RenderQuest
