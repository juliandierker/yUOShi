/* eslint-disable react/prop-types */
import React from "react";

import { Icon } from "semantic-ui-react"

import "./progressBarSubItem.css"

export default function ProgressBarSubItem({ title, type }) {
  // TODO: Add own icons for taskTypes
  let iconName = "file text"
  iconName = type === "multi" ? "checkmark box" : iconName
  iconName = type === "survey" ? "check circle" : iconName
  iconName = type === "drag" ? "grab" : iconName
  iconName = type === "card" ? "sticky note" : iconName
  iconName = type === "cloze" ? "pen alternate" : iconName
  iconName = type === "memory" ? "table" : iconName
  iconName = type === "training" ? "train" : iconName


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