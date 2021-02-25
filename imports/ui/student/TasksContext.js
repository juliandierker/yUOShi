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

export const TasksContextProvider = ({ stationId, children }) => {
  const [currentTask, setCurrentTask] = useState();
  const [tasks, setTasks] = useState();
  const [currentTaskLoading, setCurrentTaskLoading] = useState(true);

  const updateTask = useCallback(async () => {
    if (!stationId) {
      return;
    }

    setCurrentTaskLoading(true);

    const tasks = await PromisifiedMeteor.call("tasks.nextTaskForPackage", stationId);
    setCurrentTask(tasks);

    setCurrentTaskLoading(false);
  }, [stationId]);

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
