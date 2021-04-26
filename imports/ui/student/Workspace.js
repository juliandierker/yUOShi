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
import ProgressBar from "../progressBar/progressBar";
import Icon from "../IconComponent/Icon";

import "./workspace.css";
import LoggingOut from "../LoggingOut";

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
  return (
    <div className="inner-workspace">
      <div className="workspace-task-title">{task.title}</div>
      {taskRenderer}
    </div>
  );
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
  const { stations, currentStation, stationTasks, stationLoading } = useStationsContext();
  if (stationLoading) {
    return <p>Loading Stations...</p>;
  }
  return (
    <ProgressBar
      currentStation={currentStation}
      stationTasks={stationTasks}
      stationLoading={stationLoading}
      task={currentTask}
      stations={stations}
    />
  );
};

const NavigationButtons = () => {
  const { stations, currentStation } = useStationsContext();
  const { getPrevTask, getNextTask, solveTask, getSolution } = useTasksContext();
  return (
    <Grid.Column width={12}>
      <div className="workspace-container">
        <RenderWorkspace />
      </div>
      <div className="workspace-navigation">
        <button className="navigation-button" id="navigation-button-left" onClick={getPrevTask}>
          <Icon name="arrow-left" size="large" />
        </button>
        <button onClick={getSolution} className="navigation-button" id="navigation-button-submit">
          AUSWERTEN
        </button>
        <button className="navigation-button" id="navigation-button-right" onClick={getNextTask}>
          <Icon name="arrow-right" size="large" />
        </button>
      </div>
    </Grid.Column>
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
            <NavigationButtons />
          </TasksContextProvider>
        )}
      </Grid>
    </React.Fragment>
  );
};
export default Workspace;

RenderTask.propTypes = {
  task: PropTypes.object,
  updateTask: PropTypes.func
};
Workspace.propTypes = {
  stationId: PropTypes.string
};
