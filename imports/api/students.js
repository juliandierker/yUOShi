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

function checkTaskRequirements(req, solvedTasks) {
  let allRequiredFound = true;
  for (let i in req) {
    let found = solvedTasks.find((elem) => {
      return elem.taskId === req[i];
    });
    if (found === undefined) {
      allRequiredFound = false;
    }
  }
  return allRequiredFound;
}

let startPackage = [];
startPackage.push(Package.findOne({ name: "Motivation" }));

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
      solvedSurveys: [],
      currentSequenceId: 0,
      currentTraining: [],
      tutorials: [],
      solvedTraining: [],
      learnCards: [],
      solvedTasks: [],
      currentPackage: startPackage
    });
  },
  "student.saveLearncard": function(_id, subject, statement, content, image) {
    let learnCardObj = {
      subject,
      statement,
      example: content,
      image
    };
    Students.update(_id, { $addToSet: { learnCards: learnCardObj } });
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
  "students.completeTutorial"(tutorial) {
    console.log(tutorial);
    if (Meteor.userId() && Roles.userIsInRole(Meteor.user(), ["student"])) {
      Students.update({ userId: Meteor.userId() }, { $push: { tutorials: tutorial } });
    } else {
      throw new Meteor.Error("Access denied!");
    }
  },
  "students.getNextTask": function(packageName, sequenceId, _id) {
    let tasks = Tasks.find({
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
  "students.solvePackage": function(packageName, _id) {
    var packageObj = Package.findOne({ name: packageName });
    try {
      Students.update(_id, { $pull: { currentPackage: packageObj } });
      return true;
    } catch (e) {
      console.log(e);
    }
  },
  "students.initTraining": function(training, _id) {
    try {
      Students.update(_id, { $set: { currentTraining: training } });
      return Students.find({ _id: _id }).fetch()[0];
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
    Students.update({ _id: student._id }, { $inc: { currentSequenceId: 1 } });
  },
  "students.showNextTask": function(student) {
    let task = Tasks.find({
      package: student.currentPackage[0].name,
      sequenceId: student.currentSequenceId + 1
    }).fetch()[0];
    if (task && task.requires) {
      if (!checkTaskRequirements(task.requires, student.solvedTasks)) {
        Students.update({ _id: student._id }, { $inc: { currentSequenceId: 2 } });
        return;
      }
    }
    Students.update({ _id: student._id }, { $inc: { currentSequenceId: 1 } });
  },
  "students.showPreviousTask": function(student) {
    let task = Tasks.find({
      package: student.currentPackage[0].name,
      sequenceId: student.currentSequenceId - 1
    }).fetch()[0];
    if (task.requires) {
      if (!checkTaskRequirements(task.requires, student.solvedTasks)) {
        Students.update({ _id: student._id }, { $inc: { currentSequenceId: -2 } });
        return;
      }
    }

    Students.update({ _id: student._id }, { $inc: { currentSequenceId: -1 } });
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
  Meteor.publish("pupilsByClassId", (classId) => {
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
