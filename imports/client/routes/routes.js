import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Roles } from "meteor/alanning:roles";
import React from "react";
import { Router, Route, matchPath, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../ui/um/Login";

// Students
import StudentOverview from "../ui/student/StudentOverview";
// Teachers
import TeacherOverview from "../ui/teacher/TeacherOverview";

export const browserHistory = createBrowserHistory();
const unAuthPages = ["/"];

const DefaultRoutes = {
  student: "/student/StudentOverview",
  teacher: "/teacher/TeacherOverview",
  yadmin: "/yadmin"
};

function isAuthPage(pathname) {
  return (
    matchPath(pathname, { path: "/student" }) ||
    matchPath(pathname, { path: "/teacher" })
  );
}

export const onAuthChange = currentUser => {
  const { pathname } = location;
  if (Meteor.loggingIn()) {
    return;
  }
  if (currentUser) {
    if (unAuthPages.includes(pathname)) {
      const route = Session.get("requestedRoute");
      if (route && isAuthPage(route)) {
        browserHistory.push(route);
      } else {
        browserHistory.push(
          DefaultRoutes[Roles.getRolesForUser(Meteor.user())[0]]
        );
      }
    } else {
      browserHistory.replace(pathname);
    }
  } else if (isAuthPage(pathname)) {
    Session.set("requestedRoute", pathname);
    browserHistory.replace("/");
  }
};

export const routes = (
  <Router history={browserHistory}>
    <Switch>
      <PublicRoute exact path="/" component={Login} />
      <PrivateRoute
        exact
        path="/student/StudentOverview"
        component={StudentOverview}
      />
      <PrivateRoute
        exact
        path="/teacher/TeacherOverview"
        component={TeacherOverview}
      />
    </Switch>
  </Router>
);
