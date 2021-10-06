import React, { useState, useMemo, useEffect, useCallback } from "react"
import PromisifiedMeteor from "../../api/promisified";

import { Loader } from "semantic-ui-react"

import { useTasksContext } from "../student/TasksContext";

import "./RenderOutro.scss"
import Swal from "sweetalert2";

function RenderOutro(props) {
  const { task, upadteTask, stations } = props
  const { getTask, getSolution, setSolution } = useTasksContext();

  // if currentStudent === -1 --> show quest overview
  const [currentStudentIndex, setCurrentStudentIndex] = useState(-1);
  const [currentStudentTask, setCurrentStudentTask] = useState(undefined);
  const [selectedAnswers, setSelectedAnswers] = useState([])

  // use this onSubmit function when the user presses the send Solution Button 
  useEffect(() => {
    setSolution(() => onSubmit);
  }, [selectedAnswers])

  // set the current quest task when the currentStudentIndex gets updated
  useEffect(() => {
    if (currentStudentIndex === -1) {
      setCurrentStudentTask(undefined)
      return
    }
    getTask(students[currentStudentIndex].tasks[0].id).then((task) => {
      setCurrentStudentTask(task)
    })
  }, [currentStudentIndex])

  // calculate Image size and column count to show the student Images in the Quest Overview
  const { students, iconSize, columns, rows } = useMemo(() => {

    // Get Name and Tasks for a student/learningObjective
    const students = stations.map((station, index) => {
      const tasks = station.tasks
      return {
        tasks,
        name: station.title.split(",")[0]
      }
    })

    const studentCount = students.length

    const rows = Math.floor(Math.sqrt(studentCount + 1))
    const columns = Math.ceil(studentCount / rows);

    const height = 400;
    const width = 400;
    const iconHeight = (height - (60 * (rows - 1))) / rows
    const iconWidth = (width - (60 * (columns - 1))) / columns
    const iconSize = Math.min(iconHeight, iconWidth)

    return { students, iconSize, columns, rows }
  }, [stations])

  // submit the current quest solution 
  const onSubmit = useCallback(async () => {
    if (currentStudentIndex === -1 && !currentStudentTask) {
      // no quest selected
      return
    }

    const { question, content_id, id } = currentStudentTask.contents[0]
    const givenAnswers = selectedAnswers[question.id].map((answer) => {
      return {
        quest_id: id,
        content_id: content_id,
        answer_id: answer
      }
    })

    try {
      const result = await PromisifiedMeteor.call("tasks.checkQuest", id, givenAnswers);
      if (result.is_correct) {
        // user submitted the correct answer
        await Swal.fire({
          position: "top-end",
          type: "success",
          title: "Quest geschafft!",
          timer: 2000
        });
        setCurrentStudentIndex(-1);
      } else {
        // user submitted an incorrect answer
        await Swal.fire({
          position: "top-end",
          type: "warning",
          title: "Die Lösung war nicht richtig. Du kannst es noch einmal probieren.",
          timer: 2000
        });
      }
    } catch (e) {
      // server threw an error (it should NOT be an Exception when the task was already finished!!!!)
      await Swal.fire({
        position: "top-end",
        type: "info",
        title: "Die wurde schon gelöst.",
        timer: 2000
      });
      setCurrentStudentIndex(-1);
    }
  }, [selectedAnswers])

  // render the student icons with the calculated size
  const RenderStudentIcons = () => {
    return students.map((student, index) => {
      return <div className="student-icon" key={"sicon-" + index} style={{ width: iconSize, height: iconSize }} onClick={() => setCurrentStudentIndex(index)}>
        <img className="student-icon-i" src={"/assets/Icons/" + student.name + ".svg"} />
        <div className="student-icon-name">{student.name}</div>
      </div>
    })
  }

  // render the overall structure of the quest overview
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

  // toggle an answer, when the user clicked the checkbox (or the text)
  const toggleAnswer = useCallback(
    (question_id, answer_id) => () => {
      setSelectedAnswers((cur) => {
        let selected = cur[question_id] || []

        if (!selected.includes(answer_id)) {
          selected = [...selected, answer_id]
        } else {
          selected = selected.filter((id) => id !== answer_id)
        }

        return {
          ...cur,
          [question_id]: selected
        }
      })
    },
    []
  )

  // render the multiple choice task of the currently selected learningObjective
  const RenderMC = () => {
    if (currentStudentTask === undefined) {
      // wait for the current task to finish loading
      return (
        <Loader style={{ display: "block" }} inverted />
      )
    }

    const { question, answers } = currentStudentTask.contents[0]
    return (
      <div className="outro-quest-container">
        <div className="outro-quest-question">
          {question}
        </div>
        <div className="outro-quest-answers">
          {answers.map((answer, index) => {
            return (
              <div className="outro-quest-answer" key={"outro-quest-answer-" + answer.id} onClick={toggleAnswer(question.id, answer.id)}>
                <input
                  name={"checkbox_" + index}
                  id={"checkbox_" + answer.id}
                  type="checkbox"
                  className="outro-quest-answer-checkbox"
                  readOnly
                  checked={selectedAnswers[question.id] && selectedAnswers[question.id].includes(answer.id)}
                />
                <label htmlFor={"checkbox_" + index} className="outro-quest-answer-label">
                  {answer.content}
                </label>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // render the container for the outro
  return <div className="outro-container">
    <div className="outro-header">
      <div className="outro-title">Bearbeitung der Fallbeispiele</div>
    </div>
    <div className="quest-container">
      {currentStudentIndex === -1 ? <RenderQuestOverview /> : <RenderMC />}
    </div>
  </div>

}

export default RenderOutro