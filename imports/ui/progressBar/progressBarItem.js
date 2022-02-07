/* eslint-disable react/prop-types */
import React, { useState, useCallback, useMemo } from "react";
import ProgressBarSubItem from "./progressBarSubItem";
import Icon from "../IconComponent/Icon";

import "./progressBarItem.css";

export default function ProgressBarItem({ station, solved, highlighted, currentTask, setCurrentStation, props }) {
  const { tasks, locked, name } = station;
  const [hover, setHover] = useState(false);
  const [hoverSubArea, setHoverSubArea] = useState(false);

  const handleItemEnter = () => {
    setHover(true);
  };
  const handleItemLeave = () => {
    setHover(false);
  };
  const handleSubAreaEnter = () => {
    setHoverSubArea(true);
  };

  const handleSubAreaLeave = () => {
    setHoverSubArea(false);
  };

  const RenderStatus = () => {
    let color = "#6F94CC";
    if (solved === "solved") {
      color = "#BBE55E";
    } else if (solved === "partial") {
      color = "#E5D05E";
    }
    return (
      <div className="progressBar-item-status" style={{ backgroundColor: color }}></div>
    );
  }

  const RenderSubItems = useCallback(() => {
    return (
      <div className="dummy">
        <div
          className="progressBar-sub-items"
          onMouseEnter={handleSubAreaEnter}
          onMouseLeave={handleSubAreaLeave}>
          {tasks.map((task, index) => {
            return (
              <ProgressBarSubItem
                key={"progressBarSubItem_" + index}
                type={task.type}
                id={task.id}
                title={task.name}
                solved={task.solved}
                highlighted={currentTask && task.id === currentTask.id}
              />
            );
          })}
        </div>
      </div>
    );
  }, [currentTask?.id, tasks]);

  const iconColor = hover || hoverSubArea || highlighted ? "white" : "black";

  let icon = <div />;
  icon = tasks && tasks.length != 0 ? <Icon name="bars" size="large" color={iconColor} /> : icon;
  icon = locked ? <Icon name="lock-locked" size="large" color={iconColor} /> : icon;

  let pbClassname = highlighted ? "progressBar-item-highlighted" : "progressBar-item";
  if (hover || hoverSubArea) {
    pbClassname =
      tasks && tasks.length != 0 ? "progressBar-item-hover-tasks" : "progressBar-item-hover";
  }

  return (
    <React.Fragment>
      <div
        className={pbClassname}
        onMouseEnter={handleItemEnter}
        onMouseLeave={handleItemLeave}
        onClick={() => (station.tasks ? null : setCurrentStation(station))}>
        <RenderStatus />
        <span className="progressBar-item-name">{name}</span>
        <div className="progressBar-item-icon">{icon}</div>
      </div>
      {(hover || hoverSubArea) && tasks && <RenderSubItems />}
    </React.Fragment>
  );
}
