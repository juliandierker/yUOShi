import { Meteor } from "meteor/meteor";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return <Component {...props} />;
      }}
    />
  );
};

export default PublicRoute;
