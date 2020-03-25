import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const Package = new Mongo.Collection("package");

if (Meteor.isServer) {
  Meteor.publish("package", () => {
    return Package.find({});
  });
}

Meteor.methods({
  "package.insert"(training) {
    Package.insert(training);
  }
});
