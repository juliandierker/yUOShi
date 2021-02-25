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

export const StationsContextProvider = (props, { children }) => {
  const { currentPackage } = props;
  const [stations, setStations] = useState(undefined);
  const [currentStation, setCurrentStation] = useState(undefined);
  const [stationLoading, setstationLoading] = useState(true);

  const updateStations = useCallback(async () => {
    setstationLoading(true);

    const stations = await PromisifiedMeteor.call("package.getStations", currentPackage.id);
    const tasks = filterTasks(
      await PromisifiedMeteor.call("package.getStations", stations[0].slug)
    );
    setStations(stations);
    setstationLoading(false);
  }, [currentPackage.id]);

  useEffect(() => {
    updateStations();
  }, [updateStations]);

  const ctx = {
    stations,
    stationLoading,
    updateStations,
    setCurrentStation
  };

  return <StationsContext.Provider value={ctx}>{children}</StationsContext.Provider>;
};
