import React, { useCallback, useMemo, useState } from "react"
import { parseContent, StaticTag } from "@xyng/yuoshi-backend-adapter";
import { Button, Grid, Header, Image, Label, Segment } from "semantic-ui-react";
import PromisifiedMeteor from "../../api/promisified";
import Swal from "sweetalert2";

/**
 * @typedef RenderTagProps
 * @property {StaticTag} task
 * @property {Function} updateTask
 */

/**
 * Render a MultiTask
 *
 * @param {RenderTagProps} props
 * @returns {ReactElement|null}
 */
export default function RenderTag(props) {
    // destructure here and not in function-params so we get type-hints
    const { task, updateTask } = props
    const [ foundTags, setFoundTags ] = useState([])
    const [ done, setDone ] = useState(false)

    const onClick = useCallback((id) => () => {
        setFoundTags(foundTags => {
            if (foundTags.includes(id)) {
                return foundTags
            }

            return foundTags.concat([id])
        })
    }, [])

    const onSubmit = useCallback(async () => {
        if (task.tags.length !== foundTags.length) {
            return
        }

        const foundTagObjects = task.tags.filter(tag => foundTags.includes(tag.id))
        const result = await PromisifiedMeteor.call("tasks.checkTag", task.id, foundTagObjects)

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
                "Es sind nicht alle Fragen richtig beantwortet. Versuch es nochmal.",
            confirmButtonText: "Nochmal versuchen",
            cancelButtonColor: "#3085d6",
            showCancelButton: false
        })

        return false
    }, [task, foundTags])

    return <>
        <Segment id="defTextReader">
            <Header as="h1">{task.title}</Header>

            {task.contents.map((content, index) => {
                // using the array index for the key prop is okay in this case
                // as neither the content array nor its contents can change
                return <span key={`content-${index}`}>
                <RenderTagKeyword
                    content={content.content}
                    tags={task.tags}
                    foundTags={foundTags}
                    onClick={onClick}
                />
            </span>
            })}
        </Segment>
        {!done && <Button
            disabled={task.tags.length !== foundTags.length}
            onClick={onSubmit}
        >
            Aufgabe lösen
        </Button>}
        {done && <Button
            onClick={updateTask}
        >
            Weiter
        </Button>}
    </>
}

function RenderTagKeyword({ content, tags, foundTags, onClick }) {
    const parts = useMemo(() => {
        return parseContent(
            content,
            "\\b",
            `${tags.map(tag => tag.tag).join("|")}`
        ).map((part, index) => {
            let tag_id = part.id ? tags.find(tag => tag.tag === part.id.trim()) : undefined
            tag_id = tag_id ? tag_id.id : undefined

            return {
                id: tag_id,
                tag: part.id,
                found: !!tag_id && foundTags.includes(tag_id),
                content: `${index === 0 ? "" : " "}${(part.content || "").trim()} `
            }
        })
    }, [content, tags, foundTags])

    return <div>
        {parts.map((part, index) => {
            return <React.Fragment key={`part-${part.id}-${index}`}>
                <span>{part.content}</span>
                {part.tag && <RenderTagItem
                    onClick={onClick(part.id)}
                    found={part.found}
                >
                    {part.tag}
                </RenderTagItem>}
            </React.Fragment>
        })}
    </div>
}

function RenderTagItem({ found, onClick, children }) {
    if (found) {
        return <Label>{children}</Label>
    }

    return <span onClick={onClick}>{children}</span>
}
