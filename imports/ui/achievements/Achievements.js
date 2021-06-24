import React, {useEffect, useState} from "react";

import "./Achievements.scss"

/**
 * Component to show achievements
 * @param {string} unlockText First Text shown in  the achievement animation
 * @param {string} title name of the achievement
 * @param {description} description description of the achievement
 * @param {boolean} showAchievement flag to toggle the achievement sequence
 * @param {finishedCallback} callback callback fired after the the animation has finished 
 */
export default function Achievements({unlockText, title, description, showAchievement, finishedCallback}) {

  // TODO: maybe replace with an achievement context???
  const [active, setActive] = useState(false) 

  async function waitForAnimationFinish() {
    setTimeout(() => {
      setActive(false)
      finishedCallback()
    }, 8500)
  }

  useEffect(() => {
    if(!showAchievement) return

    setActive(true);

    waitForAnimationFinish();


  }, [showAchievement])

  const RenderAchievement = () => {
    if(!active) return <React.Fragment />

    return (
      <div className="achievement-banner animated">
        <div className="achievement-text">
          <p className="achievement-notification">{unlockText ? unlockText : "Achievement unlocked!"}</p>
          <p className="achievement-title">{title ? title : ""}</p>
          <p className="achievement-name">{description ? description : ""}</p>
      </div> 
      </div>
    )
  }

  

  return <RenderAchievement></RenderAchievement>
}