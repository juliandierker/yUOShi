import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const PackagesCache = new Mongo.Collection("packagesCache");

if (Meteor.isServer) {
  Meteor.publish("cachedPackagesByUser", function() {
    return PackagesCache.find({ userId: this.userId });
  });
  Meteor.methods({
    "packagesCache.insert": function(packageId, taskId) {
      if (!Meteor.isServer) return;

      PackagesCache.insert({
        userId: this.userId,
        packageId,
        taskId
      });
    }
  });
}
