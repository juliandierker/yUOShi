import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";
import { Session } from "meteor/session";
import { routes, onAuthChange } from "../imports/client/routes/routes";
import "../imports/startup/simple-schema-configuration.js";
import "../imports/client/ui/um/UserAdministration";

// LOGIN FOR DEV
import i18n from "meteor/universe:i18n";

const getTrans = i18n.createTranslator("UserValidation");
i18n.setLocale("de");

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
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

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
    ReactDOM.render(routes, document.getElementById("app"));
    Session.set("showVisible", true);
    // setCookie("resume", "true", false);
    // if (!getCookie("resume")) {
    // localStorage.clear("Meteor.loginToken");
    // localStorage.clear("Meteor.userId");
    // localStorage.clear("Meteor.loginTokenExpires");
    //   Meteor.logout();
    // }
  });
});
