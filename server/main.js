import { Meteor } from "meteor/meteor";
/* Referenz auf Collection-Api, weil wir nicht direkt in Server schreiben dürfen */
import { Accounts } from "meteor/accounts-base";
import { resetDatabase } from "../imports/startup/server/databaseHandling";
import "./solutionHandling";

import "../imports/api/users";
import "../imports/api/teachers";
import "../imports/api/courses";
import "../imports/api/tokens";

Meteor.startup(() => {
  // code to run on server at startup
  resetDatabase();
});
