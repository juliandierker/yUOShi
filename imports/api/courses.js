import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";
import { Students } from "./students";
import { Teachers } from "./teachers";

export const Courses = new Mongo.Collection("courses");

if (Meteor.isServer) {
  // classNames of one teacher are unique
  Courses.rawCollection().ensureIndex(
    { teacherId: 1, courseName: 1 },
    { unique: true }
  );
  // teacher
  Meteor.publish("classroomsByTeacher", () => {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
      return Courses.find({ teacherId: Meteor.userId() });
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
  "courses.insert": function(courseName, studipCourseId) {
    if (Meteor.isServer) {
      if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["teacher"])) {
        if (Courses.findOne({ teacherId: Meteor.userId(), courseName }))
          throw new Meteor.Error("Class already exists!");
        const courseId = shortid.generate();
        const students = [];
        Courses.insert({
          _id: classId,
          courseName,
          studipCourseId,
          pupils,
          tasks: [],
          teacherId: Meteor.userId()
        });
        Teachers.update(
          { userId: Meteor.userId() },
          { $addToSet: { courses: courseId } }
        );
      } else {
        throw new Meteor.Error("Access denied!");
      }
    }
  },
  // after basic-auth get the user-courses where the teacher initialized yuoshi
  //TODO global-userstatus route under construction
  "courses.filterTeacherCourses": function(token, studipUserId) {
    try {
      var courseRawData = HTTP.call(
        "GET",
        "http://localhost/studip/plugins.php/argonautsplugin/users/" +
          studipUserId +
          "/courses",
        {
          headers: { Authorization: token }
        }
      );
      var courseData = JSON.parse(courseRawData.content);
      var allCourses = [];
      for (var i = 0; i < courseData.data.length; i++) {
        allCourses.push(courseData.data[i]);
        // if (!Courses.findOne({ studipCourseId: courseData[i] })) {
        // }
      }
      var memberships = [];
      var membershipRawData = HTTP.call(
        "GET",
        "http://localhost/studip/plugins.php/argonautsplugin/users/" +
          studipUserId +
          "/courses",
        {
          headers: { Authorization: token }
        }
      );
    } catch (e) {
      return false;
    }
  },
  "courses.pupilInit": function(userId) {},
  "courses.delete": function(courseId, teacherId) {
    //TODO delte routine
  }
});
