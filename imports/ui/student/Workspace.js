import React, { memo } from "react";
import { TasksContextProvider, useTasksContext } from "./TasksContext";
import RenderMulti from "../taskRenderers/RenderMulti";
import RenderDrag from "../taskRenderers/RenderDrag";
import RenderTag from "../taskRenderers/RenderTag";
import RenderCard from "../taskRenderers/RenderCard";

const RenderTask = memo(({ task, updateTask }) => {
    if (!task) {
        return null
    }

    switch (task.type) {
        // TODO: update the remaining views.
        case "multi":
            return <RenderMulti task={task} updateTask={updateTask} />;
        case "drag":
            return <RenderDrag task={task} updateTask={updateTask} />;
        case "tag":
            return <RenderTag task={task} updateTask={updateTask} />;
        case "card":
            return <RenderCard task={task} updateTask={updateTask} />;
        case "cloze":
            return null;
        case "memory":
            return null;
        case "survey":
            return null;
        case "training":
            return null;
        default:
            return null
    }
})

const RenderWorkspace = (props) => {
    const { currentTask, currentTaskLoading, updateTask } = useTasksContext()

    if (currentTaskLoading) {
        return <p>Loading Task...</p>
    }

    return <RenderTask task={currentTask} updateTask={updateTask} />
}

const Workspace = ({ packageId, ...props }) => {
  return <TasksContextProvider packageId={packageId}>
    <RenderWorkspace {...props} />
  </TasksContextProvider>
}

export default Workspace
