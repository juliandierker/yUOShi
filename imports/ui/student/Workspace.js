/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { Grid } from "semantic-ui-react";

import { TasksContextProvider, useTasksContext } from "./TasksContext";
import { PackagesContextProvider, usePackagesContext } from "./PackagesContext";
import RenderQuest from "../taskRenderers/RenderQuestTask";
import RenderDrag from "../taskRenderers/RenderDrag";
import RenderTag from "../taskRenderers/RenderTag";
import RenderCard from "../taskRenderers/RenderCard";
import RenderCloze from "../taskRenderers/RenderCloze";
import RenderTraining from "../taskRenderers/RenderTraining";
import RenderMemory from "../taskRenderers/RenderMemory";
import ProgressBar from "../progressBar/progressBar";
import Icon from "../IconComponent/Icon"


import "./workspace.css"

// eslint-disable-next-line react/display-name
const RenderTask = memo(({ task, updateTask }) => {
  if (!task) {
    return null;
  }
  let taskRenderer = null;
  switch (task.type) {
    case "multi":
    case "survey":
      taskRenderer = <RenderQuest task={task} updateTask={updateTask} />;
      break;
    case "drag":
      taskRenderer = <RenderDrag task={task} updateTask={updateTask} />;
      break;
    case "tag":
      taskRenderer = <RenderTag task={task} updateTask={updateTask} />;
      break;
    case "card":
      taskRenderer = <RenderCard task={task} updateTask={updateTask} />;
      break;
    case "cloze":
      taskRenderer = <RenderCloze task={task} updateTask={updateTask} />;
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
  } else if (task.type !== "drag") {
    return (
      <>
        <div className="workspace-task-title-container"><div className="workspace-task-title">{task.title}</div></div>
        <div className="workspace-task-container">{taskRenderer}</div>
      </>)
  } else {
    return (
      <>
        <div className="workspace-task-title-container"><div className="workspace-task-title">{task.title}</div></div>
        <div className="workspace-drag-container">{taskRenderer}</div>
      </>)
  }

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
  if (packagesLoading || currentTaskLoading) {
    return <p>Loading Packages...</p>;
  }
  return (
    <ProgressBar
      currentPackage={currentPackage}
      packageTasks={packageTasks}
      packageLoading={packagesLoading}
      task={currentTask}>

    </ProgressBar>
  );
};

const Workspace = ({ packageId, ...props }) => {
  return (
    <React.Fragment>
      <Grid id="workspaceGrid">
        <Grid.Column style={{ maxWidth: "22%" }} width={4}>
          <TasksContextProvider packageId={packageId}>
            <PackagesContextProvider>
              <RenderProgressBar {...props} />
            </PackagesContextProvider>
          </TasksContextProvider>
        </Grid.Column>
        <Grid.Column width={12}>
          <div className="workspace-container">
            <TasksContextProvider packageId={packageId}>
              <RenderWorkspace {...props} />
            </TasksContextProvider>
          </div>
          <div className="workspace-navigation">
            <button className="navigation-button" id="navigation-button-left"><Icon name="arrow-left" size="large" /></button>
            <button className="navigation-button" id="navigation-button-submit">AUSWERTEN</button>
            <button className="navigation-button" id="navigation-button-right"><Icon name="arrow-right" size="large" /></button>
          </div>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};
export default Workspace;
