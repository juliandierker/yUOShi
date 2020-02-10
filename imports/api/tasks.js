/*
 Titel: Collection und Schema um einen Meteor.User einer Schüler-Collection
        zuzuweisen
 Autor: Julian
*/

import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import shortid from "shortid";

export const Tasks = new Mongo.Collection("tasks");

const taskSchema = new SimpleSchema({
  taskId: {
    type: String,
    optional: true
  },
  shortDescription: {
    type: String
  },
  type: {
    type: String
  },
  trainingId: {
    type: String,
    optional: true
  },
  package: {
    type: String
  },
  filePrefix: {
    type: String,
    optional: true
  },
  solution1: {
    type: Array,
    optional: true
  },
  solution2: {
    type: Array,
    optional: true
  },
  solution3: {
    type: Array,
    optional: true
  },
  solution4: {
    type: Array,
    optional: true
  },
  renderfiles: {
    type: Array,
    optional: true
  },

  "renderfiles.$": {
    type: String,
    optional: true
  },
  "solution1.$": {
    type: String,
    optional: true
  },
  "solution2.$": {
    type: String,
    optional: true
  },
  "solution3.$": {
    type: String,
    optional: true
  },
  "solution4.$": {
    type: String,
    optional: true
  },

  description: {
    type: String
  },
  instruction: {
    type: String
  },
  credits: {
    type: Number
  },

  minLevel: {
    type: Number
  },
  //empfohlenes Level
  level: {
    type: Number
  },
  taskurl: {
    type: String,
    optional: true
  },
  preKnowledge: {
    type: String,
    optional: true
  },
  //true wenn grading automatisch ist, false sonst
  autoGrading: {
    type: Boolean,
    optional: true
  }
}).newContext();

Meteor.methods({
  "tasks.insert"(task) {
    Tasks.insert(task);
  }
});

if (Meteor.isServer) {
  Meteor.publish("tasks", () => {
    return Tasks.find({});
  });
  Meteor.publish("tasksByIds", (taskIds) => {
    return Tasks.find({ taskId: { $in: taskIds } });
  });
  Meteor.publish("taskById", function(taskId) {
    return Tasks.find({ taskId: taskId });
  });

  Meteor.publish("tasksByPackage", (name) => {
    return Tasks.find({ taskPackage: name });
  });
}
