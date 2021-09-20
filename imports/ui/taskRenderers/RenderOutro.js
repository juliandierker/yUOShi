import React, { useState, useMemo } from "react"

import Icon from "../IconComponent/Icon"

import "./RenderOutro.scss"

function RenderOutro(props) {
  const { task, upadteTask, stations } = props

  // if currentStudent === -1 --> show quest overview
  const { currentStudentIndex, setCurrentStudentIndex } = useState(-1);



  // TODO: muss abgeändert werden, sobald das Backend das Handeln kann
  const { students, iconSize, columns, rows } = useMemo(() => {

    // Get Name and Tasks for a student/learningObjective
    const students = stations.map((station, index) => {
      const tasks = station.tasks
      return {
        tasks,
        name: station.title.split(",")[0]
      }
    })


    // generate question and answers from the content string
    const generateMultiChoiceStructure = (studentTask => {
      let question = ""
      let answers = []

      const mcComponents = studentTask.content.split("_")
      for (let i in mcComponents) {
        if (mcComponents[i] === "QUESTION") {
          question = mcComponents[parseInt(i) + 1].replace("\n", "")
        } else if (mcComponents[i] === "ANSWER-FALSE") {
          answers.push({ answer: mcComponents[parseInt(i) + 1].replace("\n", ""), correct: false })
        } else if (mcComponents[i] === "ANSWER-TRUE") {
          answers.push({ answer: mcComponents[parseInt(i) + 1].replace("\n", ""), correct: true })
        }
      }
      return { question, answers }
    })

    // modify the tasks to be in the correct format for the actual task templats
    for (let i in students) {
      students[i].tasks.map((studentTask) => {
        if (studentTask.type === "TEXT") {
          studentTask.index = 0;
        } else if (studentTask.type === "MC") {
          const { question, answers } = generateMultiChoiceStructure(studentTask)
          studentTask.question = question
          studentTask.answers = answers
          studentTask.index = 1;
        } else {
          studentTask.index = 2;
        }
      })
      students[i].tasks = students[i].tasks.sort((a, b) => { return a.index - b.index })
    }

    const studentCount = students.length

    const rows = Math.floor(Math.sqrt(studentCount + 1))
    const columns = Math.ceil(studentCount / rows);

    const height = 400;
    const width = 400;
    const iconHeight = (height - (60 * (rows - 1))) / rows
    const iconWidth = (width - (60 * (columns - 1))) / columns
    const iconSize = Math.min(iconHeight, iconWidth)

    return { students, iconSize, columns, rows }
  }, [task])



  const RenderStudentIcons = () => {
    return students.map((student, index) => {
      return <div className="student-icon" key={"sicon-" + index} style={{ width: iconSize, height: iconSize }}>
        <img className="student-icon-i" src={"/assets/Icons/" + student.name + ".svg"} />
        <div className="student-icon-name">{student.name}</div>
      </div>
    })
  }

  const RenderQuestOverview = () => {
    return <div className="quest-overview-container">
      <div className="quest-overview-text-container">
        <div className="quest-overview-text-title">Willkommen bei den Quests</div>
        <div className="quest-overview-text-subtitle">Levelübersicht</div>
        <div className="quest-overview-text">Du bist gut in das Schuljahr gestartet und äußerst motiviert. Insgesamt hast du auch ein hutes Gefühl und eine nette Klasse.
          Zu den meisten Schüler*innen kannst du ein sehr gutes Verhältnis aufbauen. <br /> Im Laufe des Schuljahrs bemerkst du aber bei einigen Schüler*innen Veränderungen im Verhalten,
          die du selbstverständlich protokollierst. Sie wirken insgesamt unmotivierter und strengen sich weniger an als vorher. Folgende Schüler*innen fallen die dabei besonders auf.
          <br /> Der Text ist übrigens noch Hardcoded und muss irgendwie noch dynamisch erstellt werden.
        </div>
      </div>
      <div className="quest-overview-students-container" style={{ width: (iconSize * columns + (60 * (columns))) }}>
        <RenderStudentIcons />
      </div>
    </div>
  }

  const RenderQuest = () => {
    if (!currentStudentIndex || currentStudentIndex === -1) {
      return RenderQuestOverview();
    } else {
      return <div >{currentStudentIndex}</div>
    }
  }

  return <div className="outro-container">
    <div className="outro-header">
      <div className="outro-title">Bearbeitung der Fallbeispiele</div>
    </div>
    <div className="quest-container">
      <RenderQuest />
    </div>
  </div>

}

export default RenderOutro