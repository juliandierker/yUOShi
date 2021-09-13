import React from "react";
import { browserHistory } from "../../routes/Routes";
import Icon from "../IconComponent/Icon";
import "./StudentTopMenu.css";

export default function StudentTopMenu() {
  function returnUser() {
    return Meteor.user() ? Meteor.user().username : "";
  }

  return (
    <div className="top-menu">
      <div className="logo-container">
        <Icon name="horizontalLogoYuoshiblau" size="huge" color="white" />
      </div>
      <a onClick={() => browserHistory.push("/student")}>Schulübersicht</a>
      <a onClick={() => browserHistory.push("/student/classroom")}>Klassenzimmer</a>
      <a onClick={() => browserHistory.push("/student/teacherRoom")}>Lehrendenzimmer</a>
      <a onClick={() => browserHistory.push("/student/office")}>Mein Büro</a>
      <div onClick={() => Meteor.logout(() => {})} className="logout-container">
        <Icon name="logout" size="small" color="white" />
      </div>
    </div>
  );
}
