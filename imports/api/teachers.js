import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";
import { Students } from "./students";
import { Classrooms } from "./courses";

export const Teachers = new Mongo.Collection("teachers");

if (Meteor.isServer) {
  // teacher
  Meteor.publish("teacher", function(teacherId) {
    return Teachers.find({ studipUserId: teacherId });
  });
  Meteor.publish("teacherByUserId", function(userId) {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
      return Teachers.find({ userId: Meteor.userId() });
    }
    throw new Meteor.Error("Acces denied!");
  });
  // admin
  Meteor.publish("allTeacher", function() {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["yadmin"])) {
      return Teachers.find({});
    }
    throw new Meteor.Error("Access denied!");
  });
}

Meteor.methods({
  "teachers.insert": function(userId, studipUserId) {
    Teachers.insert({
      userId: userId,
      studipUserId: studipUserId,
      courses: []
    });
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
