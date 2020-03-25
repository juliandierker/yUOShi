import { Meteor } from "meteor/meteor";

import SimpleSchema from "simpl-schema";

import { Pupils } from "./students";
import { Teachers } from "./teachers";
import { Courses } from "./courses";
import studipAdapter from "./backendAdapter";

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
  // "users.auth.start_oauth": function() {
  //   if (Accounts.userId()) {
  //     // TODO: throw error or something else that's useful
  //     return
  //   }
  //
  //   return OAuthHandler.getRequestToken(requestAdapter)
  // },
  // perform a basic auth user-request to verify a studip-user
  "users.auth": async function(email, password) {
    try {
      const result = await studipAdapter.userAdapter.getInfo();

      if (!result) {
        return false;
      }

      if (!Meteor.users.findOne({ username: email })) {
        Accounts.createUser({
          username: email,
          password: password
        });
      }

      return [result, result.remoteId];
    } catch (e) {
      console.log(e);
      // Got a network error, timeout, or HTTP error in the 400 or 500 range.
      return false;
    }
  },
  "users.teachersInsert": function(username, studipUserId) {
    const teacherId = Meteor.users.findOne({ username: username })._id;
    Roles.addUsersToRoles(teacherId, "teacher");
    Meteor.call("teachers.insert", teacherId, studipUserId);
    return teacherId;
  },
  "users.studentInsert": function(username, studipUserId) {
    const studentId = Meteor.users.findOne({ username: username })._id;
    Roles.addUsersToRoles(studentId, "student");
    Meteor.call("students.insert", studentId, studipUserId);
    return studentId;
  }
});
