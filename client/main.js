import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
import React from "react";
import Routes, { onAuthChange } from "../imports/routes/Routes";
import "../imports/startup/simple-schema-configuration.js";
import "../imports/ui/um/UserAdministration.js";
import "../imports/api/taskTypes"

// LOGIN FOR DEV

window.setCookie = function(name, value, sec) {
  if (sec) {
    const date = new Date();
    date.setTime(date.getTime() + sec * 1000);
    var expires = `, expires=${date.toGMTString()}`;
  } else {
    var expires = "";
  }
  document.cookie = `${name}=${value}${expires}, path=/PupilCompaniesOverview`;
};

window.getCookie = function(name) {
  const value = `, ${document.cookie}`;
  const parts = value.split(`, ${name}=`);

  if (parts.length == 2)
    return parts
      .pop()
      .split(",")
      .shift();
};

Tracker.autorun(() => {
  // const isAuthenticated = !!Meteor.userId();

  const currentUser = Meteor.user();
  onAuthChange(currentUser);

  Meteor.startup(() => {
    ReactDOM.render(<Routes />, document.getElementById("app"));
    // setCookie("resume", "true", false);
    // if (!getCookie("resume")) {
    // localStorage.clear("Meteor.loginToken");
    // localStorage.clear("Meteor.userId");
    // localStorage.clear("Meteor.loginTokenExpires");
    //   Meteor.logout();
    // }
  });
});
