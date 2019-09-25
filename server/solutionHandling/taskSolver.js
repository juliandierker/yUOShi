import { Meteor } from "meteor/meteor";
import equals from "fast-deep-equal";
import { Mongo } from "meteor/mongo";

import { Students } from "../../imports/api/students";
import { Tasks } from "../../imports/api/tasks";

export function solveTask(studentId, taskId, solvedPercentage) {
  const student = Students.findOne({ _id: studentId });
  let task = getTask(studentId, taskId);
  updateStudentExperience(student, task, solvedPercentage);
  updateStudentCredits(student, task, solvedPercentage);
  setTaskSolved(student, task);
}

/**
 * Get Task from Student by studentId and taskId
 * @param {Number} studentId
 * @param {Number} taskId
 */
function getTask(studentId, taskId) {
  try {
    var currentTask = Students.find(
      { _id: studentId, "tasks.taskId": taskId },
      { fields: { "tasks.$": 1, _id: 0 } }
    ).fetch()[0];
    if (!currentTask) return null;
    return currentTask.tasks[0];
  } catch (error) {
    console.log(error);
  }
}

/**
 * Set endTime and solved flag of task
 * @param {*} student
 * @param {*} task
 */
function setTaskSolved(student, task) {
  var endTime = moment().format("dddd, MMMM, Do YYYY, h:mm:ss a");
  task["endTime"] = endTime;
  task["taskState"] = "solved";

  updateStudentData(student._id, {
    $push: { solvedTasks: task },
    $set: { lastActiveTaskId: task.taskId },
    $pull: { tasks: { taskId: task.taskId } },
    $inc: { currentSequenceId: 1 }
  });
}

/**
 * Update the students experience and check for level-up
 * @param {*} student
 * @param {*} task
 * @param {Number} solvedPercentage
 */
function updateStudentExperience(student, task, solvedPercentage) {
  let taskExp = task.credits;
  let level = student.level;

  // Experience needed to level up
  const neededExp = level * level * 10;

  // Check if solvedPercentage is a not null or is 0
  if (solvedPercentage || solvedPercentage == 0) {
    taskExp = Math.round(taskExp * solvedPercentage);
  }

  let newExp = student.exp + taskExp;

  if (newExp > neededExp) {
    level++;
    newExp -= neededExp;
  }

  updateStudentData(student._id, { $set: { level: level, exp: newExp } });
}

/**
 * Increment the students credits
 * @param {*} student
 * @param {*} task
 * @param {Number} solvedPercentage
 */
function updateStudentCredits(student, task, solvedPercentage) {
  let newCredits = task.credits;
  if (solvedPercentage || solvedPercentage == 0) {
    newCredits = Math.round(newCredits * solvedPercentage);
  }

  updateStudentData(student._id, { $set: { credits: newCredits } });
}

/**
 * Update student in mongo
 * @param {Number} studentId
 * @param {*} data
 */
function updateStudentData(studentId, data) {
  Students.update({ _id: studentId }, data);
}
