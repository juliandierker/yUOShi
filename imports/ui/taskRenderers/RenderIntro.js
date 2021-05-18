import React, { useMemo, useState } from "react";
import Icon from "../IconComponent/Icon";

import "./RenderIntro.css";

function RenderTag(props) {
  const { task, updateTask } = props

  // get title and subtitle from task
  const title = task.title.replace("_INTRO_", "")
  const subtitle = task.description
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0)


  // generate persons array from students
  const persons = useMemo(() => {
    return task.topics.map((person) => {
      const personInfo = person.content.split("--")
      return {
        name: person.title,
        hobby: personInfo[0],
        text: personInfo[1]
      }
    })
  }, [task])

  // handle button click to show the next student
  const showNextStudent = () => {
    if (currentPersonIndex >= persons.length - 1) return
    setCurrentPersonIndex(currentPersonIndex + 1)
  }

  // handle button click to show the previous student
  const showPreviousStudent = () => {
    if (currentPersonIndex <= 0) return
    setCurrentPersonIndex(currentPersonIndex - 1)

  }
  // render information of a student
  const RenderPerson = () => {
    const IconName = persons[currentPersonIndex].name.split(",")[0];

    return (
      <div className="person-container">
        <div className="person-overview">
          <div className="person-icon">
            <Icon name={IconName} size="large" />
          </div>
          <div className="person-data">
            <div className="person-name">{persons[currentPersonIndex].name}</div>
            <div className="hobby-title">Hobbies</div>
            <div className="hobby-text">{persons[currentPersonIndex].hobby}</div>
          </div>
        </div>
        <div className="person-text-container">
          <div className="person-text">{persons[currentPersonIndex].text}</div>
        </div>
      </div>
    )
  }

  // render basic Intro scaffolding
  return <div className="intro-container">
    <div className="intro-title-container">
      <div className="intro-title">{title}</div>
      <div className="intro-subtitle">{subtitle}</div>
    </div>
    <RenderPerson />
    <div className="intro-navigation">
      <button className="intro-navigation-button" onClick={showPreviousStudent}><Icon name="angle-left" /></button>
      <div className="intro-navigation-label-current">{"Schüler " + (currentPersonIndex + 1) + " von " + (persons.length)}</div>
      <button className="intro-navigation-button" onClick={showNextStudent}><Icon name="angle-right" /></button>
    </div>
  </div>
}

export default RenderTag