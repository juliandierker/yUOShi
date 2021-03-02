import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";
Meteor.methods({
  "stations.getStation": async (stationId) => {
    const user = Meteor.user();
    const backendAdapter = createBackendAdapter();
    return backendAdapter.stationAdapter.getStation(stationId);
  },
  "stations.getTasks": async (stationId) => {
    const user = Meteor.user();
    const backendAdapter = createBackendAdapter();
    return backendAdapter.taskAdapter.getTasksForStation(stationId).toArrayLazy();
  }
});
