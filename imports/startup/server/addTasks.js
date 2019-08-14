import { Meteor } from "meteor/meteor";
import { Tasks } from "../../api/tasks";

function createDragTask(taskSpecs) {
  taskSpecs["isTask"] = true;
  taskSpecs["taskId"] = taskSpecs["taskId"];
  taskSpecs["type"] = "drag";
  taskSpecs["package"] = taskSpecs["package"];
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = taskSpecs["filePrefix"];
  // taskSpecs["taskurl"] =
  //   "/Tasks/Maze/TaskPictures/" + taskSpecs["taskId"] + ".jpeg";
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
  // taskSpecs["taskurl"] =
  //   "/Tasks/Maze/TaskPictures/" + taskSpecs["taskId"] + ".jpeg";
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

  return taskSpecs;
}
export function addTasks() {
  var dragTasks = JSON.parse(Assets.getText("tasks/drags.json"))["tasks"];
  var tagTasks = JSON.parse(Assets.getText("tasks/tags.json"))["tasks"];
  var clozeTasks = JSON.parse(Assets.getText("tasks/cloze.json"))["tasks"];
  var memoryTasks = JSON.parse(Assets.getText("tasks/memory.json"))["tasks"];

  for (var i = 0; i < dragTasks.length; i++) {
    Meteor.call("tasks.insert", createDragTask(dragTasks[i]));
  }
  for (var i = 0; i < tagTasks.length; i++) {
    Meteor.call("tasks.insert", createTagTask(tagTasks[i]));
  }
  for (var i = 0; i < clozeTasks.length; i++) {
    Meteor.call("tasks.insert", createClozeTask(clozeTasks[i]));
  }
  for (var i = 0; i < memoryTasks.length; i++) {
    Meteor.call("tasks.insert", createMemory(memoryTasks[i]));
  }
}
