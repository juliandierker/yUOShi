import React, { memo, useRef } from "react";
import PropTypes from "prop-types";

import { Grid } from "semantic-ui-react";

import { TasksContextProvider, useTasksContext } from "./TasksContext";
import { usePackagesContext } from "./PackagesContext";
import { useStationsContext } from "./StationsContext";

import RenderQuest from "../taskRenderers/RenderQuestTask";
import RenderDrag from "../taskRenderers/RenderDrag";
import RenderTag from "../taskRenderers/RenderTag";
import RenderCard from "../taskRenderers/RenderCard";
import RenderCloze from "../taskRenderers/RenderCloze";
import RenderTraining from "../taskRenderers/RenderTraining";
import RenderMemory from "../taskRenderers/RenderMemory";
import RenderIntro from "../taskRenderers/RenderIntro";
import RenderOutro from "../taskRenderers/RenderOutro";
import ProgressBar from "../progressBar/progressBar";
import Icon from "../IconComponent/Icon";

import "./workspace.css";

const Workspace = ({ packageId, ...props }) => {

  const submitRef = useRef(null)

  // eslint-disable-next-line react/display-name
  const RenderTask = memo(({ task, updateTask }) => {
    if (!task) {
      return null;
    }

    if (task.title.startsWith("_INTRO_")) {
      return <RenderIntro task={task} updateTask={updateTask} />
    } else if (task.title.startsWith("_QUEST_")) {
      return <RenderOutro task={task} updateTask={updateTask} />
    }


    let taskRenderer = null;
    switch (task.type) {
      case "multi":
      case "survey":
        taskRenderer = <RenderQuest task={task} updateTask={updateTask} submitButton={submitRef} />;
        break;
      case "drag":
        taskRenderer = <RenderDrag task={task} updateTask={updateTask} submitButton={submitRef} />;
        break;
      case "tag":
        taskRenderer = <RenderTag task={task} updateTask={updateTask} />;
        break;
      case "card":
        taskRenderer = <RenderCard task={task} updateTask={updateTask} />;
        break;
      case "cloze":
        taskRenderer = <RenderCloze task={task} updateTask={updateTask} submitButton={submitRef} />;
        break;
      case "memory":
        taskRenderer = <RenderMemory task={task} updateTask={updateTask} />;
        break;
      case "training":
        taskRenderer = <RenderTraining task={task} updateTask={updateTask} />;
        break;
      default:
        taskRenderer = null;
    }

    // add title to workspace
    if (task.type === "tag" || task.type === "text") {
      return <div className="text-workspace">
        <div className="workspace-text-title">{task.title}</div>
        {taskRenderer}
      </div>
    }
    const taskClassName = task.type === "drag" ? "workspace-drag-container" : "workspace-task-container";

    return (
      <>
        <div className="workspace-task-header">
          <div className="workspace-task-title-container">
            <div className="workspace-task-title">
              {task.title}
            </div>
            <div className="workspace-task-description">
              {task.description}
            </div>
          </div>
          <div className="workspace-help-icon">
            <Icon name="bars" />
          </div>
        </div>
        <div className={taskClassName}>
          {taskRenderer}
        </div>
      </>)
  });

  const RenderWorkspace = () => {
    const { currentTask, currentTaskLoading, updateTask } = useTasksContext();
    if (currentTaskLoading) {
      return <p>Loading Task...</p>;
    }
    return <RenderTask task={currentTask} updateTask={updateTask} />;
  };
  const RenderProgressBar = () => {
    const { currentTask, currentTaskLoading } = useTasksContext();
    const { currentPackage, packagesLoading, packageTasks } = usePackagesContext();
    const { stations } = useStationsContext();

    if (packagesLoading || currentTaskLoading) {
      return <p>Loading Packages...</p>;
    }
    return (
      <ProgressBar
        currentPackage={currentPackage}
        packageTasks={packageTasks}
        packageLoading={packagesLoading}
        task={currentTask}
        stations={stations}>

      </ProgressBar>
    );
  };
  const RednerNavigation = () => {
    const { currentTask } = useTasksContext();

    // only show Submit Button, when the task is not a text or an auto-submitting task
    const showSubmit = currentTask !== undefined && currentTask.type !== "text" && currentTask.type !== "tag" && currentTask.type !== "memory" && !currentTask.title.startsWith("_INTRO_")

    return (<>
      <button className="navigation-button" id="navigation-button-left"><Icon name="arrow-left" size="large" /></button>
      {showSubmit && <button className="navigation-button" id="navigation-button-submit" ref={submitRef} >AUSWERTEN</button>}
      <button className="navigation-button" id="navigation-button-right"><Icon name="arrow-right" size="large" /></button>
    </>)
  }

  const { stations, currentStation } = useStationsContext();

  return (
    <React.Fragment>
      <Grid id="workspaceGrid">
        <Grid.Column style={{ maxWidth: "22%" }} width={4}>
          {stations && (
            <TasksContextProvider currentStation={currentStation}>
              <RenderProgressBar />
            </TasksContextProvider>
          )}
        </Grid.Column>
        <Grid.Column width={12}>

          <div className="workspace-container">
            <TasksContextProvider stations={stations} currentStation={currentStation}>
              <RenderWorkspace />
            </TasksContextProvider>
          </div>
          <div className="workspace-navigation">
            <TasksContextProvider stations={stations} currentStation={currentStation}>
              <RednerNavigation />
            </TasksContextProvider>
          </div>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};
export default Workspace;

Workspace.propTypes = {
  stationId: PropTypes.string
};
