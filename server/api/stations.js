import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";
Meteor.methods({
  "stations.getStation": async (stationId) => {
    const user = Meteor.user();
    const backendAdapter = createBackendAdapter();
    //TODO BA: getStation
    return backendAdapter.stationAdapter.getStation(stationId);
  }
});
