import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Roles } from "meteor/alanning:roles";
import shortid from "shortid";
import { Teachers } from "../../api/teachers";
import { Training } from "../../api/training";

import { Courses } from "../../api/courses";
import { Students } from "../../api/students";
import { Tasks } from "../../api/tasks";
import { Package } from "../../api/package";
import { addPackages } from "./addPackages";
import { addPackageTasks } from "./addPackageTasks";
import { addGameData } from "./addGameData";

export function resetDatabase() {
  clearDatabase();
  // remove when loading custom database state
  setupAdmin();
  if (Meteor.isDevelopment) {
    setupTestCourse(true);
  }
  addPackageTasks();
  addPackages();
  initPackages();
  setupStudents();
  setupTeacher();
  // remove when loading custom database state
}
//TODO SOURCE THIS OUT
function initPackages() {
  var packages = Package.find({}).fetch();
  for (var i in packages) {
    var content = packages[i].content;
    var tmp1 = [];
    var tmp2 = [];
    var pname = packages[i].name;
    //var tasks = Tasks.find({ package: pname }).fetch();
    var trainings = Training.find({}).fetch();

    for (var j in content) {
      var tasks = Tasks.find({
        parentId: packages[i].name + content[j].sequenceId
      }).fetch();
      content[j].tasks = tasks;
    }

    var packageUpdates = {
      $set: { content: content }
    };

    Package.update({ _id: packages[i]._id }, packageUpdates);

    for (var k in trainings[0][pname]) {
      tmp2.push(
        trainings[0][pname][k].trainingId + trainings[0][pname][k].sequenceId
      );
    }

    //TODO PUT THIS IN 1 QUERY
    Package.update({ _id: packages[i]._id }, packageUpdates);

    packageUpdates = {
      $set: { trainings: tmp2 }
    };
    Package.update({ _id: packages[i]._id }, packageUpdates);
    //TODO END
  }
}
function setupTestCourse(skipSetup) {
  const email = "dozent@yuoshi.de";
  const password = "123";
  const teacherId = Accounts.createUser({ email, password });
  Roles.addUsersToRoles(teacherId, "teacher");
  Teachers.insert({
    userId: teacherId,
    courses: []
  });
  const courseId = shortid.generate();

  Courses.insert({
    _id: courseId,
    courseName: "Demo-Kurs",
    pupils: [],
    tasks: [],
    teacherId: Teachers.findOne()._id
  });
}

function setupAdmin() {
  const ppEmail = "admin@yuoshi.de";
  const password = "123";
  res = Accounts.createUser({ username: "ppAdmin", email: ppEmail, password });
  const ppId = Accounts.findUserByEmail(ppEmail)._id;
  Roles.addUsersToRoles(ppId, "yadmin");
}
function setupTeacher() {
  let username = "teacher";
  let email = username;
  let userId = Accounts.createUser({ username, email, password: username });
  Roles.addUsersToRoles(userId, "teacher");
  Teachers.insert({
    userId: userId,
    studipUserId: "",
    courses: []
  });
}
function setupStudents() {
  const courses = Courses.find({}).fetch();
  for (let i = 0; i < 40; i++) {
    let username = "user" + i;
    let email = username;
    let password = i * 42 + 42;
    let userId = Accounts.createUser({
      username,
      email,
      password: password.toString()
    });
    Roles.addUsersToRoles(userId, "student");

    //TESTCASE WORKSPACE Tasks
    let startPackage = [];

    startPackage.push(Package.findOne({ name: "Motivation" }));
    if (i == 2) {
      var task = Tasks.findOne({ package: "Motivation", sequenceId: 1 });
      Students.insert({
        userId: userId,
        credits: 0,
        exp: 0,
        level: 1,
        earning: [1],
        studipUserId: "e7a0a84b161f3e8c09b4a0a2e8a58147",
        lastActiveTaskId: null,
        courses: [],
        tasks: [task],
        solvedTasks: [],
        learnCards: [],
        solvedSurveys: [],
        currentSequenceId: 0,
        currentPackage: startPackage,
        currentTraining: [],
        solvedTraining: []
      });
    } else {
      Students.insert({
        userId: userId,
        credits: 0,
        exp: 0,
        level: 1,
        earning: [1],
        studipUserId: "",
        lastActiveTaskId: null,
        courses: [],
        tasks: [],
        solvedTasks: [],
        learnCards: [],

        currentSequenceId: 0,
        currentPackage: startPackage,
        currentTraining: [],
        solvedTraining: []
      });
    }

    //TESTCASE END

    // Dummy-Entry for Studip-Validated User:
  }
  // const dummyId = Accounts.createUser({
  //   username: "test_autor",
  //   password: "testing"
  // });
  // Students.insert({
  //   courseId: courses[0]._id,
  //   dummyId,
  //   username: `test_autor`
  // });
}

function clearDatabase() {
  Teachers.remove({});
  Students.remove({});
  Meteor.users.remove({});
  Courses.remove({});
  Tasks.remove({});
  Training.remove({});
  Package.remove({});
}
