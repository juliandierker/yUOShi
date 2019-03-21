import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";
import { Students } from "./students";
import { Classrooms } from "./courses";

export const Teachers = new Mongo.Collection("teachers");

if (Meteor.isServer) {
  // teacher
  Meteor.publish("teacher", function() {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
      return Teachers.find({ userId: Meteor.userId() });
    }
    throw new Meteor.Error("Access denied!");
  });
  // admin
  Meteor.publish("allTeacher", function() {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["ppadmin"])) {
      return Teachers.find({});
    }
    throw new Meteor.Error("Access denied!");
  });
}

Meteor.methods({
  "teachers.insert": function() {
    if (
      this.userId &&
      !Roles.userIsInRole(Meteor.user(), ["pupil", "teacher"])
    ) {
      Roles.addUsersToRoles(this.userId, "teacher");
      Teachers.insert({
        userId: this.userId,
        studipUserId: "",
        courses: []
      });
      if (Meteor.isServer && verifyEmail) {
        Accounts.sendVerificationEmail(this.userId);
      }
    }
  },

  "teachers.delete": function(userId) {
    if (Meteor.isServer) {
      let teacher = null;
      if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["ppadmin"])) {
        teacher = Teachers.findOne({ userId });
        if (!teacher) throw new Meteor.Error("Teacher doesn't exist!");
      } else if (
        Meteor.userId() &&
        Roles.userIsInRole(Meteor.user(), ["teacher"])
      ) {
        teacher = Teachers.findOne({ userId: Meteor.userId() });
      }
      if (teacher) {
        const classrooms = Classrooms.find({
          _id: { $in: teacher.classrooms }
        });
        classrooms.forEach(classroom => {
          Companies.remove({ _id: { $in: classroom.companies } });
          Students.remove({ userId: { $in: classroom.students } });
          Meteor.users.remove({ _id: { $in: classroom.students } });
        });
        Classrooms.remove({ _id: { $in: teacher.classrooms } });
        Teachers.remove({ userId: teacher.userId });
        Meteor.users.remove({ _id: teacher.userId });
      } else {
        throw new Meteor.Error("Access denied!");
      }
    }
  }
});
