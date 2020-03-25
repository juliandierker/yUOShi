import { Meteor } from "meteor/meteor";
import equals from "fast-deep-equal";

import { saveCard } from "./solutionHandling/cardSaver";
import { solveTask } from "./solutionHandling/taskSolver";
import { checkMulti } from "./solutionHandling/multiSolver";

import { Students } from "../imports/api/students";

var Solutions = JSON.parse(Assets.getText("solutions.json"));

Meteor.methods({
  "solutionHandler.viewTask"(studentId, taskId) {
    let tasks = Students.findOne({ _id: studentId }).tasks;

    let newTasks = tasks.map((elem) => {
      elem.taskState.viewed = true;
      return elem;
    });
    Students.update({ _id: studentId }, { $set: { tasks: newTasks } });
  },
  "solutionHandler.viewVideo"(studentId, taskId) {
    let tasks = Students.findOne({ _id: studentId }).tasks;

    let newTasks = tasks.map((elem) => {
      if (elem._id === taskId) {
        elem.taskState.videoWatched = true;
      }
      return elem;
    });
    Students.update({ _id: studentId }, { $set: { tasks: newTasks } });
  },
  "solutionHandler.submitCard"(studentId, task) {
    saveCard(studentId, task.taskId);
    solveTask(studentId, task.taskId, 100);
  },
  "solutionHandler.submitDrag"(studentSolution, studentId, task, solvedPercentage) {
    if (solvedPercentage !== undefined) {
      solveTask(studentId, task.taskId, solvedPercentage);
      return;
    }

    // var correct = equals(studentSolution, Solutions[task.taskId]);
    var correct = true;
    studentSolution.map((solution) => {
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
  "solutionHandler.submitCloze"(studentSolution, studentId, task, solvedPercentage) {
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
      !Solutions[task.taskId] || studentSolution.length == Solutions[task.taskId].length;
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
  "solutionHandler.submitMulti"(studentSolution, studentId, task, questionIndex, solvedPercentage) {
    if (solvedPercentage !== undefined) {
      solveTask(studentId, task.taskId, solvedPercentage);
      return null;
    }
    let solution = Solutions[task.taskId];
    if (!solution) return null;

    const currentSolution = solution.find((element) => {
      if (task.content) {
        return element.id.toString() === task.content[questionIndex].QuestionId.toString();
      } else {
        return element.id.toString() === task.QuestionId.toString();
      }
    });

    // question has no "correct" answer
    if (currentSolution.correct[0] === "free") {
      return currentSolution.correct.concat(studentSolution);
    }

    let retval = checkMulti(
      task.content ? task.content[questionIndex] : task,
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
  },
  "solutionHandler.submitTraining"(studentId, task) {
    solveTask(studentId, task._id, 100);
  },
  "solutionHandler.submitSurvey"(surveyData, studentId, task) {
    // Mark surveyTask as Solved and move it into solvedTaskArray
    solveTask(studentId, task.taskId);
    //Get updated SolvedTasks from Student
    let currentStudentData = Students.findOne({ _id: studentId });
    let currentSurveyTask = currentStudentData.solvedTasks.find(
      (elem) => elem.taskId === task.taskId
    );
    // Set surveyData in SolvedTask (Survey)
    currentSurveyTask.surveyData = surveyData;
    currentSurveyTask.content = surveyData.content;
    // Add new surveyData to Meteor
    const surveyObj = {
      surveyId: task.taskId,
      title: task.title,
      package: task.package,
      question: task.question,
      answers: task.keywords,
      solution: surveyData.checkedAnswers,
      comment: surveyData.content
    };
    Students.update({ _id: studentId }, { $set: { solvedSurveys: surveyObj } });
    return true;
  },
  "solutionHandler.checkMulti"(studentSolution, task, questionIndex) {
    let solution = Solutions[task.taskId];
    if (!solution) return null;

    const currentSolution = solution.find((element) => {
      if (task.content) {
        return element.id.toString() === task.content[questionIndex].QuestionId.toString();
      } else {
        return element.id.toString() === task.QuestionId.toString();
      }
    });

    // question has no "correct" answer
    if (currentSolution.correct[0] === "free") {
      return currentSolution.correct.concat(studentSolution);
    }

    let retval = checkMulti(
      task.content ? task.content[questionIndex] : task,
      studentSolution,
      currentSolution
    );

    if (task.hasNext) {
      return Object.assign(retval, { next: true });
    }

    return retval;
  }
});
