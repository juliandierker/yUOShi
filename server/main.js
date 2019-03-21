import { Meteor } from "meteor/meteor";
/* Referenz auf Collection-Api, weil wir nicht direkt in Server schreiben dürfen */
import { Accounts } from "meteor/accounts-base";
import { resetDatabase } from "../imports/startup/server/databaseHandling";
import "../imports/server/Auth";

Meteor.startup(() => {
  // code to run on server at startup
  resetDatabase();
});
