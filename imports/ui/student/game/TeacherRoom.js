import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../StudentContextProvider.js";
import { TeacherRoomVektor } from "../vektors/TeacherRoomVektor.js";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function TeacherRoom() {
  const { student, setPage } = useContext(GameContext);
  const [classHover, setClassHover] = useState(false);

  return <TeacherRoomVektor />;
}
