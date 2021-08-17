import React, { useMemo, useState } from "react"
import { StaticTag } from "@xyng/yuoshi-backend-adapter";
import Icon from "../IconComponent/Icon"

import "./RenderTag.css"

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
    const [currentPage, setCurrentPage] = useState(0)
    const content = task.contents[0].content

    const pages = useMemo(() => {
        let pages = []
        let totalLetterCount = 0
        let counter = 0
        let linebreaksOnPage = 0

        for (let i in content) {
            // check for new page
            if (content[i] === "\n") {
                linebreaksOnPage++;
            }
            if (counter > 650 - (40 * linebreaksOnPage) && (content[i] === " " || content[i] === "\n")) {
                pages.push(content.substring(totalLetterCount, parseInt(counter) + parseInt(totalLetterCount)))
                totalLetterCount = i
                linebreaksOnPage = 0
                counter = 0
            }
            counter++;
        }

        pages.push(content.substring(totalLetterCount, content.length))

        return pages
    }, [content])

    const maxPage = Math.ceil(pages.length / 2) - 1

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1)
        }
    }

    return <>
        <div className="task-text">
            <div className="page-left">
                <span className="text">{pages[currentPage * 2]}</span>
            </div>
            <div className="page-middle-line"></div>
            <div className="page-right">
                <span className="text">{pages[currentPage * 2 + 1]}</span>
            </div>
        </div>
        <div className="task-text-navigation">
            <button className="task-text-navigation-button" onClick={() => handlePrevPage()}><Icon name="angle-left" color="white" /></button>
            <span className="task-text-navigation-text">Seite {currentPage + 1} von {maxPage + 1}</span>
            <button className="task-text-navigation-button" onClick={() => handleNextPage()}><Icon name="angle-right" color="white" /></button>
        </div>
    </>
}