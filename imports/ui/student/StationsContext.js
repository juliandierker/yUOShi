import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import PromisifiedMeteor from "../../api/promisified";

const StationsContext = createContext(null);

export const useStationsContext = () => {
  const ctx = useContext(StationsContext);

  if (ctx === null) {
    throw new Error(
      "No StationsContextProvider in Ancestors. You cannot use the station context here!"
    );
  }

  return ctx;
};

export const StationsContextProvider = ({ currentPackageId, children }) => {
  console.log(currentPackageId);
  const [stations, setStations] = useState(undefined);
  const [currentStation, setCurrentStation] = useState(undefined);
  const [stationLoading, setstationLoading] = useState(true);
  const [stationTasks, setStationsTasks] = useState([]);
  const updateStations = useCallback(async () => {
    setstationLoading(true);
    const currentStations = await PromisifiedMeteor.call("package.getStations", currentPackageId);
    let tasks = [];
    if (currentStation) {
      tasks = await PromisifiedMeteor.call("stations.getTasks", currentStation.id);
    } else {
      tasks = await PromisifiedMeteor.call("stations.getTasks", currentStations[0].id);
      setCurrentStation(currentStations[0]);
    }
    console.log(tasks);

    setStations(currentStations);
    setStationsTasks(tasks);
    setstationLoading(false);
  }, [currentPackageId, currentStation]);

  useEffect(() => {
    updateStations();
  }, [updateStations]);
  const ctx = {
    stationLoading,
    updateStations,
    stations,
    currentStation,
    stationTasks,
    setCurrentStation
  };

  return <StationsContext.Provider value={ctx}>{children}</StationsContext.Provider>;
};
