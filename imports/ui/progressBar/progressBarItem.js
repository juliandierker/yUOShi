/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Icon } from "semantic-ui-react"

import ProgressBarSubItem from "./progressBarSubItem";

import "./progressBarItem.css";

export default function ProgressBarItem({ data }) {
  const { tasks, locked, name } = data
  const [hover, setHover] = useState(false)
  const [hoverSubArea, setHoverSubArea] = useState(false)

  const handleItemEnter = () => {
    setHover(true)
  }
  const handleItemLeave = () => {
    setHover(false)
  }
  const handleSubAreaEnter = () => {
    setHoverSubArea(true)
  }

  const handleSubAreaLeave = () => {
    setHoverSubArea(false)
  }

  const RenderSubItems = () => {
    return <div className="dummy">
      <div className="progressBar-sub-items" onMouseEnter={handleSubAreaEnter} onMouseLeave={handleSubAreaLeave}>
        {tasks.map((data, index) => {
          return <ProgressBarSubItem key={"progressBarSubItem_" + index} type={data.type} title={data.name} />
        })}
      </div >
    </div>
  }

  let icon = <div></div>
  icon = tasks ? <Icon name="bars" size="large" /> : icon
  icon = locked ? <Icon name="lock" size="large" /> : icon
  let pbClassname = "progressBar-item"
  if (hover || hoverSubArea) {
    pbClassname = tasks ? "progressBar-item-hover-tasks" : "progressBar-item-hover"
  }

  return <React.Fragment>
    < div className={pbClassname} onMouseEnter={handleItemEnter} onMouseLeave={handleItemLeave} >
      <span className="progressBar-item-name">{name}</span>
      {icon}
    </div >
    {(hover || hoverSubArea) && tasks && <RenderSubItems />}
  </React.Fragment>
}