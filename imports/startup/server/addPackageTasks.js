import { Meteor } from "meteor/meteor";

function createDragTask(taskSpecs) {
  taskSpecs["isTask"] = true;
  taskSpecs["taskId"] = taskSpecs["taskId"];
  taskSpecs["type"] = "drag";
  taskSpecs["package"] = taskSpecs["package"];
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = taskSpecs["filePrefix"];
  taskSpecs["taskState"] = { save: false, help: false, viewed: false };

  return taskSpecs;
}
function createTagTask(taskSpecs) {
  taskSpecs["isTask"] = true;
  taskSpecs["taskId"] = taskSpecs["taskId"];
  taskSpecs["type"] = "tag";
  taskSpecs["content"] = taskSpecs["content"];
  taskSpecs["package"] = taskSpecs["package"];
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = taskSpecs["filePrefix"];
  taskSpecs["taskState"] = { save: false, help: false, viewed: false };

  return taskSpecs;
}

function createClozeTask(taskSpecs) {
  taskSpecs["isTask"] = true;
  taskSpecs["taskId"] = taskSpecs["taskId"];
  taskSpecs["type"] = "cloze";
  taskSpecs["content"] = taskSpecs["content"];
  taskSpecs["package"] = taskSpecs["package"];
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = taskSpecs["filePrefix"];
  taskSpecs["taskState"] = { save: false, help: false, viewed: false };

  return taskSpecs;
}

function createMemory(taskSpecs) {
  taskSpecs["isTask"] = true;
  taskSpecs["taskId"] = taskSpecs["taskId"];
  taskSpecs["type"] = "memory";
  taskSpecs["content"] = taskSpecs["content"];
  taskSpecs["package"] = taskSpecs["package"];
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = taskSpecs["filePrefix"];
  taskSpecs["taskState"] = { save: false, help: false, viewed: false };

  return taskSpecs;
}

function createMultiChoice(taskSpecs) {
  taskSpecs["isTask"] = true;
  taskSpecs["taskId"] = taskSpecs["taskId"];
  taskSpecs["type"] = "multiChoice";
  taskSpecs["content"] = taskSpecs["content"];
  taskSpecs["package"] = taskSpecs["package"];
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = taskSpecs["filePrefix"];
  taskSpecs["taskState"] = { save: false, help: false, viewed: false };

  return taskSpecs;
}

function createSurveyTask(taskSpecs) {
  taskSpecs["isTask"] = true;
  taskSpecs["taskId"] = taskSpecs["taskId"];
  taskSpecs["type"] = "survey";
  taskSpecs["package"] = taskSpecs["package"];
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = taskSpecs["filePrefix"];
  taskSpecs["taskState"] = { save: true, help: false, viewed: false };

  return taskSpecs;
}

function addTasks(packageName, path) {
  let tasks = JSON.parse(Assets.getText(path))["tasks"];
  let trainings = [];

  for (let i in tasks) {
    tasks[i]["sequenceId"] = parseInt(i);
    if (tasks[i].isTraining) {
      trainings.push(tasks[i]);
    } else {
      let newtask = {};
      switch (tasks[i].filePrefix) {
        case "Drag":
          newtask = createDragTask(tasks[i]);
          break;
        case "Tag":
          newtask = createTagTask(tasks[i]);
          break;
        case "Multi":
          newtask = createMultiChoice(tasks[i]);
          break;
        case "Memory":
          newtask = createMemory(tasks[i]);
          break;
        case "Cloze":
          newtask = createClozeTask(tasks[i]);
          break;
        case "Survey":
          newtask = createSurveyTask(tasks[i]);
          break;
      }
      Meteor.call("tasks.insert", newtask);
    }
  }
  return trainings;
}

export function addPackageTasks() {
  let trainings = {};
  trainings["Motivation"] = addTasks("Motivation", "tasks/motivation.json");
  trainings["Identität"] = addTasks("Identität", "tasks/identity.json");

  Meteor.call("training.insert", trainings);
}
