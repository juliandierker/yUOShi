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

// async function getContent(task) {
//   if (task.content) return await task.content.toArray();

//   if (task.categories) await task.categories.toArray();

//   if (task.statements) await task.statements.toArray();
// }

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
  const [score, setScore] = useState(0);

  async function solveTask() {
    await getSolution;
  }
  const updateScore = useCallback(async () => {
    const allSolutions = await PromisifiedMeteor.call("tasks.getAllSolution");
    setScore(calculateScore(allSolutions));
  }, []);

  const getNextTask = useCallback(async () => {
    if (currentStation.title === "Intro") {
      return "nextStation";
    }

    if (!currentTask || stationTasks.length === 0) return;
    const nextTaskIdx = stationTasks.findIndex((task) => task.id === currentTask.id) + 1;

    if (nextTaskIdx === 0) {
      return;
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
  }, [stationTasks, currentTask]);

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
    const currentTask = setCurrentTask(_currentTask);
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
    getSolution,
    setSolution,
    solveTask,
    jumpToTask,
    score
  };

  return <TasksContext.Provider value={ctx}>{children}</TasksContext.Provider>;
};
