import React, { useContext, useState, useRef, useEffect, useMemo } from "react";
import { GameContext } from "./StudentContextProvider";
import PropTypes from "prop-types";
import { usePrevious } from "../../shared/customHooks";
import Workspace from "./game/Workspace";
import { TaskContentProvider } from "../tasks/TaskContentProvider";

export const ActiveTaskContext = React.createContext();

export default React.memo(function WorkspaceContextProvider() {
  const { tasks, student, packages } = useContext(GameContext);
  const [showSolution, setShowSolution] = useState(false);
  const [showactiveTasks, setShowactiveTasks] = useState(false);
  const [packageStarted, setPackageStarted] = useState(false);

  const [activeTask, setActiveTask] = useState(false);
  const prevTask = usePrevious(activeTask);

  const taskChanged = prevTask && prevTask.taskId != activeTask.taskId;

  const [readFinished, setReadFinished] = useState(false);
  const [currentSubPackageIndex, setCurrentSubPackageIndex] = useState(0);
  const [currentSequenceId, setCurrentSequenceId] = useState(0);
  const [finishedKeywords, setFinishedKeywords] = useState([]);
  const regex = "\\d+";

  useEffect(() => {
    if (taskChanged) {
      window.addEventListener(
        "beforeunload",
        Meteor.call("students.setLastActiveTaskId", activeTask._id, student._id)
      );
    }

    // return () => {
    //   window.addEventListener("beforeunload"),
    //     Meteor.call("student.setLastActiveTaskId", activeTask._id, student._id);
    // };
  });
  useEffect(() => {
    if (student.setLastActiveTaskId && student.setLastActiveTaskId != prevTask._id) {
      setActiveTask(tasks.find((task) => task._id == student.setLastActiveTaskId));
    } else if (student.solvedTasks > 0) {
      // setActiveTask(student.currentPackage.content[student.currentPackage.content.length - 1]);
      Meteor.call(
        "students.initTraining",
        student.currentPackage.content[student.currentPackage.content.length - 1],
        student._id
      );
      setActiveTask(student.currentPackage.content[student.currentPackage.content.length - 1]);
    } else {
      WorkspaceContextProvider;
      Meteor.call("students.initTraining", student.currentPackage.content[0].tasks[0], student._id);
      setActiveTask(student.currentPackage.content[0].tasks[0]);
    }
  }, []);

  function handleNextTaskButtonClick(student) {
    Meteor.call("students.showNextTask", student);
  }

  function handleNextTask(student) {
    if (
      !student.solvedTasks.find((elem) => {
        return elem.sequenceId.toString(student) === student.currentSequenceId.toString(student);
      })
    ) {
      Meteor.call(
        "students.getNextTask",
        student.currentPackage.name,
        student.currentSequenceId,
        student._id,
        (err, res) => {
          if (res) {
            return true;
          }
        }
      );
    }
  }

  function handlePreviousTaskButtonClick(student) {
    if (student && student.currentSequenceId > 1) {
      Meteor.call("students.showPreviousTask", student);
    }
  }
  function getActiveSubpackage() {
    console.log("subPackage");
    let pId;
    if (student.tasks[0]) {
      pId = student.tasks[0].parentId;
    } else if (student.currentTraining[0]) {
      pId = student.currentTraining[0].parentId;
    } else {
      return;
    }
    console.log(student.currentPackage);
    return student.currentPackage.content.filter(
      (subpackage) => student.currentPackage.name + subpackage.sequenceId === pId
    )[0];
  }
  function solvePackage(student) {
    Meteor.call("students.solvePackage", student.currentPackage.name, student._id, (err, res) => {
      if (!err) return true;
    });
  }

  var currentTask = null;
  currentTask = student.tasks.find((currentTask) => currentTask.taskId == student.lastActiveTaskId);
  if (!currentTask) {
    currentTask = student.solvedTasks.find(
      (currentTask) => currentTask.taskId == student.lastActiveTaskId
    );
  }
  console.log(activeTask);
  const task = useMemo(() => tasks.find((task) => task._id == student.lastActiveTaskId), [
    student.lastActiveTaskId,
    tasks
  ]);

  return (
    <ActiveTaskContext.Provider
      value={{
        currentTask,
        task,
        setReadFinished,
        getActiveSubpackage,
        handlePreviousTaskButtonClick,
        handleNextTask,
        handleNextTaskButtonClick
      }}>
      {activeTask ? (
        <TaskContentProvider currentTask={activeTask} task={task}>
          <Workspace />
        </TaskContentProvider>
      ) : (
        <Workspace />
      )}
    </ActiveTaskContext.Provider>
  );
});
