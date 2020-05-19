import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import PromisifiedMeteor from "../../api/promisified";

const PackagesContext = createContext(null);

export const usePackagesContext = () => {
  const ctx = useContext(PackagesContext);

  if (ctx === null) {
    throw new Error(
      "No PackagesContextProvider in Ancestors. You cannot use the packages context here!"
    );
  }

  return ctx;
};

export const PackagesContextProvider = ({ children }) => {
  function filterTasks(tasks) {
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].length > 0) {
        setPackageTasks(tasks[i][0]);
      }
    }
  }

  const [currentPackage, setCurrentPackage] = useState(undefined);
  const [packages, setPackages] = useState(undefined);
  const [packageTasks, setPackageTasks] = useState(undefined);

  const [packagesLoading, setPackagesLoading] = useState(true);
  const updatePackages = useCallback(async () => {
    setPackagesLoading(true);

    const packages = await PromisifiedMeteor.call("package.getAll");
    const tasks = filterTasks(await PromisifiedMeteor.call("package.getTasks", packages[0].slug));
    setPackages(packages);
    setPackagesLoading(false);
  }, []);

  useEffect(() => {
    updatePackages();
  }, [updatePackages]);

  const ctx = {
    packages,
    packagesLoading,
    updatePackages,
    currentPackage,
    packageTasks,
    setCurrentPackage
  };

  return <PackagesContext.Provider value={ctx}>{children}</PackagesContext.Provider>;
};
