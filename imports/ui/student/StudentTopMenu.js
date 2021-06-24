import React, { useContext } from "react";

import { GameContext } from "./StudentContextProvider";
import Icon from "../IconComponent/Icon"

import "./StudentTopMenu.css"

export default function StudentTopMenu() {
  const { setPage } = useContext(GameContext);

  function returnUser() {
    return Meteor.user() ? Meteor.user().username : "";
  }

  return (
    <div className="top-menu">
      <div className="logo-container">
        <Icon name="horizontalLogoYuoshiblau" size="huge" color="white" />
      </div>
      <a onClick={() => setPage("schoolOverview")}>Schulübersicht</a>
      <a onClick={() => setPage("classroom")}>Klassenzimmer</a>
      <a onClick={() => setPage("teacherRoom")}>Lehrendenzimmer</a>
      <a onClick={() => setPage("office")}>Mein Büro</a>
      <div onClick={() => Meteor.logout(() => { })} className="logout-container">
        <Icon name="logout" size="massive" color="white" />
      </div>
    </div>
  )
}
