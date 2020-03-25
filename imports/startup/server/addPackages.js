import { Meteor } from "meteor/meteor";

export function addPackages() {
  var packages = JSON.parse(Assets.getText("packages/package.json"))["packages"];

  for (var i = 0; i < packages.length; i++) {
    Meteor.call("package.insert", packages[i]);
  }
}
