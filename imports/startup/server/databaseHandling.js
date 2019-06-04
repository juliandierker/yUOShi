import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Roles } from "meteor/alanning:roles";
import shortid from "shortid";
import { Teachers } from "../../api/teachers";
import { Training } from "../../api/training";

import { Courses } from "../../api/courses";
import { Students } from "../../api/students";
import { Tasks } from "../../api/tasks";
import { addTasks } from "./addTasks";
import { addTraining } from "./addTraining";
import { addGameData, addSurveyData } from "./addGameData";

export function resetDatabase() {
  clearDatabase();
  // remove when loading custom database state
  setupAdmin();
  if (Meteor.isDevelopment) {
    setupTestCourse(true);
  }
  addTasks();
  addTraining();
  setupStudents();
  setupTeacher();
  // remove when loading custom database state
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
  for (let i = 0; i < 9; i++) {
    let username = "user" + i;
    let email = username;
    let userId = Accounts.createUser({ username, email, password: username });
    Roles.addUsersToRoles(userId, "student");

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
      solvedTasks: []
    });
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
}
