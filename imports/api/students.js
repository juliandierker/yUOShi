import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";
import { Classrooms } from "./courses";
import { Teachers } from "./teachers";

export const Students = new Mongo.Collection("students");

Meteor.methods({
  "pupils.setup": function(newUsername, newPassword) {
    if (Meteor.isServer) {
      if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["student"])) {
        if (Accounts.findUserByUsername(newUsername))
          throw new Meteor.Error("userExistsError");
        Accounts.setUsername(Meteor.userId(), newUsername);
        Accounts.setPassword(Meteor.userId(), newPassword, { logout: false });
        Pupils.update(
          { userId: Meteor.userId() },
          { $set: { username: newUsername } }
        );
      } else {
        throw new Meteor.Error("Access denied!");
      }
    }
  },
  "pupil.resetPassword": function(userId, newPassword) {
    if (Meteor.isServer) {
      const teacher = Teachers.findOne({ userId: Meteor.userId() });
      const student = Students.findOne({ userId });
      if (teacher && student && teacher.classrooms.includes(student.classId)) {
        Accounts.setPassword(userId, newPassword, { logout: false });
      } else {
        throw new Meteor.Error("Access denied!");
      }
    }
  }
});

if (Meteor.isServer) {
  // pupil
  Meteor.publish("pupil", () => {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["pupil"])) {
      return Pupils.find({ userId: Meteor.userId() });
    }
    throw new Meteor.Error("Access denied!");
  });
  // teacher
  Meteor.publish("pupilsByClassId", classId => {
    const teacher = Teachers.findOne({ userId: Meteor.userId() });
    if (teacher && teacher.classrooms.includes(classId)) {
      return Pupils.find({ classId });
    }
    throw new Meteor.Error("Access denied!");
  });
  // pupil
  Meteor.publish("companyMates", () => {
    const pupil = Pupils.findOne({ userId: Meteor.userId() });
    if (pupil) {
      return Pupils.find({ companyId: pupil.companyId });
    }
    throw new Meteor.Error("Access denied!");
  });
  // admin
  Meteor.publish("pupilsOfTeacher", () => {
    const teacher = Teachers.findOne({ userId: Meteor.userId() });
    if (teacher) {
      return Pupils.find({ classId: { $in: teacher.classrooms } });
    }
    throw new Meteor.Error("Access denied!");
  });
}
