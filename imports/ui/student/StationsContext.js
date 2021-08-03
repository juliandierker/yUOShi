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

export const StationsContextProvider = ({ learningObjectives, currentPackageId, children }) => {
  const [stations, setStations] = useState(undefined);
  const [currentStation, setCurrentStation] = useState(undefined);
  const [stationLoading, setstationLoading] = useState(true);
  const [stationTasks, setStationsTasks] = useState([]);

  const currentPosition = stations
    ?.map(function(station) {
      return station.id;
    })
    .indexOf(currentStation.id);
  const updateStations = useCallback(async () => {
    setstationLoading(true);

    let currentStations = await PromisifiedMeteor.call("package.getStations", currentPackageId);
    currentStations = [{ title: "Intro", learningObjectives: learningObjectives }].concat(
      currentStations
    );

    for (let station of currentStations) {
      station.tasks = station.tasks?.buffer;
    }
    let tasks = [];
    if (currentStation) {
      tasks = await PromisifiedMeteor.call("stations.getTasks", currentStation.id);
    } else {
      tasks = await PromisifiedMeteor.call("stations.getTasks", currentStations[0].id);
      setCurrentStation(currentStations[0]);
    }

    setStations(currentStations);
    setStationsTasks(tasks);
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
    setCurrentStation,
    currentPosition
  };

  return <StationsContext.Provider value={ctx}>{children}</StationsContext.Provider>;
};
