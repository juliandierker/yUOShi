/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";

import Icon from "../IconComponent/Icon";
import { useTasksContext } from "../student/TasksContext";

import "./progressBarSubItem.css";

export default function ProgressBarSubItem({ title, type, highlighted, id }) {
  const { jumpToTask } = useTasksContext();
  const [hover, setHover] = useState(false);

  const handleItemEnter = () => {
    setHover(true);
  };

  const handleItemLeave = () => {
    setHover(false);
  };

  const iconName = (type !== "text" && type !== "tag") ? "checkmark" : "info"
  const iconColor = (hover || highlighted) ? "black" : "white"

  const icon = <Icon name={iconName} size="large" color={iconColor} />

  let pbClassname = "progress-bar-sub-item";
  let pbIconClassname = "progress-bar-sub-item-icon";
  if (hover || highlighted) {
    pbClassname = "progress-bar-sub-item-highlighted";
    pbIconClassname = "progress-bar-sub-item-icon-highlighted";
  }

  return (
    <div
      className={pbClassname}
      onMouseEnter={handleItemEnter}
      onMouseLeave={handleItemLeave}
      onClick={() => jumpToTask(id)}>
      <div className={pbIconClassname}>{icon}</div>
      <div
        className="progress-bar-sub-item-text"
        onMouseEnter={handleItemEnter}
        onMouseLeave={handleItemLeave}>
        {title}
      </div>
    </div>
  );
}
