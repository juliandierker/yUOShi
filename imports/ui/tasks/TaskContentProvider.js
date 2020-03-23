import React, { useContext, useState, useRef, useEffect } from "react";
import { usePrevious } from "../../shared/customHooks";

export default function TaskContentProvider(props) {
  const { currentTask } = props;
  const previousTask = usePrevious(currentTask);
  const [taskContent, setTaskContent] = useState(currentTask.content[0]);

  const latestTaskContent = useRef();
  latestTaskContent.current = taskContent;
  const latestCurrentTask = useRef();
  latestCurrentTask.current = currentTask;

  const taskChanged = previousTask && previousTask.taskId != currentTask.taskId;
  const externUpdate =
    previousTask &&
    previousTask.savedUser != currentTask.savedUser &&
    currentTask.savedUser != Meteor.userId();

  useEffect(() => {
    // TODO saving task goes here
  });

  const taskState = { taskContent, setTaskContent };

  return (
    <TaskStateContext.Provider value={taskState}>
      {!taskChanged && props.children}
    </TaskStateContext.Provider>
  );
}
