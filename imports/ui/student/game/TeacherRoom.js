import React, { useContext, useEffect } from "react";
import { GameContext } from "../StudentContextProvider.js";
import { TeacherRoomVektor } from "../vektors/TeacherRoomVektor.js";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function TeacherRoom() {
  const { setPage } = useContext(GameContext);

  useEffect(() => {
    const back_elem = document.getElementById("marker__zurueck__hover");
    back_elem?.addEventListener("click", () => setPage("schoolOverview")); 
  }, [])

  return <TeacherRoomVektor />;
}
