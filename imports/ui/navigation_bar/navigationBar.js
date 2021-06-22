import React, { useState } from "react";
import Icon from "../IconComponent/Icon"

import { Grid } from "semantic-ui-react";

import { useTasksContext } from "../student/TasksContext";
import { useStationsContext } from "../student/StationsContext";

import "./navigationBar.css"

export default function NavigationBar( ){
  const [hoverPrevious, setHoverPrevious] = useState(false)
  const [hoverNext, setHoverNext] = useState(false)

  const { stations, currentPosition, setCurrentStation } = useStationsContext();
  const { getPrevTask, getNextTask, getSolution, currentTask } = useTasksContext();
  async function navigateNext() {
    if ((await getNextTask()) === "nextStation") {
      if (stations.length > currentPosition) {
        setCurrentStation(stations[currentPosition + 1]);
      }
    }
  }

  const handleButtonPreviousEnter = () => {
    setHoverPrevious(true);
  };
  const handleButtonPreviousLeave = () => {
    setHoverPrevious(false);
  };

  const handleButtonNextEnter = () => {
    setHoverNext(true);
  };
  const handleButtonNextLeave = () => {
    setHoverNext(false);
  };

  async function navigatePrevious() {
    if ((await getPrevTask()) === "previousStation") {
      if (stations[currentPosition - 1]) {
        setCurrentStation(stations[currentPosition - 1]);
      }
    }
  }

  const RenderPreviousButton = () => {

    const iconName = hoverPrevious ? "arrow-left-alt" : "arrow-left";

    return (
      <button
          className="navigation-button"
          id="navigation-button-left"
          onClick={navigatePrevious}
          onMouseEnter={handleButtonPreviousEnter}
          onMouseLeave={handleButtonPreviousLeave}>
          <Icon name={iconName} size="large" />
        </button>
    )
  }

  const RenderNextButton = () => {

    const iconName = hoverNext ? "arrow-right-alt" : "arrow-right";

    return (
      <button 
          className="navigation-button" 
          id="navigation-button-right" 
          onClick={navigateNext}
          onMouseEnter={handleButtonNextEnter}
          onMouseLeave={handleButtonNextLeave}>
        <Icon name={iconName} size="large" />
      </button>
    )
  }

  return (
      <div className="workspace-navigation">
        <RenderPreviousButton />
        <button
          disabled={currentTask?.type === "tag"}
          onClick={getSolution}
          className="navigation-button"
          id="navigation-button-submit">
          AUSWERTEN
        </button>
        <RenderNextButton />
      </div>
  );
}