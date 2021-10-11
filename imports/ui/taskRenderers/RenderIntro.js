import React, { useState, useEffect } from "react";
import { useTasksContext } from "../student/TasksContext";

import Icon from "../IconComponent/Icon";

import "./RenderIntro.css";

function RenderIntro({ learningObjectives }) {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const { getImages } = useTasksContext();
  const [images, setImages] = useState([]);
  const { title, description } = learningObjectives[currentPersonIndex];

  // handle button click to show the next student
  const showNextStudent = () => {
    if (currentPersonIndex >= learningObjectives.length - 1) return;
    setCurrentPersonIndex(currentPersonIndex + 1);
  };

  useEffect(() => {
    getImages(learningObjectives[currentPersonIndex].image);
  }, [currentPersonIndex]);

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
            <Icon name={title} size="large" />
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
