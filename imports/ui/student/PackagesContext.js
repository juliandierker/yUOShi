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
  const [currentPackage, setCurrentPackage] = useState(undefined);
  const [packages, setPackages] = useState(undefined);

  const [packagesLoading, setPackagesLoading] = useState(true);
  const updatePackages = useCallback(async () => {
    setPackagesLoading(true);

    const packages = await PromisifiedMeteor.call("package.getAll");

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
    setCurrentPackage
  };

  return <PackagesContext.Provider value={ctx}>{children}</PackagesContext.Provider>;
};
