import React, { useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { browserHistory } from "../../../routes/Routes.js";
import { TeacherRoomVektor } from "../vektors/TeacherRoomVektor.js";

const MySwal = withReactContent(Swal);

export default function TeacherRoom() {
  useEffect(() => {
    const back_elem = document.getElementById("marker__zurueck__hover");
    back_elem?.addEventListener("click", () => browserHistory.push("/student"));
  }, []);

  return <TeacherRoomVektor />;
}
