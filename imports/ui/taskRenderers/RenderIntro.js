import React, { useMemo, useState } from "react";
import Icon from "../IconComponent/Icon";

import "./RenderIntro.scss";

function RenderIntro({ learningObjectives }) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const { title, description } = learningObjectives[currentPersonIndex];

  // handle button click to show the next student
  const showNextStudent = () => {
    if (currentPersonIndex >= learningObjectives.length - 1) return;
    setCurrentPersonIndex(currentPersonIndex + 1);
  };

  // handle button click to show the previous student
  const showPreviousStudent = () => {
    if (currentPersonIndex <= 0) return;
    setCurrentPersonIndex(currentPersonIndex - 1);
  };
  // render information of a student
  const RenderPerson = () => {
    return (
      <div className="person-container">
        <div className="person-overview">
          <div className="person-icon">
            <img src={"/assets/Icons/" + title.split(",")[0] + ".svg"} />
          </div>
          <div className="person-data">
            <div className="person-name">{title}</div>
          </div>
        </div>
        <div className="person-text-container">
          <div className="person-text">{description}</div>
        </div>
      </div>
    );
  };

  // render basic Intro scaffolding
  return (
    <div className="intro-container">
      <div className="intro-title-container">
        <div className="intro-title">{title}</div>
      </div>
      <RenderPerson />
      <div className="intro-navigation">
        <button className="intro-navigation-button" onClick={showPreviousStudent}>
          <Icon name="angle-left" />
        </button>
        <div className="intro-navigation-label-current">
          {"Schüler " + (currentPersonIndex + 1) + " von " + learningObjectives.length}
        </div>
        <button className="intro-navigation-button" onClick={showNextStudent}>
          <Icon name="angle-right" />
        </button>
      </div>
    </div>
  );
}

export default RenderIntro;
