import React, { memo } from "react";
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

import NavigationBar from "../navigation_bar/NavigationBar";
import ProgressBar from "../progressBar/progressBar";

import Icon from "../IconComponent/Icon";

import "./workspace.css";
import Loading from "../Loading";

// eslint-disable-next-line react/display-name
const RenderTask = memo(({ task, updateTask }) => {
  if (!task) {
    return null;
  }
  let taskRenderer = null;
  switch (task.type) {
    case "multi":
    case "survey":
      taskRenderer = <RenderQuest task={task} />;
      break;
    case "drag":
      taskRenderer = <RenderDrag task={task} />;
      break;
    case "tag":
      taskRenderer = <RenderTag task={task} />;
      break;
    case "card":
      taskRenderer = <RenderCard task={task} />;
      break;
    case "cloze":
      taskRenderer = <RenderCloze task={task} />;
      break;
    case "memory":
      taskRenderer = <RenderMemory task={task} />;
      break;
    case "training":
      taskRenderer = <RenderTraining task={task} />;
      break;
    default:
      taskRenderer = null;
  }
  // add title to workspace
  if (task.type === "tag" || task.type === "text") {
    return (
      <div className="text-workspace">
        <div className="workspace-text-title">{task.title}</div>
        {taskRenderer}
      </div>
    );
  }
  const taskClassName =
    task.type === "drag" ? "workspace-drag-container" : "workspace-task-container";

  return (
    <>
      <div className="workspace-task-header">
        <div className="workspace-task-title-container">
          <div className="workspace-task-title">{task.title}</div>
          <div className="workspace-task-description">{task.description}</div>
        </div>
        <div className="workspace-help-icon">
          <Icon name="bars" />
        </div>
      </div>
      <div className={taskClassName}>{taskRenderer}</div>
    </>
  );
});

// const submitRef = useRef(null)

const RenderWorkspace = () => {
  const { currentTask, currentTaskLoading, updateTask } = useTasksContext();
  if (currentTaskLoading) {
    return <Loading />;
  }
  return <RenderTask task={currentTask} updateTask={updateTask} />;
};
const RenderProgressBar = () => {
  const { currentTask, getPoints } = useTasksContext();
  const { currentPackage, packagesLoading, packageTasks } = usePackagesContext();
  const { stations, currentStation } = useStationsContext();

  return (
    <ProgressBar
      currentPackage={currentPackage}
      packageTasks={packageTasks}
      packageLoading={packagesLoading}
      task={currentTask}
      stations={stations}
      currentStation={currentStation}
      currentTask={currentTask}
      getPoints={getPoints}></ProgressBar>
  );
};

const Workspace = () => {
  const { stations, currentStation } = useStationsContext();
  return (
    <React.Fragment>
      <Grid id="workspaceGrid">
        {stations && (
          <TasksContextProvider currentStation={currentStation}>
            <Grid.Column style={{ maxWidth: "22%" }} width={4}>
              <RenderProgressBar />
            </Grid.Column>
            <Grid.Column width={12}>
              <div className="workspace-container">
                <RenderWorkspace />
              </div>
              <NavigationBar />
            </Grid.Column>
          </TasksContextProvider>
        )}
      </Grid>
    </React.Fragment>
  );
};
export default Workspace;

Workspace.propTypes = {
  stationId: PropTypes.string
};
