import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import StudentTopMenu from "../StudentTopMenu";
import { OfficeVektor } from "../vektors/OfficeVektor";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { browserHistory } from "../../../routes/Routes";

const MySwal = withReactContent(Swal);

export default function Office() {
  useEffect(() => {
    const back_elem = document.getElementById("marker__zurueck__hover");
    back_elem?.addEventListener("click", () => browserHistory.push("student"));
  }, []);

  return <OfficeVektor />;
}
