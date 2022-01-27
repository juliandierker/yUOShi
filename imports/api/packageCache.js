import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const PackagesCache = new Mongo.Collection("packagesCache");

function addOrUpdatePackageCache(packageId, position, taskId) {
  const packageCache = PackagesCache.findOne({ userId: Meteor.userId() });
  if (packageCache) {
    PackagesCache.update(packageCache._id, {
      $set: {
        position,
        taskId,
        packageId,
        userId: Meteor.userId()
      }
    });
  } else {
    PackagesCache.insert({
      position,
      taskId,
      packageId,
      userId: Meteor.userId()
    });
  }
}

if (Meteor.isServer) {
  Meteor.publish("cachedPackagesByUser", function() {
    return PackagesCache.find({ userId: this.userId });
  });
  Meteor.methods({
    "packagesCache.insert": function(packageId, position, taskId) {
      if (!Meteor.isServer) return;
      addOrUpdatePackageCache(packageId, position, taskId);
    }
  });
}
