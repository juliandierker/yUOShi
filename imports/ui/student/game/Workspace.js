import React, { useState, useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import Swal from "sweetalert2";
import DragAnimationTemplate from "../../tasks/dragdrop/DragAnimationTemplate";
import TrainingAnimationTemplate from "../../tasks/training/TrainingAnimationTemplate";
import TagAnimationTemplate from "../../tasks/tag/TagAnimationTemplate";
import ClozeAnimationTemplate from "../../tasks/cloze/ClozeAnimationTemplate";
import MemoryAnimationTemplate from "../../tasks/memory/MemoryAnimationTemplate";
import MultiChoiceAnimationTemplate from "../../tasks/multiChoice/MultiChoiceAnimationTemplate";
import SurveyAnimationTemplate from "../../tasks/survey/SurveyAnimationTemplate";
import KeywordList from "../../tasks/KeywordList";
import { GameContext } from "../StudentContextProvider";

import equals from "fast-deep-equal";

import TaskProgress from "../taskProgress/TaskProgress";
import { Segment, Button, Grid, Modal } from "semantic-ui-react";

import Hyphenated from "react-hyphen";
import de from "hyphenated-de";
import { workspaceHelper } from "../../../shared/WorkspaceHelper";

export default function Workspace() {
  const { tasks, student, packages } = useContext(GameContext);
  const [showSolution, setShowSolution] = useState(false);
  const [showactiveTasks, setShowactiveTasks] = useState(false);
  const [packageStarted, setPackageStarted] = useState(false);
  const [dimmer, setDimmer] = useState(false);
  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
  const [activeTask, setActiveTask] = useState(false);
  const [readFinished, setReadFinished] = useState(false);
  const [currentSubPackageIndex, setCurrentSubPackageIndex] = useState(0);
  const [currentSequenceId, setCurrentSequenceId] = useState(0);
  const [finishedKeywords, setFinishedKeywords] = useState([]);
  const regex = "\\d+";
  //Effect event listener with callback
  useEffect(() => {
    window.addEventListener(
      "beforeunload",
      Meteor.call("student.setLastActiveTaskId", activeTask._id, student._id)
    );
    // return () => {
    //   window.addEventListener("beforeunload"),
    //     Meteor.call("student.setLastActiveTaskId", activeTask._id, student._id);
    // };
  });
  //Effect to check which tasks or training is ment to be in workspace
  useEffect(() => {
    if (student.setLastActiveTaskId) {
      setActiveTask(tasks.find((task) => task._id == student.setLastActiveTaskId));
    } else if (student.tasks.length > 0) {
      setActiveTask(student.tasks[tasks.length - 1]);
    } else if (student.solvedTasks > 0) {
      // setActiveTask(student.currentPackage.content[student.currentPackage.content.length - 1]);
      Meteor.call(
        "students.initTraining",
        student.currentPackage.content[student.currentPackage.content.length - 1],
        student._id
      );
      setActiveTask(student.currentPackage.content[student.currentPackage.content.length - 1]);
    } else {
      console.log("BB");
      console.log(student.currentPackage.content[0].tasks[0]);
      Meteor.call("students.initTraining", student.currentPackage.content[0].tasks[0], student._id);
      setActiveTask(student.currentPackage.content[0].tasks[0]);
    }
  }, [
    student.setLastActiveTaskId,
    student.tasks,
    student.solvedTasks,
    student.currentPackage.trainings,
    tasks,
    activeTask._id
  ]);

  // show = (dimmer) => () => setState({ dimmer, packageStarted: true });
  // close = () => setState({ packageStarted: false });

  useEffect(() => {
    openDescriptionModal();
    checkReadFinish();
  });
  // TODO: Check the clicked package and the progress in the package

  function openDescriptionModal() {
    console.log(activeTask);
    if (student.filePrefix === "Training") {
      var tasks = student.content[0].quests.tasks;
      console.log(tasks);
    } else {
      var tasks = student.tasks;
    }
    let currentStudentTask = tasks.find((elem) => {
      return elem && activeTask && elem._id === activeTask._id;
    });

    if (
      currentStudentTask &&
      currentStudentTask.taskState &&
      !currentStudentTask.taskState.viewed &&
      (!currentStudentTask.video || currentStudentTask.taskState.videoWatched) &&
      !descriptionModalOpen
    ) {
      setState({ descriptionModalOpen: true });

      Swal.fire({
        position: "top-start",
        type: "info",
        title: activeTask.description,
        onClose: () => {
          setState({ descriptionModalOpen: false });
        }
      });

      Meteor.call("solutionHandler.viewTask", student._id, activeTask._id);
    }
  }

  function checkReadFinish() {
    if (student.tasks[0] && readFinished !== student.tasks[0].taskState.readFinished) {
      setState({
        readFinished: student.tasks[0].taskState.readFinished
      });
    }
  }

  function checkPackageProgress() {
    var check = student.solvedTraining.filter((elem) => {
      return elem.package == student.currentPackage[0].name;
    });

    return check.length >= 2;
  }

  function taskSwitch() {
    if (activeTask) {
      switch (activeTask.filePrefix) {
        case "Drag":
          return <DragAnimationTemplate {...taskProps} />;
        case "Tag":
          return <TagAnimationTemplate finishedKeywords={finishedKeywords} />;
        case "Cloze":
          return <ClozeAnimationTemplate />;
        case "Memory":
          return <MemoryAnimationTemplate />;
        case "Survey":
          return <SurveyAnimationTemplate />;
        case "MultiChoice":
          return <MultiChoiceAnimationTemplate />;
        case "Training":
          return <TrainingAnimationTemplate activeTask={activeTask} />;
      }
    } else {
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "🎉 Du hast das Paket Motivation abgeschlossen. 🎉",

        timer: 2000
      });
    }
  }

  function renderNavigationButtons() {
    return (
      <Grid id="workspaceGrid" columns={2}>
        <Grid.Row id="renderNavigationButtons">
          <Grid.Column>
            <Button
              id="prevTaskBtn"
              content="Vorherige Aufgabe"
              icon="left arrow"
              labelPosition="left"
              onClick={workspaceHelper.handlePreviousTaskButtonClick(student)}
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              id="nextTaskBtn"
              content="Nächste Aufgabe"
              icon="right arrow"
              labelPosition="right"
              onClick={workspaceHelper.handleNextTaskButtonClick(student)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  function renderDescription() {
    let task = tasks.find((elem) => {
      return elem.sequenceId === student.currentSequenceId;
    });
    console.log(task);

    if (!task) return;
    return (
      <Segment id="workspaceDescription">
        <Hyphenated language={de}>{task.description}</Hyphenated>
        {task.hint ? <p style={{ fontWeight: "bold" }}>{task.hint}</p> : null}
      </Segment>
    );
  }
  function renderWorkspaceGrid() {
    let activesubpackage = workspaceHelper.getActiveSubpackage(student);

    return (
      <React.Fragment>
        <Grid id="workspaceGrid">
          <Grid.Column
            id="workspaceGridMobile"
            width={4}
            style={{
              padding: "0rem"
            }}>
            {renderDescription()}
            {renderKeywordList()}
          </Grid.Column>
          <Grid.Column width={8} id="workspaceGridMobile">
            <div className="workspace__container">{taskSwitch()}</div>
          </Grid.Column>
          {/* <TaskProgress
            activeTask={activeTask}
            student={student}
            currentPackage={student.currentPackage[0]}
            activeSubpackage={activesubpackage}
          /> */}
        </Grid>
        {renderNavigationButtons()}
      </React.Fragment>
    );
  }

  function renderKeywordList() {
    if (activeTask && activeTask.type === "tag") {
      return (
        <KeywordList
          handleClick={handleKWContinue.bind(this)}
          keywords={activeTask.content[0].keywords}
          finishedKeywords={finishedKeywords}
        />
      );
    }
  }
  return <div id="workspace_div">{renderWorkspaceGrid()}</div>;
}

Workspace.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
