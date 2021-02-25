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
  const { student, tasks, setPage } = useContext(GameContext);
  const [classHover, setClassHover] = useState(false);
  const { packages, setCurrentPackage } = usePackagesContext();

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

    const marker_elems = document.getElementsByClassName("marker_elem");

    const unregisterCbs = Array.from(marker_elems)
      .map((marker_elem) => {
        const packageSlug = marker_elem.id.replace("_marker", "");

        const packageItem = packages.find((elem) => elem.slug === packageSlug);

        marker_elem.style.visibility = packageItem ? "visible" : "hidden";

        if (packageItem && packageItem.playable) {
          addEvent(marker_elem, packageItem);
        }
      })
      .filter(Boolean);

    return () => {
      unregisterCbs.forEach((cb) => cb());
    };
  }, [addEvent, packages]);

  function hoverOnClass(context) {
    var elRect = this[context + "_rect"];
    var elText = this[context + "_text"];
    var marker = this[context + "_marker"];
    var elem = marker.childNodes[1];
    if (classHover) {
      setClassHover(true);
      elRect.style.visibility = "visible";
      elText.style.visibility = "visible";
      var menu = document.getElementById("classMenuItem");
      elem.style.fill = "rgb(206, 239, 174)";
    }
  }
  function hoverOffClass(context) {
    var elRect = this[context + "_rect"];
    var elText = this[context + "_text"];
    var marker = this[context + "_marker"];
    var elem = marker.childNodes[1];

    if (classHover) {
      setClassHover(false);
      elem.style.fill = "#808080";
      elRect.style.visibility = "hidden";
      elText.style.visibility = "hidden";
    }
  }
  return <ClassroomVektor />;
}

ClassRoom.propTypes = {
  tasks: PropTypes.array
};
