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

export const TasksContextProvider = ({ stations, currentStation, children }) => {
  const [currentTask, setCurrentTask] = useState(undefined);
  const [tasks, setTasks] = useState(undefined);
  const [currentTaskLoading, setCurrentTaskLoading] = useState(true);

  const updateTask = useCallback(async () => {
    if (!currentStation) {
      return;
    }

    setCurrentTaskLoading(true);

    const tasks = await PromisifiedMeteor.call("tasks.nextTaskForStation", currentStation.id);
    setCurrentTask(tasks);

    setCurrentTaskLoading(false);
  }, [currentStation]);

  useEffect(() => {
    updateTask();
  }, [updateTask]);

  const ctx = {
    currentTask,
    currentTaskLoading,
    updateTask
  };

  return <TasksContext.Provider value={ctx}>{children}</TasksContext.Provider>;
};
