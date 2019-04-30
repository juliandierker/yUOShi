import { Meteor } from "meteor/meteor";
import { Tasks } from "../../api/tasks";

function createDragTask(taskSpecs) {
  taskSpecs["taskId"] = "Maze" + taskSpecs["taskId"];
  taskSpecs["type"] = "blockly";
  taskSpecs["taskPackage"] = "Autonomes Fahren";
  taskSpecs["autoGrading"] = true;
  taskSpecs["filePrefix"] = "Maze";
  taskSpecs["feedbackCounter"] = 0;
  taskSpecs["taskurl"] =
    "/Tasks/Maze/TaskPictures/" + taskSpecs["taskId"] + ".jpeg";
  taskSpecs["client"] = "cArtificial Intelligence";
  return taskSpecs;
}

export function addTasks() {
  var DragTasks = JSON.parse(Assets.getText("tasks/drags.json"))["tasks"];

  for (var i = 0; i < DragTasks.length; i++) {
    Meteor.call("tasks.insert", createDragTask(DragTasks[i]));
  }
}
