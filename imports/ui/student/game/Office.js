import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../../Loading";
import { Button, Card, Image } from "semantic-ui-react";
import { Dropdown, Icon, Menu, Segment, Grid } from "semantic-ui-react";
import { GameContext } from "../StudentContextProvider";

import StudentTopMenu from "../StudentTopMenu";
import { OfficeVektor } from "../vektors/OfficeVektor";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Office() {
  const { student } = useContext(GameContext);
  //TODO         onClick={this.openLearnCardModal(student)}

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

  return <OfficeVektor />;
}
