import { Meteor } from "meteor/meteor";
import { Roles } from "meteor/alanning:roles";
import React from "react";
import { Router, Route, matchPath, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import LoginOAuth from "../ui/um/LoginOAuth";
import NotFound from "../ui/NotFound";
import Login from "../ui/um/Login";

// Students
// import StudentOverview from "../ui/student/StudentOverview";
import StudentContextProvider from "../ui/student/StudentContextProvider.js";
import Workspace from "../ui/student/Workspace";

// Teachers
import TeacherOverview from "../ui/teacher/TeacherOverview";
import SchoolOverview from "../ui/student/game/SchoolOverview";
// import ClassRoom from "../ui/student/game/ClassRoom";
// import TeacherRoom from "../ui/student/game/TeacherRoom";
// import Office from "../ui/student/game/Office";

export const browserHistory = createBrowserHistory();
const unAuthPages = ["/"];

import { withTracker } from "meteor/react-meteor-data";

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

export const onAuthChange = (currentUser) => {
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
        browserHistory.push(DefaultRoutes[Roles.getRolesForUser(Meteor.user())[0]]);
      }
    } else {
      browserHistory.replace(pathname);
    }
  } else if (isAuthPage(pathname)) {
    Session.set("requestedRoute", pathname);
    browserHistory.replace("/");
  }
};

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <PublicRoute exact path="/" component={LoginOAuth} />
          <PrivateRoute path="/student" component={StudentContextProvider} />
          <PrivateRoute path="/teacher" component={StudentContextProvider} />
          <Route path="/(.*)" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default withTracker(() => {
  return {
    userId: Meteor.userId()
  };
})(Routes);
