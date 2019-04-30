import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Roles } from "meteor/alanning:roles";
import shortid from "shortid";
import { Teachers } from "../../api/teachers";
import { Courses } from "../../api/courses";
import { Students } from "../../api/students";

import { addTasks } from "./addTasks";
import { addGameData, addSurveyData } from "./addGameData";

export function resetDatabase() {
  clearDatabase();
  // remove when loading custom database state
  setupAdmin();
  if (Meteor.isDevelopment) {
    setupTestCourse(true);
  }
  addTasks();
  setupStudents();
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
  res = Accounts.createUser({ email: ppEmail, password });
  const ppId = Accounts.findUserByEmail(ppEmail)._id;
  Roles.addUsersToRoles(ppId, "yadmin");
}

function setupStudents() {
  const courses = Courses.find({}).fetch();
  for (let i = 0; i < 9; i++) {
    const username = "user" + i;
    const userId = Accounts.createUser({ username, password: username });
    Roles.addUsersToRoles(userId, "student");

    Students.insert({
      courseId: courses[0]._id,
      userId,
      username: `user${i}`
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
}
