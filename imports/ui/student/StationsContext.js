import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import PromisifiedMeteor from "../../api/promisified";
import { useTracker } from "react-meteor-hooks";
import { PackagesCache } from "../../api/packageCache";
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
  const cachedPackageId = useTracker(() => {
    Meteor.subscribe("cachedPackagesByUser");
    return PackagesCache.findOne({})?.packageId;
  }, [Meteor.userId()]);
  const [stations, setStations] = useState(undefined);
  const [currentStation, setCurrentStation] = useState(undefined);
  const [stationLoading, setstationLoading] = useState(true);
  const [stationTasks, setStationsTasks] = useState([]);

  const currentPosition = stations
    ?.map(function (station) {
      return station.id;
    })
    .indexOf(currentStation.id);

  const updateStations = useCallback(async () => {
    setstationLoading(true);

    let currentStations = await PromisifiedMeteor.call(
      "package.getStations",
      currentPackageId ?? cachedPackageId
    );

    currentStations = [{ title: "Intro", id: "generated__intro", type: "intro", learningObjectives: learningObjectives }].concat(
      currentStations
    );
    const learningObjectiveNames = learningObjectives?.map((learningObjective) => {
      return learningObjective.title;
    })
    let questStations = [];

    for (let station of currentStations) {
      station.tasks = station.tasks?.buffer;
    }


    for (let stationIndex in currentStations) {
      const station = currentStations[stationIndex]
      if (learningObjectiveNames?.includes(station.title)) {
        questStations.push(station)
        currentStations.splice(stationIndex, 1)
      }
    }

    if (questStations.length > 0) {
      currentStations = currentStations.concat([{ title: "Quest", id: "generated__outro", type: "outro", questStations }])
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
  useEffect(() => {
    updateStations();
  }, [updateStations]);
  const ctx = {
    stationLoading,
    cachedPackageId,
    updateStations,
    stations,
    currentStation,
    stationTasks,
    setCurrentStation,
    currentPosition
  };

  return <StationsContext.Provider value={ctx}>{children}</StationsContext.Provider>;
};
