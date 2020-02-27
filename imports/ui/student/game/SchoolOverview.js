import React, { useEffect, useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../StudentContextProvider";

import { Tracker } from "meteor/tracker";
import Loading from "../../Loading";
import { Button, Card, Image } from "semantic-ui-react";
import { Dropdown, Icon, Menu, Segment, Grid } from "semantic-ui-react";
import { TutorialHandler } from "../../tutorials/TutorialHandler.js";

import StudentTopMenu from "../StudentTopMenu";
import SchoolVektor from "../vektors/SchoolVektor";
import TutorialComponent from "../../tutorials/TutorialComponent.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function SchoolOverview() {
  const { setPage } = useContext(GameContext);

  useEffect(() => {
    initVektorElements();
  });
  function initVektorElements() {
    const class_elem = document.getElementById("Marker_Klassenzimmer");
    const teacher_elem = document.getElementById("Marker_Lehrerzimmer");
    const office_elem = document.getElementById("Marker_Büro");
    class_elem.addEventListener("click", function() {
      setPage("classroom");
    });
    teacher_elem.addEventListener("click", function() {
      setPage("teacherRoom");
    });
    office_elem.addEventListener("click", function() {
      setPage("office");
    });
  }

  function renderSchoolFloor() {
    return <SchoolVektor />;
  }
  return <div id="SchoolOverview">{renderSchoolFloor()}</div>;
}

SchoolOverview.propTypes = {
  tasks: PropTypes.array
};
