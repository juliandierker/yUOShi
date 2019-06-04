import { Meteor } from "meteor/meteor";
import { Tasks } from "../../api/training";

function createDragTask(trainingSpecs) {
  trainingSpecs["name"] = trainingSpecs["name"];
  trainingSpecs["package"] = trainingSpecs["package"];
  trainingSpecs["imageVideo"] = "link";
  trainingSpecs["discount"] = false;
  trainingSpecs["format"] = "pdf";

  // taskSpecs["taskurl"] =
  //   "/Tasks/Maze/TaskPictures/" + taskSpecs["taskId"] + ".jpeg";
  return trainingSpecs;
}

export function addTraining() {
  var dragTasks = JSON.parse(Assets.getText("training/training.json"))[
    "training"
  ];

  for (var i = 0; i < dragTasks.length; i++) {
    Meteor.call("training.insert", createDragTask(dragTasks[i]));
  }
}
