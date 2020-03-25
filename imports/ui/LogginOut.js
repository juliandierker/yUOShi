import React, { useEffect } from "react";
import { Meteor } from "meteor/meteor";
import { Loader } from "semantic-ui-react";

export default function LoggingOut() {
  useEffect(() => Meteor.logout(), []);

  return (
    <div className="flex__center">
      <Loader inverted size="big">
        {"Logging Out"}
      </Loader>
    </div>
  );
}
