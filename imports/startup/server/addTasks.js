import { Meteor } from "meteor/meteor";
import { Tasks } from "../../api/tasks";

function createDragTask(taskSpecs) {
  taskSpecs["taskId"] = taskSpecs["taskId"];
  taskSpecs["type"] = "drag";
  taskSpecs["taskPackage"] = "Motivation";
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = "Drag";
  // taskSpecs["taskurl"] =
  //   "/Tasks/Maze/TaskPictures/" + taskSpecs["taskId"] + ".jpeg";
  return taskSpecs;
}

export function addTasks() {
  var dragTasks = JSON.parse(Assets.getText("tasks/drags.json"))["tasks"];

  for (var i = 0; i < dragTasks.length; i++) {
    Meteor.call("tasks.insert", createDragTask(dragTasks[i]));
  }
}
