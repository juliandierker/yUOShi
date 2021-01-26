/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { Grid, Icon } from "semantic-ui-react";

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

import "./workspace.css"

// eslint-disable-next-line react/display-name
const RenderTask = memo(({ task, updateTask }) => {
  if (!task) {
    return null;
  }

  switch (task.type) {
    case "multi":
    case "survey":
      return <RenderQuest task={task} updateTask={updateTask} />;
    case "drag":
      return <RenderDrag task={task} updateTask={updateTask} />;
    case "tag":
      return <RenderTag task={task} updateTask={updateTask} />;
    case "card":
      return <RenderCard task={task} updateTask={updateTask} />;
    case "cloze":
      return <RenderCloze task={task} updateTask={updateTask} />;
    case "memory":
      return <RenderMemory task={task} updateTask={updateTask} />;
    case "training":
      return <RenderTraining task={task} updateTask={updateTask} />;
    default:
      return null;
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
            <button className="navigation-button" id="navigation-button-left"><Icon name="arrow left" size="large" /></button>
            <button className="navigation-button" id="navigation-button-submit">AUSWERTEN</button>
            <button className="navigation-button" id="navigation-button-right"><Icon name="arrow right" size="large" /></button>
          </div>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};
export default Workspace;
