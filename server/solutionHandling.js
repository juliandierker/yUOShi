import { Meteor } from "meteor/meteor";
import equals from "fast-deep-equal";

import { solveTask } from "./solutionHandling/taskSolver";

var Solutions = JSON.parse(Assets.getText("solutions.json"));

function solveMulti(
  studentId,
  taskId,
  currentSolution,
  falseCount,
  totalAnswerCount,
  falseQuestions,
  questionCorrect,
  studentSolution
) {
  if (currentSolution.sol[0] === "free") {
    return currentSolution.sol.concat(studentSolution);
  }
  if (currentSolution.sol.length !== 0) {
    let studentSolutionAnswers = studentSolution.find(element => {
      return element.id.toString() === currentSolution.id.toString();
    });

    if (studentSolutionAnswers === undefined) {
      falseCount += currentSolution.sol.length;
      falseQuestions.push(currentSolution);
    } else {
      for (let j = 0; j < studentSolutionAnswers.values.length; j++) {
        if (!currentSolution.sol.includes(studentSolutionAnswers.values[j])) {
          questionCorrect = false;
          falseCount++;
        }
      }
      for (let j = 0; j < currentSolution.sol; j++) {
        if (!studentSolutionAnswers.values.includes(currentSolution.sol[j])) {
          questionCorrect = false;
          falseCount++;
        }
      }
    }
  } else {
    // TODO: save answers for later evaluation in "Lehrendenzimmer"
  }

  if (!questionCorrect) {
    falseQuestions.push(currentSolution);
  }

  let retval = {
    falseCount,
    totalAnswerCount,
    falseQuestions
  };

  if (falseCount === 0) {
    solveTask(studentId, taskId);
  }
  return retval;
}
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
    var correct =
      !Solutions[task.taskId] ||
      studentSolution.length == Solutions[task.taskId].length;
    if (correct) {
      solveTask(studentId, task.taskId);
    }
    return correct;
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

    let falseQuestions = [];

    let solution = Solutions[task.taskId];

    if (!solution) return null;

    let totalAnswerCount = 0;
    let falseCount = 0;
    let questionCorrect = true;

    if (task.content && task.isTask) {
      totalAnswerCount += task.content[0].AnswerSet.length;
      const currentSolution = solution.find(element => {
        return element.id.toString() === task.content[0].QuestionId.toString();
      });
      return solveMulti(
        studentId,
        task.taskId,
        currentSolution,
        falseCount,
        totalAnswerCount,
        falseQuestions,
        questionCorrect,
        studentSolution
      );
    } else {
      totalAnswerCount += task.AnswerSet.length;
      const currentSolution = solution.find(element => {
        return element.id.toString() === task.QuestionId.toString();
      });
      return solveMulti(
        studentId,
        task.taskId,
        currentSolution,
        falseCount,
        totalAnswerCount,
        falseQuestions,
        questionCorrect,
        studentSolution
      );
    }
  }
});
