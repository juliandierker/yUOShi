import React, { memo } from "react";
import { TasksContextProvider, useTasksContext } from "./TasksContext";
import DragAnimationTemplate from "../tasks/dragdrop/DragAnimationTemplate";
import TagAnimationTemplate from "../tasks/tag/TagAnimationTemplate";
import ClozeAnimationTemplate from "../tasks/cloze/ClozeAnimationTemplate";
import MemoryAnimationTemplate from "../tasks/memory/MemoryAnimationTemplate";
import SurveyAnimationTemplate from "../tasks/survey/SurveyAnimationTemplate";
import TrainingAnimationTemplate from "../tasks/training/TrainingAnimationTemplate";
import RenderMulti from "../taskRenderers/RenderMulti";

const RenderTask = memo(({ task, updateTask }) => {
    if (!task) {
        return null
    }

    switch (task.type) {
        // TODO: update the remaining views.
        case "multi":
            return <RenderMulti task={task} updateTask={updateTask} />;
        case "drag":
            return null;
        case "tag":
            return null;
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
