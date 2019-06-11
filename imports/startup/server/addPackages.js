import { Meteor } from "meteor/meteor";
import { Tasks } from "../../api/tasks";
import { Training } from "../../api/training";
import { Packages } from "../../api/package";
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

export function addPackages() {
  var packages = JSON.parse(Assets.getText("packages/package.json"))[
    "packages"
  ];

  for (var i = 0; i < packages.length; i++) {
    Meteor.call("package.insert", createDragTask(packages[i]));
  }
}
