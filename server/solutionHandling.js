import { Meteor } from "meteor/meteor";
import equals from "fast-deep-equal";

import { solveTask } from "./solutionHandling/taskSolver";
import { checkMulti } from "./solutionHandling/multiSolver";

import { Students } from "../imports/api/students";

var Solutions = JSON.parse(Assets.getText("solutions.json"));

Meteor.methods({
  "solutionHandler.submitDrag"(
    studentSolution,
    studentId,
    task,
    solvedPercentage
  ) {
    if (solvedPercentage !== undefined) {
      solveTask(studentId, task.taskId, solvedPercentage);
    }

    // var correct = equals(studentSolution, Solutions[task.taskId]);
    var correct = true;
    studentSolution.map(solution => {
      solution.children.map((child, index) => {
        if (task.multipleColumns) {
          if (solution.categorie != child.solution) {
            correct = false;
          }
        } else {
          if (child.solution != task.solArray[index]) {
            correct = false;
          }
        }
      });
    });

    if (correct) {
      solveTask(studentId, task.taskId);
    }
    return correct;
  },
  "solutionHandler.submitCloze"(
    studentSolution,
    studentId,
    task,
    solvedPercentage
  ) {
    if (solvedPercentage !== undefined) {
      solveTask(studentId, task.taskId, solvedPercentage);
    }
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
    var correct =
      !Solutions[task.taskId] ||
      studentSolution.length == Solutions[task.taskId].length;
    if (correct) {
      solveTask(studentId, task.taskId);
    }
    return correct;
  },
  "solutionHandler.taskReadFinish"(studentId, task) {
    let student = Students.find({
      _id: studentId,
      "tasks.taskId": task.taskId
    }).fetch()[0];
    let tasks = student.tasks;
    tasks[0].taskState.readFinished = true;

    Students.update({ _id: studentId }, { $set: { tasks } });
    return;
  },
  "solutionHandler.submitMemory"(studentSolution, studentId, task) {
    var correct = studentSolution.length == task.content[0].keywords.length * 2;
    if (correct) {
      solveTask(studentId, task.taskId);
    }
    return correct;
  },
  "solutionHandler.submitMulti"(
    studentSolution,
    studentId,
    task,
    solvedPercentage
  ) {
    if (solvedPercentage !== undefined) {
      solveTask(studentId, task.taskId, solvedPercentage);
      return null;
    }
    let solution = Solutions[task.taskId];
    if (!solution) return null;

    const currentSolution = solution.find(element => {
      if (task.content) {
        return element.id.toString() === task.content[0].QuestionId.toString();
      } else {
        return element.id.toString() === task.QuestionId.toString();
      }
    });

    // question has no "correct" answer
    if (currentSolution.correct[0] === "free") {
      return currentSolution.correct.concat(studentSolution);
    }

    let retval = checkMulti(
      task.content ? task.content[0] : task,
      studentSolution,
      currentSolution
    );

    if (task.hasNext) {
      return Object.assign(retval, { next: true });
    }

    if (retval.falseCount === 0) {
      solveTask(studentId, task.taskId);
    }

    return retval;
  }
});
