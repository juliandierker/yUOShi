import PropTypes from "prop-types";
import React, { useCallback, useEffect } from "react";
import { browserHistory } from "../../../routes/Routes";
import { usePackagesContext } from "../PackagesContext";
import { ClassroomVektor } from "../vektors/ClassroomVektor.js";

export default function ClassRoom() {
  const { setCurrentPackage, packages } = usePackagesContext();

  const addEvent = useCallback(
    (elem, packageItem) => {
      const handleClick = function() {
        setCurrentPackage(packageItem);
        browserHistory.push("/student/workspace");
      };

      elem.addEventListener("click", handleClick);

      return () => {
        elem.removeEventListener("click", handleClick);
      };
    },
    [setCurrentPackage]
  );

  useEffect(() => {
    if (!packages) {
      return;
    }
    const marker_elem = document.getElementById("marker__aktuellesLevel__hover");
    addEvent(marker_elem, packages[0]);

    const back_elem = document.getElementById("marker__zurueck__hover");
    back_elem?.addEventListener("click", () => browserHistory.push("/student"));
  }, [addEvent, packages]);

  return <ClassroomVektor />;
}

ClassRoom.propTypes = {
  tasks: PropTypes.array
};
