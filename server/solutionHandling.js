import { Meteor } from "meteor/meteor";
import equals from "fast-deep-equal";
import { Mongo } from "meteor/mongo";

import { Students } from "../imports/api/students";
import { Tasks } from "../imports/api/tasks";
var Solutions = JSON.parse(Assets.getText("solutions.json"));

function solveTask(studentId, taskId, solvedPercentage) {
  try {
    const student = Students.findOne({ _id: studentId });
    const task = Tasks.findOne({ taskId: taskId });

    var currentTask = Students.find(
      { _id: studentId, "tasks.taskId": taskId },
      { fields: { "tasks.$": 1, _id: 0 } }
    ).fetch()[0];
    if (!currentTask) {
      return "Task already solved!";
    }

    currentTask = currentTask.tasks[0];

    var endTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    currentTask["endTime"] = endTime;
    currentTask["taskState"] = "solved";

    student.exp += (task.credits  * (solvedPercentage ? solvedPercentage : 1));

    // update student
    var studentUpdates = {
      $push: { solvedTasks: currentTask },
      $inc: {},
      $set: { lastActiveTaskId: taskId },
      $pull: { tasks: { taskId: taskId } }
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
      Students.update({ _id: studentId }, { $addToSet: { earning: money } });
      // studentUpdates["$addToSet"]["earning"] = money;
      student.date = moment().format("MMM Do,h:mm a");
    }
    var newCredits = task.credits * (solvedPercentage ? solvedPercentage : 1);

    for (var bonus in currentTask.taskState.bonuses) {
      newCredits += currentTask.taskState.bonuses[bonus];
    }
    studentUpdates["$inc"]["credits"] = newCredits;
    Students.update({ _id: studentId }, studentUpdates);
  } catch (e) {
    console.log(e);
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
}

Meteor.methods({
  "solutionHandler.submitDrag"(studentSolution, studentId, task, solvedPercentage) {
    if(solvedPercentage !== undefined) {
      solveTask(studentId, task.taskId, solvedPercentage);
    }
    var correct = equals(studentSolution, Solutions[task.taskId]);
    if (correct) {
      solveTask(studentId, task.taskId);
    }
    return correct;
  },
  "solutionHandler.submitCloze"(studentSolution, studentId, task) {
    let correctAnswers = [];
    let allCorrect = true;
    for (let i = 0; i < studentSolution.length; i++) {
      if (
        studentSolution[i].toString().toLowerCase() ===
        Solutions[task.taskId][i].toString().toLowerCase()
      ) {
        correctAnswers.push(true);
      } else {
        correctAnswers.push(false);
        allCorrect = false;
      }
    }
    if (allCorrect) {
      solveTask(studentId, task.taskId);
    }
    return correctAnswers;
  },
  "solutionHandler.submitTag"(studentSolution, studentId, task) {
    var correct = studentSolution.length == Solutions[task.taskId].length;
    // var correct = equals(studentSolution, Solutions[task.taskId]);
    if (correct) {
      solveTask(studentId, task.taskId);
    }
    return correct;
  }
});
