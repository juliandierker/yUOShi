import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Icon from "../IconComponent/Icon";
import Loading from "../Loading";
import NavigationBar from "../navigation_bar/NavigationBar";
import ProgressBar from "../progressBar/progressBar";
import RenderCard from "../taskRenderers/RenderCard";
import RenderCloze from "../taskRenderers/RenderCloze";
import RenderDrag from "../taskRenderers/RenderDrag";
import RenderIntro from "../taskRenderers/RenderIntro";
import RenderMemory from "../taskRenderers/RenderMemory";
import RenderQuest from "../taskRenderers/RenderQuestTask";
import RenderText from "../taskRenderers/RenderText";
import RenderTraining from "../taskRenderers/RenderTraining";
import { usePackagesContext } from "./PackagesContext";
import { useStationsContext } from "./StationsContext";
import { TasksContextProvider, useTasksContext } from "./TasksContext";
import "./workspace.css";

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
      taskRenderer = <RenderText task={task} />;
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
        <div className="workspace-text-description">{task.description}</div>
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
  const { currentPosition, stations } = useStationsContext();
  const { currentPackage } = usePackagesContext();

  useEffect(() => {
    return () => {
      Meteor.call("packagesCache.insert", currentPackage.id);
    };
  }, [currentPackage.id]);

  if (!stations[0].learningObjectives || (currentTaskLoading && currentPosition > 0)) {
    return <Loading />;
  } else if (currentPosition === 0) {
    return <RenderIntro learningObjectives={stations[0].learningObjectives} />;
  }
  return <RenderTask task={currentTask} updateTask={updateTask} />;
};

const RenderProgressBar = () => {
  const { currentTask, score } = useTasksContext();
  const { currentPackage, packagesLoading, packageTasks, jumpToTask } = usePackagesContext();
  const { stations, currentStation, setCurrentStation } = useStationsContext();
  return (
    <ProgressBar
      currentPackage={currentPackage}
      packageTasks={packageTasks}
      packageLoading={packagesLoading}
      task={currentTask}
      stations={stations}
      currentStation={currentStation}
      currentTask={currentTask}
      score={score}
      setCurrentStation={setCurrentStation}
      jumpToTask={jumpToTask}
    />
  );
};

const Workspace = () => {
  const { stations, currentStation, cachedPackageId } = useStationsContext();
  const { currentPackage, updateCurrentPackage } = usePackagesContext();

  if (!currentPackage) {
    updateCurrentPackage(cachedPackageId);
    // return <Loading />;
  }

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
