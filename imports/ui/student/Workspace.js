import React from "react";
import { TasksContextProvider, useTasksContext } from "./TasksContext";
import DragAnimationTemplate from "../tasks/dragdrop/DragAnimationTemplate";
import TagAnimationTemplate from "../tasks/tag/TagAnimationTemplate";
import ClozeAnimationTemplate from "../tasks/cloze/ClozeAnimationTemplate";
import MemoryAnimationTemplate from "../tasks/memory/MemoryAnimationTemplate";
import SurveyAnimationTemplate from "../tasks/survey/SurveyAnimationTemplate";
import MultiChoiceAnimationTemplate from "../tasks/multiChoice/MultiChoiceAnimationTemplate";
import TrainingAnimationTemplate from "../tasks/training/TrainingAnimationTemplate";

const RenderTask = (task) => {
    if (!task) {
        return null
    }

    switch (task.type) {
        case "drag":
            return <DragAnimationTemplate task={task} />;
        case "tag":
            return <TagAnimationTemplate task={task} />;
        case "cloze":
            return <ClozeAnimationTemplate task={task} />;
        case "memory":
            return <MemoryAnimationTemplate task={task} />;
        case "survey":
            return <SurveyAnimationTemplate task={task} />;
        case "multi":
            return <MultiChoiceAnimationTemplate task={task} />;
        case "training":
            return <TrainingAnimationTemplate task={task} />;
        default:
            return null
    }
}

const RenderWorkspace = () => {
    const { currentTask, currentTaskLoading } = useTasksContext()

    if (currentTaskLoading) {
        return <p>Loading Task...</p>
    }

    return <RenderTask task={currentTask} />
}

const Workspace = ({ packageId, ...props }) => {
  return <TasksContextProvider packageId={packageId}>
    <RenderWorkspace {...props} />
  </TasksContextProvider>
}

export default Workspace
