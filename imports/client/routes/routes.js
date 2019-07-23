import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Roles } from "meteor/alanning:roles";
import React from "react";
import { Router, Route, matchPath, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../ui/um/Login";
import NotFound from "../ui/NotFound";
// Students
import StudentOverview from "../ui/student/StudentOverview";
// Teachers
import TeacherOverview from "../ui/teacher/pregame/TeacherOverview";
import Gameoverview from "../ui/student/game/Gameoverview";
import ClassRoom from "../ui/student/game/ClassRoom";
export const browserHistory = createBrowserHistory();
const unAuthPages = ["/"];

const DefaultRoutes = {
  student: "/student/studentoverview",
  teacher: "/teacher/teacheroverview",
  yadmin: "/yadmin"
};

function isAuthPage(pathname) {
  return (
    matchPath(pathname, { path: "/student/studentoverview" }) ||
    matchPath(pathname, { path: "/teacher/teacheroverview" })
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
      <PrivateRoute path="/student" component={StudentOverview} />
      <PrivateRoute path="/teacher" component={TeacherOverview} />
      <Route path="/(.*)" component={NotFound} />
    </Switch>
  </Router>
);
