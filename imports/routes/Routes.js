import createBrowserHistory from "history/createBrowserHistory";
import { Roles } from "meteor/alanning:roles";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import React, { Suspense } from "react";
import { matchPath, Route, Router, Switch } from "react-router-dom";
import Loading from "../ui/Loading";
import NotFound from "../ui/NotFound";
import StudentOverview from "../ui/student/StudentOverview";
import LoginOAuth from "../ui/um/LoginOAuth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const browserHistory = createBrowserHistory();
const unAuthPages = ["/"];

const DefaultRoutes = {
  student: "/student",
  teacher: "/student",
  yadmin: "/yadmin"
};

function isAuthPage(pathname) {
  return matchPath(pathname, { path: "/student" });
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
        <Suspense fallback={<Loading />}>
          <Switch>
            <PublicRoute exact path="/" component={LoginOAuth} />
            <PrivateRoute path="/" component={StudentOverview} />
            <Route path="/(.*)" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default withTracker(() => {
  return {
    userId: Meteor.userId()
  };
})(Routes);
