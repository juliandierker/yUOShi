import React, { memo } from "react";
import { TasksContextProvider, useTasksContext } from "./TasksContext";
import { PackageContextProvider, usePackageContext } from "./PackagesContext";
import RenderQuest from "../taskRenderers/RenderQuestTask";
import RenderDrag from "../taskRenderers/RenderDrag";
import RenderTag from "../taskRenderers/RenderTag";
import RenderCard from "../taskRenderers/RenderCard";
import RenderCloze from "../taskRenderers/RenderCloze";
import RenderTraining from "../taskRenderers/RenderTraining";
import RenderMemory from "../taskRenderers/RenderMemory";

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

const RenderWorkspace = (props) => {
  const { currentTask, currentTaskLoading, updateTask } = useTasksContext();

  if (currentTaskLoading) {
    return <p>Loading Task...</p>;
  }

  return <RenderTask task={currentTask} updateTask={updateTask} />;
};

const Workspace = ({ packageId, ...props }) => {
  return (
    <TasksContextProvider packageId={packageId}>
      <RenderWorkspace {...props} />
    </TasksContextProvider>
  );
};

export default Workspace;
