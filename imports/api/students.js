import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";
import { Classrooms } from "./courses";
import { Teachers } from "./teachers";
import { Courses } from "./courses";
import { Tasks } from "./tasks";
import { Package } from "./package";
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
  "students.getNextTask": function(packageName, sequenceId, _id) {
    var tasks = Tasks.find({
      package: packageName,
      sequenceId: sequenceId
    }).fetch()[0];
    Students.update(_id, { $addToSet: { tasks } });
  },
  //Gets a package and it's first training
  "students.getPackage": function(packageName, _id) {
    var packageObj = Package.findOne({ name: packageName });
    try {
      Students.update(_id, { $addToSet: { currentPackage: packageObj } });
      return true;
    } catch (e) {
      console.log(e);
    }
  },
  "students.initTraining": function(training, _id) {
    try {
      Students.update(_id, { $set: { currentTraining: training } });
      return true;
    } catch (e) {
      console.log(e);
    }
  },
  "students.setLastActiveTaskId": function(taskId, _id) {
    Students.update(_id, { $addToSet: { lastActiveTaskId: taskId } });
  },
  "students.solveTraining": function(student, training) {
    var studentUpdates = {
      $addToSet: { solvedTraining: training },
      $pull: {
        currentTraining: {
          name: training.name,
          sequenceId: training.sequenceId
        }
      }
    };
    Students.update({ _id: student._id }, studentUpdates);
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
