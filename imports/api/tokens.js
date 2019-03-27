import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import { Accounts } from "meteor/accounts-base";

export const Tokens = new Mongo.Collection("tokens");

if (Meteor.isServer) {
  // user
  Meteor.publish("tokenByUser", function() {
    console.log(Meteor.userId());
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
