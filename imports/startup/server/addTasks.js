import { Meteor } from "meteor/meteor";
import { Tasks } from "../../api/tasks";

function createDragTask(taskSpecs) {
  console.log("fired2");
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
  console.log("Fired");
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

export function addTasks() {
  var dragTasks = JSON.parse(Assets.getText("tasks/drags.json"))["tasks"];
  var tagTasks = JSON.parse(Assets.getText("tasks/tags.json"))["tasks"];
  for (var i = 0; i < dragTasks.length; i++) {
    Meteor.call("tasks.insert", createDragTask(dragTasks[i]));
  }
  for (var i = 0; i < tagTasks.length; i++) {
    console.log(tagTasks);
    Meteor.call("tasks.insert", createTagTask(tagTasks[i]));
  }
}
