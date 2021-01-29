/* eslint-disable react/prop-types */
import React from "react";

import Icon from "../IconComponent/Icon"

import "./progressBarSubItem.css"

export default function ProgressBarSubItem({ title, type }) {
  let iconName = "info"
  if (type !== "text" && type !== "tag") {
    iconName = "checkmark-alt"
  }

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