import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const Package = new Mongo.Collection("package");

const trainingSchema = new SimpleSchema({
  name: {
    type: String
  },

  tasks: {
    type: Array
  },
  "tasks.$": {
    type: String
  },
  trainings: {
    type: Array
  },
  "trainings.$": {
    type: String
  }
}).newContext();

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
