import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";

import { Pupils } from "./students";
import { Teachers } from "./teachers";

Accounts.validateNewUser(user => {
  return true;
});

// Accounts.onEmailVerificationLink = () => {
//   console.log("verified");
//   return true;
// };

if (Meteor.isServer) {
  // TODO:
  Meteor.publish("usersByClassroom", function(classId) {});

  Meteor.publish("userByName", function(userName) {
    return Meteor.users.findOne({ username: userName });
  });
}
