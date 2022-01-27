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

function calculateScore(allSolutions) {
  return allSolutions.reduce((count, solution) => {
    count += solution.contents.points;
    return count;
  }, 0);
}

export const TasksContextProvider = ({ currentStation, children }) => {
  const { stationTasks, stations, setCurrentStation } = useStationsContext();
  const [getSolution, setSolution] = useState(null);
  const [currentTask, setCurrentTask] = useState(undefined);
  const [currentTaskLoading, setCurrentTaskLoading] = useState(true);
  const [userSolutions, setUserSolutions] = useState([])
  const [score, setScore] = useState(0);

  async function solveTask() {
    await getSolution();
    updateScore();
  }
  const updateScore = useCallback(async () => {
    const allSolutions = await PromisifiedMeteor.call("tasks.getAllSolution");
    setUserSolutions(allSolutions);
    setScore(calculateScore(allSolutions));
  }, []);

  const getNextTask = useCallback(async () => {
    if (currentStation.title === "Intro" || currentStation.name === "Intro") {
      return "nextStation";
    }

    if (!currentTask || stationTasks.length === 0) return;
    const nextTaskIdx = stationTasks.findIndex((task) => task.id === currentTask.id) + 1;

    if (nextTaskIdx === -1 && stationTasks.length > 0) {
      return "nextStation";
    }

    if (nextTaskIdx >= stationTasks.length) {
      return "nextStation";
    }

    try {
      setCurrentTaskLoading(true);
      const nextTask = await PromisifiedMeteor.call("tasks.getTask", stationTasks[nextTaskIdx].id);
      setCurrentTask(nextTask);
    } catch (e) {
      return;
    } finally {
      setCurrentTaskLoading(false);
    }
  }, [stationTasks, currentTask, currentStation]);

  const getPrevTask = useCallback(async () => {
    if (!currentStation || !currentTask) return;

    setCurrentTaskLoading(true);

    try {
      const _currentTask = await PromisifiedMeteor.call(
        "tasks.prevTaskForStation",
        currentStation.id,
        currentTask.id
      );
      setCurrentTask(_currentTask);
    } catch (err) {
      return "previousStation";
    } finally {
      setCurrentTaskLoading(false);
    }
  }, [currentStation, currentTask]);

  const updateTask = useCallback(async () => {
    if (!currentStation) {
      return;
    }
    setCurrentTaskLoading(true);
    const _currentTask = await PromisifiedMeteor.call(
      "tasks.nextTaskForStation",
      currentStation.id
    );
    if (!currentTask) {
      setCurrentTask(_currentTask);
    }
    updateScore();
    setCurrentTaskLoading(false);
  }, [currentStation, updateScore]);

  const jumpToTask = useCallback(async (id) => {
    for (let station of stations) {
      let targetTask = station.tasks?.find((taskItem) => taskItem.id === id);
      if (targetTask) {
        targetTask = await PromisifiedMeteor.call("tasks.getTask", id);
        if (station.id != currentStation.id) {
          setCurrentStation(station);
        }
        setCurrentTask(targetTask);
      }
    }
  });

  const getTask = useCallback(async (id) => {
    return await PromisifiedMeteor.call("tasks.getTask", id);
  });

  useEffect(() => {
    updateTask();
    updateScore();
  }, [updateScore, updateTask]);

  const ctx = {
    currentTask,
    currentTaskLoading,
    updateTask,
    getPrevTask,
    getNextTask,
    setCurrentTask,
    getSolution,
    setSolution,
    solveTask,
    jumpToTask,
    score,
    userSolutions,
    getTask
  };

  return <TasksContext.Provider value={ctx}>{children}</TasksContext.Provider>;
};
