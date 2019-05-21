import { Meteor } from "meteor/meteor";
import equals from "fast-deep-equal";
import { Mongo } from "meteor/mongo";

import { Students } from "../imports/api/students";
import { Tasks } from "../imports/api/tasks";
var Solutions = JSON.parse(Assets.getText("solutions.json"));

function solveTask(studentId, taskId) {
  try {
    const student = Students.findOne({ _id: studentId });
    const task = Tasks.findOne({ _id: taskId });
  } catch (e) {
    console.log(e);
  }
  var currentTask = Students.find(
    { _id: studentId, "currentTasks.taskId": taskId },
    { fields: { "currentTasks.$": 1, _id: 0 } }
  ).fetch()[0];
  if (!currentTask) {
    return "Task already solved!";
  }
  currentTask = currentTask.currentTasks[0];
  var endTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  currentTask["endTime"] = endTime;
  currentTask["taskState"]["status"] = "solved";

  student.exp += task.credits;

  // update student
  var studentUpdates = {
    $push: { solvedTasks: currentTask },
    $inc: {},
    $set: { lastActiveTaskId: taskid },
    $pull: { tasks: { taskId: taskid } }
  };

  if (student.exp > student.level * student.level * 1000) {
    studentUpdates["$inc"]["level"] = 1;
    studentUpdates["$set"]["exp"] =
      student.exp - student.level * student.level * 1000;
  } else {
    studentUpdates["$set"]["exp"] = student.exp;
  }
  if (student.date == moment().format("MMM Do,h:mm a")) {
    if (student.earning.length != 1) {
      // var money = Companies.update({ _id: studentid }, { $pop: { earning: 1 } });
    }
    money = task.credits + student.earning[student.earning.length - 1];
    Companies.update({ _id: studentid }, { $addToSet: { earning: money } });
    // studentUpdates["$addToSet"]["earning"] = money;
  } else {
    var money = task.credits + student.earning[student.earning.length - 1];
    Companies.update({ _id: studentid }, { $addToSet: { earning: money } });
    // studentUpdates["$addToSet"]["earning"] = money;
    student.date = moment().format("MMM Do,h:mm a");
  }
  var newCredits = task.credits;

  for (var bonus in currentTask.taskState.bonuses) {
    newCredits += currentTask.taskState.bonuses[bonus];
  }
  //TODO Badges

  // var studentBadges = student.badges;
  // var badges = [];
  // if (studen.solvedTasks.length == 1) {
  //   badges.push("assignments");
  // }
  // if (newCredits > 3000) {
  //   badges.push("money");
  // }npm install fast-deep-equal

  //
  // for (var i = 0; i < compBadges.length; i++) {
  //   if (badges.includes(compBadges[i])) {
  //     compBadges.splice(i, 1);
  //   }
  // }

  // studenUpdates["$set"]["badges"] = badges.concat(compBadges);

  studenUpdates["$inc"]["credits"] = newCredits;
  Students.update({ _id: studenid }, studenUpdates);
}

Meteor.methods({
  "solutionHandler.submitDrag"(studentSolution, studentId, task) {
    var correct = equals(studentSolution, Solutions[task.taskId]);
    console.log(correct);
    if (correct) {
      console.log("HEEEEEY");
      solveTask(studentId, task.taskId);
    } else {
      console.log(studentSolution + "   :   " + Solutions[task.taskId]);
    }
    return correct;
  }
});
