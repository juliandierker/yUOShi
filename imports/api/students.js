import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";
import { Classrooms } from "./courses";
import { Teachers } from "./teachers";
import { Courses } from "./courses";
export const Students = new Mongo.Collection("students");

Meteor.methods({
  "students.insert": function(userId, studipUserId) {
    Students.insert({
      userId: userId,
      credits: 0,
      exp: 0,
      level: 1,
      earning: [1],
      studipUserId: studipUserId,
      lastActiveTaskId: null,
      courses: [],
      tasks: [],
      currentTraining: [],
      solvedTraining: [],
      solvedTasks: [],
      currentPackage: []
    });
  },
  "students.addCourse": function(courseId, _id) {
    Students.update(_id, { $addToSet: { courses: courseId } });
  },
  "students.getStartedCourses": function(studentCourses) {
    var tmp = [];
    for (var i = 0; i < studentCourses.length; i++) {
      tmp.push(Courses.findOne({ studipId: studentCourses[i] }));
    }
    return tmp;
  },
  "students.getTasks": function(tasks, _id) {
    Students.update(_id, { $addToSet: { tasks } });
  },
  "students.getPackage": function(package, _id) {
    Students.update(_id, { $addToSet: { tasks } });
  },
  "students.setLastActiveTaskId": function(taskId, _id) {
    Students.update(_id, { $addToSet: { lastActiveTaskId: taskId } });
  }
});

if (Meteor.isServer) {
  // pupil
  Meteor.publish("student", () => {
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["student"])) {
      return Students.find({ userId: Meteor.userId() });
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
