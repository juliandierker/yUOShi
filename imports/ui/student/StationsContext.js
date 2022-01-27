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

function concatLearningObjectiveStation(currentStations, learningObjectives) {
  return [
    {
      title: "Intro",
      id: "generated__intro",
      type: "intro",
      learningObjectives: learningObjectives
    }
  ].concat(currentStations);
}

function concatQuestStations(currentStations, learningObjectiveNames) {
  let questStations = [];
  for (let stationIndex in currentStations) {
    const station = currentStations[stationIndex];
    if (learningObjectiveNames?.includes(station.title)) {
      questStations.push(station);
      currentStations.splice(stationIndex, 1);
    }
  }

  if (questStations.length > 0) {
    currentStations = currentStations.concat([
      { title: "Quest", id: "generated__outro", type: "outro", questStations }
    ]);
  }
}

export const StationsContextProvider = ({ learningObjectives, currentPackageId, children }) => {
  const [stations, setStations] = useState(undefined);
  const [currentStation, setCurrentStation] = useState(undefined);
  const [stationLoading, setStationLoading] = useState(true);
  const [stationTasks, setStationsTasks] = useState([]);

  const cachedPackageId = useTracker(() => {
    Meteor.subscribe("cachedPackagesByUser");
    return PackagesCache.findOne({})?.packageId;
  }, [Meteor.userId()]);
  const cachedTaskId = useTracker(() => {
    Meteor.subscribe("cachedTaskByUser");
    return PackagesCache.findOne({})?.taskId;
  }, [Meteor.userId()]);

  const currentPosition = stations
    ?.map(function(station) {
      return station.id;
    })
    .indexOf(currentStation.id);

  const updateStations = useCallback(async () => {
    setStationLoading(true);

    let currentStations = await PromisifiedMeteor.call(
      "package.getStations",
      currentPackageId ?? cachedPackageId
    );

    currentStations = concatLearningObjectiveStation(currentStations, learningObjectives);
    const learningObjectiveNames = learningObjectives?.map((learningObjective) => {
      return learningObjective.title;
    });

    //await station tasks refs
    for (let station of currentStations) {
      station.tasks = station.tasks?.buffer;
    }

    concatQuestStations(currentStations, learningObjectiveNames);

    let tasks = [];
    if (currentStation) {
      tasks = await PromisifiedMeteor.call("stations.getTasks", currentStation.id);
    } else {
      tasks = await PromisifiedMeteor.call("stations.getTasks", currentStations[0].id);
      setCurrentStation(currentStations[0]);
    }

    setStations(currentStations);
    setStationsTasks(tasks);
    setStationLoading(false);
  }, [currentPackageId, currentStation]);
  useEffect(() => {
    updateStations();
  }, [updateStations]);
  const ctx = {
    stationLoading,
    cachedPackageId,
    cachedTaskId,
    updateStations,
    stations,
    currentStation,
    stationTasks,
    setCurrentStation,
    currentPosition
  };

  return <StationsContext.Provider value={ctx}>{children}</StationsContext.Provider>;
};
