import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";
import { Students } from "./students";
import { Teachers } from "./teachers";

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
        Teachers.update({ $addToSet: { courses: courseId } });
      } else {
        throw new Meteor.Error("Access denied!");
      }
    }
  },
  // after basic-auth get the user-courses where the teacher initialized yuoshi
  "courses.getTeacherCourses": function(token, studipUserId) {
    //HTTP requests goes server-side only
    if (Meteor.isServer) {
      try {
        var courseRawData = HTTP.call(
          "GET",
          "http://localhost:8123/plugins.php/argonautsplugin/users/" + studipUserId + "/courses",
          {
            headers: { Authorization: "Basic " + token }
          }
        );
        var courseData = JSON.parse(courseRawData.content);
        var memberships = [];
        for (var i in courseData.data) {
          var tmpCourse = courseData.data[i];

          try {
            var membershipsRaw = HTTP.call(
              "GET",
              "http://localhost:8123/plugins.php/argonautsplugin/courses/" +
                tmpCourse.id +
                "/memberships",
              {
                headers: { Authorization: "Basic " + token }
              }
            );
            var membershipData = JSON.parse(membershipsRaw.content);

            //Search for courses where current user is "dozent"
            for (var k in membershipData.data) {
              var memberStatus = membershipData.data[k].attributes.status;
              var targetcourseId = membershipData.data[k].id.split("_")[1];

              var validDozent = targetcourseId === studipUserId;
              if (memberStatus == "dozent" && validDozent) {
                memberships.push(tmpCourse);
              }
            }
          } catch (e) {
            console.log(e);
            return false;
          }
        }
        return memberships;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  },

  "courses.getStudentCourses": function(token, studipUserId) {
    var user = Students.findOne({ studipUserId: studipUserId });

    if (Meteor.isServer) {
      try {
        var courseRawData = HTTP.call(
          "GET",
          "http://localhost:8123/plugins.php/argonautsplugin/users/" + studipUserId + "/courses",
          {
            headers: { Authorization: "Basic " + token }
          }
        );
        var courseData = JSON.parse(courseRawData.content);
      } catch (e) {
        console.log(e);
        return false;
      }
      return courseData;
    }
  },

  "courses.start": function(courseId) {
    Courses.update({ _id: courseId }, { $set: { started: true } });
  },
  "courses.delete": function(courseId, teacherId) {
    //TODO delte routine
  }
});
