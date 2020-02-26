import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../StudentContextProvider.js";

import StudentTopMenu from "../StudentTopMenu";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ClassroomVektor } from "../vektors/ClassroomVektor.js";

export default function ClassRoom() {
  const { student, tasks, setPage } = useContext(GameContext);
  const [classHover, setClassHover] = useState(false);

  useEffect(() => {
    initVektorElements();
  });

  function initVektorElements() {
    const motivation_elem = document.getElementById("motivation_marker");
    const teacher_elem = document.getElementById("Marker_Lehrerzimmer");
    const office_elem = document.getElementById("Marker_Büro");
    const marker_elems = document.getElementsByClassName("marker_elem");

    for (var i = 0; i < marker_elems.length; i++) {
      if (student.currentPackage[0].length == 0) {
        marker_elems[i].style.visibility = "visible";
      } else if (student.currentPackage[0].marker === marker_elems[i].id) {
        marker_elems[i].style.visibility = "visible";
      } else {
        marker_elems[i].style.visibility = "hidden";
      }
    }
    motivation_elem.addEventListener("click", function() {
      if (student.currentPackage.length > 0) {
        setPage("workspace");
      } else {
        Meteor.call("students.getPackage", "Motivation", student, (err, res) => {
          if (res) {
            setPage("workspace");
          }
        });
      }
    });
  }

  function handleGetPackage(packageName) {
    const student = student;
    if (student.currentPackage.length > 0) {
      setPage("workspace");
    } else {
      Meteor.call("students.getPackage", packageName, student._id, (err, res) => {
        if (res) {
          setPage("workspace");
        }
      });
    }
  }
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
