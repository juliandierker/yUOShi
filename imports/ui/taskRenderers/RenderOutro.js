import React, { useState, useMemo } from "react"

import Icon from "../IconComponent/Icon"

import "./RenderOutro.css"

function RenderOutro(props) {
  const { task, upadteTask } = props
  // if currentStudent === -1 --> show quest overview
  const { currentStudentIndex, setCurrentStudentIndex } = useState(-1);

  // TODO: muss abgeändert werden, sobald das Backend das Handeln kann
  const { students, iconSize, columns, rows } = useMemo(() => {
    // gather all required informations to form the quest
    const data = task.topics.map((d, index) => {
      const taskData = d.title.split("_")
      const studentName = taskData[0]
      const taskType = taskData[1]

      return {
        studentName,
        taskType,
        content: d.content
      }
    })
    // sorting the studentTasks to the students
    let students = []
    for (let i in data) {
      const studentIndex = students.findIndex(student => { return student.name === data[i].studentName })
      let _task = { type: data[i].taskType, content: data[i].content }
      if (studentIndex !== -1) {
        students[studentIndex].tasks.push(_task)
      } else {
        let tasks = [_task]
        let newStudent = { name: data[i].studentName, tasks }
        students.push(newStudent)
      }
    }
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
        <Icon className="student-icon-i" name={student.name} />
        <div className="student-icon-name">{student.name}</div>
      </div>
    })
  }

  const RenderQuestOverview = () => {
    return <div className="quest-overview-container">
      <div className="quest-overview-text-container">
        <div className="quest-overview-text-title">TITLE</div>
        <div className="quest-overview-text-subtitle">SUBTITLE</div>
        <div className="quest-overview-text">TEXT</div>
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
      <div className="outro-title">{task.title.replace("_QUEST_", "")}</div>
    </div>
    <div className="quest-container">
      <RenderQuest />
    </div>
  </div>

}

export default RenderOutro