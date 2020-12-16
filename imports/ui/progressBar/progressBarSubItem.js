/* eslint-disable react/prop-types */
import React from "react";

import "./progressBarSubItem.css"

export default function ProgressBarSubItem({ title, type }) {
  return (
    <div className="progress-bar-sub-item">
      <div className="progress-bar-sub-item-header">
        {type}
      </div>
      <div className="progress-bar-sub-item-text">
        <span className="progress-bar-sub-item-text-span">{title}</span>
      </div>
    </div>
  )
}