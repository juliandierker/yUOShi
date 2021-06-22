import React, { useContext, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../StudentContextProvider.js";

import StudentTopMenu from "../StudentTopMenu";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ClassroomVektor } from "../vektors/ClassroomVektor.js";
import { usePackagesContext } from "../PackagesContext";
import PromisifiedMeteor from "../../../api/promisified";

export default function ClassRoom() {
  const { setPage } = useContext(GameContext);
  const { setCurrentPackage, packages } = usePackagesContext();
  console.log(packages);

  const addEvent = useCallback(
    (elem, packageItem) => {
      const handleClick = function() {
        setCurrentPackage(packageItem);
        setPage("workspace");
      };

      elem.addEventListener("click", handleClick);

      return () => {
        elem.removeEventListener("click", handleClick);
      };
    },
    [setPage, setCurrentPackage]
  );

  useEffect(() => {
    if (!packages) {
      return;
    }
    const marker_elem = document.getElementById("marker__aktuellesLevel__hover");
    addEvent(marker_elem, packages[0]);
  }, [addEvent, packages]);

  return <ClassroomVektor />;
}

ClassRoom.propTypes = {
  tasks: PropTypes.array
};
