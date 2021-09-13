import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { browserHistory } from "../../../routes/Routes";
import SchoolVektor from "../vektors/SchoolVektor";

const MySwal = withReactContent(Swal);

export default function SchoolOverview(props) {
  useEffect(() => {
    initVektorElements();
  });

  function initVektorElements() {
    const class_elem = document.getElementById("marker__klassenzimmer");
    const teacher_elem = document.getElementById("marker__lehrendenzimmer");
    const office_elem = document.getElementById("marker__buero");

    const class_elem_hover = document.getElementById("marker__klassenzimmer__hover");
    const teacher_elem_hover = document.getElementById("marker__lehrendenzimmer__hover");
    const office_elem_hover = document.getElementById("marker__buero__hover");

    class_elem_hover?.addEventListener("click", function() {
      browserHistory.push("/student/classroom");
    });
    teacher_elem_hover?.addEventListener("click", function() {
      browserHistory.push("/student/teacherRoom");
    });
    office_elem_hover?.addEventListener("click", function() {
      browserHistory.push("/student/office");
    });
  }

  function renderSchoolFloor() {
    return <SchoolVektor />;
  }
  return <div id="SchoolOverview">{renderSchoolFloor()}</div>;
}

SchoolOverview.propTypes = {};
