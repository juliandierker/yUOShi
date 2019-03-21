import { Meteor } from "meteor/meteor";
import React from "react";
import { Route, Redirect, matchPath } from "react-router-dom";
import { Roles } from "meteor/alanning:roles";
import Loading from "../ui/Loading";

const DefaultRoutes = {
  student: "/student/StudentOverview",
  teacher: "/teacher/TeacherOverview",
  yadmin: "/yadmin"
};
const PrivateRoute = ({ component: Component, path, ...rest }) => {
  console.log(path);
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        let redirect = false;
        if (Meteor.userId()) {
          const role = Roles.getRolesForUser(Meteor.userId())[0];
          const wrongPupil =
            role === "student" &&
            !matchPath(location.pathname, { path: "/student/StudentOverview" });
          const wrongTeacher =
            role === "teacher" &&
            !(
              matchPath(location.pathname, {
                path: "/teacher/TeacherOverview/"
              }) ||
              matchPath(location.pathname, { path: "/teacher/TeacherOverview" })
            );
          const wrongPPAdmin =
            role === "yadmin" &&
            !matchPath(location.pathname, { path: "/teacher/TeacherOverview" });
          if (wrongPupil || wrongTeacher || wrongPPAdmin) {
            console.log("smth wrong");
            redirect = DefaultRoutes[role];
          }
        } else if (!Meteor.userId()) {
          if (Meteor.loggingIn()) {
            return <Loading {...props} />;
          }
          redirect = "/";
        }
        if (!redirect) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: redirect,
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
