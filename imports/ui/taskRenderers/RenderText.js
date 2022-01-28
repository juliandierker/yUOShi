import React, { useMemo, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Icon from "../IconComponent/Icon";

import "./RenderText.scss";
import PromisifiedMeteor from "../../api/promisified";

/**
 * @typedef RenderTextProps
 * @property {StaticTag} task
 * @property {Function} updateTask
 */

/**
 * Render a MultiTask
 *
 * @param {RenderTextProps} props
 * @returns {ReactElement|null}
 */
export default function RenderText({ task }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [image, setImage] = useState(undefined);

  const studipUrl = useRef();
  Meteor.call("users.getStudipUrl", (err, res) => {
    if (res) studipUrl.current = res;
  });

  const content = task.contents[0].content;

  const pages = useMemo(() => {
    let pages = [];
    let totalLetterCount = 0;
    let counter = 0;
    let linebreaksOnPage = 0;

    for (let i in content) {
      // check for new page
      if (content[i] === "\n") {
        linebreaksOnPage++;
      }
      if (counter > 650 - 40 * linebreaksOnPage && (content[i] === " " || content[i] === "\n")) {
        pages.push(
          content.substring(totalLetterCount, parseInt(counter) + parseInt(totalLetterCount))
        );
        totalLetterCount = i;
        linebreaksOnPage = 0;
        counter = 0;
      }
      counter++;
    }

    pages.push(content.substring(totalLetterCount, content.length));

    return pages;
  }, [content]);

  const maxPage = Math.ceil(pages.length / 2) - 1;

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    async function loadImages() {
      const currentImages = await PromisifiedMeteor.call("files.getFile", task.image);
      setImage(currentImages);
    }
    if (task.image) {
      loadImages();
      pages.splice(1, 0, "textIsImage");
    }
  }, [pages, task]);

  function renderRightPage() {
    if (pages[currentPage * 2 + 1] === "textIsImage") {
      if (!image) return;
      return (
        <img
          src={`${studipUrl.current}/sendfile.php?type=0&file_id=${image.id}&;file_name=${image.name
            }`}
          type="image/png"
        />
      );
    }
    return pages[currentPage * 2 + 1].trim();
  }
  return (
    <>
      <div className="task-text">
        <div className="page-left">
          <span className="text">{pages[currentPage * 2].trim()}</span>
        </div>
        <div className="page-middle-line" />
        <div className="page-right">
          <span className="text">{renderRightPage()}</span>
        </div>
      </div>
      <div className="task-text-navigation">
        {(currentPage !== 0 && (
          <button className="task-text-navigation-button" onClick={() => handlePrevPage()}>
            <Icon name="angle-left" color="white" />
          </button>
        )) || <div className="task-text-navigation-button-placeholder" />}
        <span className="task-text-navigation-text">
          Seite {currentPage + 1} von {maxPage + 1}
        </span>
        {(currentPage !== maxPage && (
          <button className="task-text-navigation-button" onClick={() => handleNextPage()}>
            <Icon name="angle-right" color="white" />
          </button>
        )) || <div className="task-text-navigation-button-placeholder" />}
      </div>
    </>
  );
}

RenderText.propTypes = {
  task: PropTypes.object.isRequired
};
