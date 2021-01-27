/* eslint-disable react/prop-types */
import React from "react";

import Icon from "../IconComponent/Icon"

import "./progressBarSubItem.css"

export default function ProgressBarSubItem({ title, type }) {
  // TODO: Add correct icons!!
  let iconName = "info"
  iconName = type === "multi" ? "checkmark-alt" : iconName
  iconName = type === "survey" ? "checkmark-alt" : iconName
  iconName = type === "drag" ? "info" : iconName
  iconName = type === "card" ? "info" : iconName
  iconName = type === "cloze" ? "info" : iconName
  iconName = type === "memory" ? "info" : iconName
  iconName = type === "training" ? "info" : iconName


  const icon = <Icon name={iconName} size="large"></Icon>
  return (
    <div className="progress-bar-sub-item">
      <div className="progress-bar-sub-item-icon">
        {icon}
      </div>
      <div className="progress-bar-sub-item-text">{title}</div>
    </div>
  )
}