import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import PromisifiedMeteor from "../../api/promisified";
import { useStationsContext } from "./StationsContext";

const TasksContext = createContext(null);
export const useTasksContext = () => {
  const ctx = useContext(TasksContext);

  if (ctx === null) {
    throw new Error("No TasksContextProvider available.");
  }

  return ctx;
};

async function getContent(task) {
  if (task.content) return await task.content.toArray();

  if (task.categories) await task.categories.toArray();

  if (task.statements) await task.statements.toArray();
}

export const TasksContextProvider = ({ currentStation, children }) => {
  const { stationTasks } = useStationsContext();
  const [getSolution, setSolution] = useState(null);
  const [currentTask, setCurrentTask] = useState(undefined);
  const [currentTaskLoading, setCurrentTaskLoading] = useState(true);

  async function solveTask() {
    await getSolution;
  }

  const getNextTask = useCallback(async () => {
    if (!currentTask || stationTasks.length === 0) return;
    const nextTaskIdx = stationTasks.findIndex((task) => task.id === currentTask.id) + 1;
    if (nextTaskIdx === 0) return;
    if (nextTaskIdx >= stationTasks.length) return;
    try {
      setCurrentTaskLoading(true);
      const nextTask = await PromisifiedMeteor.call("tasks.getTask", stationTasks[nextTaskIdx].id);
      setCurrentTask(nextTask);
    } catch (e) {
      //TODO handle error
      return;
    } finally {
      setCurrentTaskLoading(false);
    }
  }, [stationTasks, currentTask]);

  const getPrevTask = useCallback(async () => {
    if (!currentStation || !currentTask) {
      return;
    }
    setCurrentTaskLoading(true);

    try {
      const _currentTask = await PromisifiedMeteor.call(
        "tasks.prevTaskForStation",
        currentStation.id,
        currentTask.id
      );
      setCurrentTask(_currentTask);
    } catch (err) {
      return;
    } finally {
      setCurrentTaskLoading(false);
    }
  }, [currentStation, currentTask]);

  const updateTask = useCallback(async () => {
    if (!currentStation) {
      return;
    }
    setCurrentTaskLoading(true);
    const currentTask = await PromisifiedMeteor.call("tasks.nextTaskForStation", currentStation.id);
    setCurrentTask(currentTask);

    setCurrentTaskLoading(false);
  }, [currentStation]);

  useEffect(() => {
    updateTask();
  }, [updateTask]);

  const ctx = {
    currentTask,
    currentTaskLoading,
    updateTask,
    getPrevTask,
    getNextTask,
    getSolution,
    setSolution,
    solveTask
  };

  return <TasksContext.Provider value={ctx}>{children}</TasksContext.Provider>;
};
