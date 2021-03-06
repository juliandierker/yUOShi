import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Tokens = new Mongo.Collection("tokens");

if (Meteor.isServer) {
  Meteor.publish("tokenByUser", function() {
    return Tokens.find({ userId: Meteor.userId() });
  });
  Meteor.methods({
    "tokens.insert": function(userId, token) {
      Tokens.insert({
        userId: userId,
        token: token
      });
    }
  });
}
