import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import PromisifiedMeteor from "../../api/promisified";

const TasksContext = createContext(null);
export const useTasksContext = () => {
  const ctx = useContext(TasksContext);

  if (ctx === null) {
    throw new Error("No TasksContextProvider available.");
  }

  return ctx;
};

async function getContent(task) {
  if (task.content) await task.content.toArray();

  if (task.categories) await task.categories.toArray();

  if (task.statements) await task.statements.toArray();
}
export const TasksContextProvider = ({ currentStation, children }) => {
  const [currentTask, setCurrentTask] = useState(undefined);
  const [tasks, setTasks] = useState(undefined);
  const [currentTaskLoading, setCurrentTaskLoading] = useState(true);

  const updateTask = useCallback(async () => {
    if (!currentStation) {
      return;
    }
    setCurrentTaskLoading(true);
    const currentTask = await PromisifiedMeteor.call("tasks.nextTaskForStation", currentStation.id);
    setCurrentTask(currentTask);
    if (currentTask) setTasks(getContent(currentTask));

    setCurrentTaskLoading(false);
  }, [currentStation]);

  useEffect(() => {
    updateTask();
  }, [updateTask]);

  const ctx = {
    currentTask,
    currentTaskLoading,
    updateTask,
    tasks
  };

  return <TasksContext.Provider value={ctx}>{children}</TasksContext.Provider>;
};
