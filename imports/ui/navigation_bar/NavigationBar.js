import React, { useState, useCallback } from "react";
import Icon from "../IconComponent/Icon";

import { Grid } from "semantic-ui-react";

import { useTasksContext } from "../student/TasksContext";
import { useStationsContext } from "../student/StationsContext";

import "./NavigationBar.css";

export default function NavigationBar() {
  const [hoverPrevious, setHoverPrevious] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);

  const { stations, currentPosition, setCurrentStation } = useStationsContext();
  const { getPrevTask, getNextTask, solveTask, currentTask } = useTasksContext();
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

  const RenderPreviousButton = useCallback(() => {
    const iconColor = hoverPrevious ? "white" : "black";

    return (
      <button
        className="navigation-button"
        id="navigation-button-left"
        onClick={navigatePrevious}
        onMouseEnter={handleButtonPreviousEnter}
        onMouseLeave={handleButtonPreviousLeave}>
        <Icon name="arrow-left" size="large" color={iconColor} />
      </button>
    );
  }, [hoverPrevious]);

  const RenderNextButton = useCallback(() => {
    const iconColor = hoverNext ? "white" : "black";

    return (
      <button
        className="navigation-button"
        id="navigation-button-right"
        onClick={navigateNext}
        onMouseEnter={handleButtonNextEnter}
        onMouseLeave={handleButtonNextLeave}>
        <Icon name="arrow-right" size="large" color={iconColor} />
      </button>
    );
  }, [hoverNext]);

  return (
    <div className="workspace-navigation">
      <RenderPreviousButton />
      <button
        disabled={currentTask?.type === "tag"}
        onClick={solveTask}
        className="navigation-button"
        id="navigation-button-submit">
        <span className="navigation-button-submit-text">AUSWERTEN</span>
        <Icon name="submit" className="navigation-button-submit-icon" color="white" />
      </button>
      <RenderNextButton />
    </div>
  );
}
