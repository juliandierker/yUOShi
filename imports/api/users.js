import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";

import { Pupils } from "./students";
import { Teachers } from "./teachers";

Accounts.validateNewUser(user => {
  return true;
});

if (Meteor.isServer) {
  // TODO:
  Meteor.publish("usersByClassroom", function(classId) {});

  Meteor.publish("userByName", function(userName) {
    return Meteor.users.findOne({ username: userName });
  });
}
Meteor.methods({
  // perform a basic auth user-request to verify a studip-user
  "users.auth": function(token, email, password) {
    console.log(token);
    try {
      const result = HTTP.call(
        "GET",
        "http://localhost/studip/plugins.php/argonautsplugin/users/me",
        {
          headers: { Authorization: token }
        }
      );
      var userData = JSON.parse(result.content);
      var studipUserId = userData.data.id;
      if (Meteor.users.findOne({ username: email })) {
        var user = Meteor.users.findOne({ username: email });
      } else {
        const userId = Accounts.createUser({
          username: email,
          password: password
        });
        console.log("create");
      }
      var results = [result, studipUserId];
      return results;
    } catch (e) {
      console.log(e);
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  },
  "users.teachersInsert": function(username, studipUserId) {
    var teacherId = Meteor.users.findOne({ username: username })._id;
    console.log("teacher ist: " + teacherId);
    Roles.addUsersToRoles(teacherId, "teacher");
    console.log("reacheeee");
    Meteor.call("teachers.insert", teacherId, studipUserId);
    return teacherId;
  }
});
