import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

export const Training = new Mongo.Collection("training");

const trainingSchema = new SimpleSchema({
  name: {
    type: String
  },

  package: {
    type: String
  },

  imageVideo: {
    type: String,
    optional: true
  },
  discount: {
    type: Boolean
  },

  format: {
    type: String
  }
}).newContext();

if (Meteor.isServer) {
  Meteor.publish("training", () => {
    return Training.find({});
  });
}

Meteor.methods({
  "training.insert"(training) {
    Training.insert(training);
  }
});
