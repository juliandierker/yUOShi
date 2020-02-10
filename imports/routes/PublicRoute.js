import { Meteor } from "meteor/meteor";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        if (Meteor.user()) {
          Meteor.logout();
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
