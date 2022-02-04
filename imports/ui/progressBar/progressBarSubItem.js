/* eslint-disable react/prop-types */
import React, { useState } from "react";

import Icon from "../IconComponent/Icon";
import { useTasksContext } from "../student/TasksContext";

import "./progressBarSubItem.css";

export default function ProgressBarSubItem({ title, type, highlighted, id, solved }) {
  const { jumpToTask } = useTasksContext();
  const [hover, setHover] = useState(false);
  const handleItemEnter = () => {
    setHover(true);
  };

  const handleItemLeave = () => {
    setHover(false);
  };

  const RenderIcon = () => {
    const iconName = type !== "text" && type !== "tag" ? "checkmark" : "info";
    const iconBackgroundColor = solved ? "#BBE55E" : "#6F94CC";
    const iconContainerBackgroundColor = hover || highlighted ? "white" : iconBackgroundColor
    const iconColor = hover || highlighted ? iconBackgroundColor : "white"

    let pbIconClassname = (hover || highlighted) ? "progress-bar-sub-item-icon-highlighted" : "progress-bar-sub-item-icon";

    return (
      <div className={pbIconClassname} style={{ backgroundColor: iconContainerBackgroundColor }}>
        <Icon name={iconName} size="large" color={iconColor} />
      </div>
    )
  }

  let pbClassname = (hover || highlighted) ? "progress-bar-sub-item-highlighted" : "progress-bar-sub-item";

  return (
    <div
      className={pbClassname}
      onMouseEnter={handleItemEnter}
      onMouseLeave={handleItemLeave}
      onClick={() => jumpToTask(id)}>
      <RenderIcon />
      <div
        className="progress-bar-sub-item-text"
        onMouseEnter={handleItemEnter}
        onMouseLeave={handleItemLeave}>
        {title}
      </div>
    </div>
  );
}
