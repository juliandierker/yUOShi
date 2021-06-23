import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GameContext } from "../StudentContextProvider";

import StudentTopMenu from "../StudentTopMenu";
import { OfficeVektor } from "../vektors/OfficeVektor";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Office() {
  const { setPage } = useContext(GameContext);

  useEffect(() => {
    const back_elem = document.getElementById("marker__zurueck__hover");
    back_elem?.addEventListener("click", () => setPage("schoolOverview")); 
  }, [])

  return <OfficeVektor />;
}
