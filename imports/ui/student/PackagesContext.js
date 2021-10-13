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
  const [packages, setPackages] = useState(undefined);
  const [currentPackage, setCurrentPackage] = useState(undefined);
  const [learningObjectives, setLearningObjectives] = useState(undefined);
  const [packagesLoading, setPackagesLoading] = useState(true);

  const updateCurrentPackage = useCallback(
    async (packageId) => {
      if (!currentPackage) {
        if (packageId) {
          setCurrentPackage(packages.find((targetPackage) => targetPackage.id === packageId));
        } else {
          setCurrentPackage(packages[0]);
        }
      }
      setPackagesLoading(false);
    },
    [currentPackage, packages]
  );

  const updatePackages = useCallback(async () => {
    setPackagesLoading(true);

    const packages = await PromisifiedMeteor.call("package.getAll");
    setPackages(packages);
    setPackagesLoading(false);
  }, []);

  const updateLearningObjectives = useCallback(async () => {
    if (!currentPackage) return;

    const learningObjectives = await PromisifiedMeteor.call(
      "package.learningObjectives",
      currentPackage.id
    );
    setLearningObjectives(learningObjectives);
  }, [currentPackage]);

  useEffect(() => {
    updatePackages();
    updateLearningObjectives();
  }, [updateLearningObjectives, updatePackages]);

  const ctx = {
    packages,
    packagesLoading,
    updatePackages,
    currentPackage,
    setCurrentPackage,
    updateCurrentPackage,
    learningObjectives
  };

  return <PackagesContext.Provider value={ctx}>{children}</PackagesContext.Provider>;
};
