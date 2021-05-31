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
  const [stations, setStations] = useState(undefined);
  const [currentStation, setCurrentStation] = useState(undefined);
  const [stationLoading, setstationLoading] = useState(true);
  const [stationTasks, setStationsTasks] = useState([]);

  const updateStations = useCallback(async () => {
    setstationLoading(true);
    let currentStations = await PromisifiedMeteor.call("package.getStations", currentPackageId);
    for (let station of currentStations) {
      station.tasks = station.tasks.buffer;
    }
    let tasks = [];
    if (currentStation) {
      tasks = await PromisifiedMeteor.call("stations.getTasks", currentStation.id);
    } else {
      tasks = await PromisifiedMeteor.call("stations.getTasks", currentStations[0].id);
      setCurrentStation(currentStations.reverse()[0]);
    }

    setStations(currentStations);
    setStationsTasks(tasks.reverse());
    setstationLoading(false);
  }, [currentPackageId, currentStation]);
  // TODO : observe loads when we change stations
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
