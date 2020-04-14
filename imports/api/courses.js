import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";
import { Students } from "./students";
import { Teachers } from "./teachers";
import PromisifiedMeteor from "./promisified";

export const Courses = new Mongo.Collection("courses");

if (Meteor.isServer) {
  // courseNames of one teacher are unique
  Courses.rawCollection().ensureIndex({ teacherId: 1, courseName: 1 }, { unique: true });
  //Students
  Meteor.publish("coursesByStudent", () => {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["student"])) {
      var studentId = Students.findOne({ userId: Meteor.userId() })._id;
      Courses.find({ studentId });
      return Courses.find({ studentId });
    }
    throw new Meteor.Error("Access denied!");
  });
  Meteor.publish("coursesById", function() {
    if (Meteor.userId()) {
      return Courses.find({});
    }
    throw new Meteor.Error("Access denied!");
  });
  // teacher
  Meteor.publish("coursesByTeacher", (courseId) => {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
      var teacherId = Teachers.findOne({ userId: Meteor.userId() })._id;
      Courses.findOne();
      return Courses.find({ teacherId });
    }
    throw new Meteor.Error("Access denied!");
  });
  // teacher
  Meteor.publish("classroomByName", function(className) {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
      return Courses.find({ teacherId: Meteor.userId(), className });
    }
    throw new Meteor.Error("Access denied!");
  });
  // admin
  Meteor.publish("courses", function() {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["yadmin"])) {
      return Courses.find({});
    }
    throw new Meteor.Error("Access denied!");
  });
  // pupil
  Meteor.publish("coursesOfStudent", function() {
    const student = Students.findOne({ userId: Meteor.userId() });
    if (student) {
      return Courses.find({ _id: student.classId });
    }
    throw new Meteor.Error("Access denied!");
  });
}

Meteor.methods({
  // teacher
  "courses.insert": function(courseName, studipId, teacherId) {
    if (Meteor.isServer) {
      if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
        if (Courses.findOne({ teacherId: Meteor.userId(), courseName }))
          throw new Meteor.Error("Class already exists!");
        const courseId = shortid.generate();
        const students = [];
        Courses.insert({
          teacherId: teacherId,
          courseName,
          studipId,
          students,
          started: false,
          tasks: [],
          paths: []
        });
        Teachers.update(teacherId, { $addToSet: { courses: courseId } });
      } else {
        throw new Meteor.Error("Access denied!");
      }
    }
  },
  "courses.start": function(courseId) {
    Courses.update({ _id: courseId }, { $set: { started: true } });
  },
  "courses.delete": function(courseId, teacherId) {
    //TODO delte routine
  }
});
