import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import PropTypes from "prop-types"
import { StaticDrag } from "@xyng/yuoshi-backend-adapter";
import DragDropViewNormal from "./DragDropView/DragDropViewNormal";
import { Button } from "semantic-ui-react";
import PromisifiedMeteor from "../../api/promisified";
import Swal from "sweetalert2";

/**
 * Shuffle given array using the Fisher-Yates shuffle
 * This function does not mutate the given array.
 *
 * @template T
 * @param {T[]} orig
 * @returns {T[]}
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 */
function shuffle(orig) {
    const arr = [
        ...orig
    ];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

/**
 * Split array into chunks of given size.
 * The last chunk may contain less items.
 *
 * @template T
 * @param {T[]} arr
 * @param {number} size
 * @returns {T[][]}
 */
function chunk(arr, size) {
    if (!size) {
        return []
    }

    const chunks = []
    let i = 0

    while (i < arr.length) {
        chunks.push(arr.slice(i, i += size))
    }

    return chunks
}

/**
 * Create {chunks} chunks and distribute contents of {arr} evenly - if possible
 *
 * @template T
 * @param {T[]} arr
 * @param {number} chunks
 * @returns {T[][]}
 */
function distributeEvenly(arr, chunks) {
    const chunked = chunk(arr, Math.ceil(arr.length / chunks))

    // fill up with empty arrays when we've got less chunks than we want
    return chunked.concat((new Array(Math.max(chunks - chunked.length)).fill([])))
}

/**
 * Apply drag operation on given array
 *
 * @template T
 * @param {T[]} items
 * @param {DropResult} dragResult
 * @returns {T[]}
 */
export const applyDrag = (items, dragResult) => {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return items;

    if (removedIndex !== null) {
        return [
            ...items.slice(0, removedIndex),
            ...items.slice(removedIndex + 1),
        ]
    }

    if (addedIndex !== null) {
        return [
            ...items.slice(0, addedIndex),
            payload,
            ...items.slice(addedIndex),
        ]
    }

    return result;
};

const propTypes = {
    task: PropTypes.instanceOf(StaticDrag).isRequired,
    updateTask: PropTypes.func.isRequired,
}

/**
 * @typedef RenderDragProps
 * @property {StaticDrag} task
 * @property {Function} updateTask
 */

/**
 * Render a MultiTask
 *
 * @param {RenderDragProps} props
 * @returns {*}
 */
function RenderDrag(props) {
    const [ done, setDone ] = useState(false)
    const [ userSolution, setUserSolution ] = useState([])
    const [ solutions, setSolutions ] = useState(undefined)
    // destructure here and not in function-params so we get type-hints
    const { task, updateTask } = props

    useEffect(() => {
        const statements = distributeEvenly(shuffle(task.statements), task.categories.length)

        setUserSolution(task.categories.map((category, index) => {
            return {
                id: category.id,
                content_id: category.content_id,
                title: category.title,
                items: statements[index]
            }
        }))
    }, [task])

    /** @type {Scene} scene */
    const scene = useMemo(() => {
        return {
            type: "container",
            props: {
                // todo: get orientation from task
                orientation: "vertical",
                id: "dragdropContainer"
            },
            children: userSolution.map(category => {
                const solutionForCategory = (solutions || []).find(sol => sol.quest_id === category.id)
                const correctAnswers = solutionForCategory ? solutionForCategory.answers : []
                return {
                    id: category.id,
                    type: "container",
                    name: category.title,
                    props: {
                        id: `column-${ category.id }`,
                        // todo: read orientation from task
                        orientation: "vertical",
                        className: "card-container"
                    },
                    children: category.items.map((statement, index) => {
                        const correctAnswer = correctAnswers.find(ans => ans.id === statement.id)

                        const noAnswer = !solutions && !correctAnswer
                        const isCorrect = correctAnswer && correctAnswer.is_correct && correctAnswer.sort === index
                        const isPartiallyCorrect = correctAnswer && correctAnswer.is_correct

                        return {
                            type: "draggable",
                            id: statement.id,
                            props: {
                                className: "card",
                                id: `statement-${ statement.id }`,
                                style: {
                                    backgroundColor: (noAnswer || isCorrect)
                                        ? "green"
                                        : isPartiallyCorrect
                                            ? "orange"
                                            : "red",
                                    width: "20%",
                                    marginRight: "auto",
                                    marginLeft: "auto",
                                    textAlign: "center"
                                }
                            },
                            data: statement.text
                        }
                    })
                }
            })
        }
    }, [userSolution, solutions])

    const getCardPayload = useCallback((columnId, index) => {
        const child = userSolution.find((p) => p.id === columnId);

        if (!child || index >= child.items.length) {
            return undefined
        }

        return child.items[index];
    }, [userSolution])

    const onCardDrop = useCallback((columnId, dropResult) => {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            setUserSolution(userSolution => {
                const columnIndex = userSolution.findIndex(column => column.id === columnId);

                if (columnIndex === -1) {
                    // column can't be found - don't change stuff.
                    return userSolution
                }

                const column = userSolution[columnIndex]

                return [
                    ...userSolution.slice(0, columnIndex),
                    {
                        ...column,
                        items: applyDrag(column.items, dropResult)
                    },
                    ...userSolution.slice(columnIndex + 1),
                ]
            })
        }
    }, [])

    const onColumnDrop = useCallback((dropResult) => {
        setUserSolution(userSolution => {
            return applyDrag(userSolution, dropResult)
        })
    }, [])

    const onSolve = useCallback(async () => {
        const result = await PromisifiedMeteor.call(
            "tasks.checkDrag",
            task.id,
            userSolution.map((category) => {
                return {
                    category_id: category.id,
                    content_id: category.content_id,
                    items: category.items.map(item => item.id)
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

        const correct = result.quest_solutions.reduce((acc, value) => acc && value.is_correct, true)
        if (correct) {
            Swal.fire({
              position: "top-end",
              type: "success",
              title: "Geschafft!",
              timer: 2000
            }).then()
            setDone(true)

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
            setSolutions(await Promise.all(result.quest_solutions.map(({ id }) => {
                return PromisifiedMeteor.call("tasks.getSolution", id)
            })))
        }

        return false
    }, [task, userSolution])

    return <>
        <DragDropViewNormal
            scene={scene}
            getCardPayload={getCardPayload}
            onCardDrop={onCardDrop}
            onColumnDrop={onColumnDrop}
        />
        {(!solutions && !done) && <Button
          style={{ marginTop: "10px", marginRight: "10px", float: "right" }}
          onClick={onSolve}>
            Aufgabe lösen
        </Button>}
        {(solutions || done) && <Button
          style={{ marginTop: "10px", marginRight: "10px", float: "right" }}
          onClick={updateTask}>
            Weiter
        </Button>}
    </>
}
RenderDrag.propTypes = propTypes

export default RenderDrag
