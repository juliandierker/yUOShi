import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";
Meteor.methods({
  "package.learningObjectives": async (packageId) => {
    const backendAdapter = createBackendAdapter();
    return await backendAdapter.learningObjectiveAdapter
      .getLearningObjectivesForPackage(packageId)
      .getWrapped()
      .toArray();
  },
  "learningObjectives.getStations": async (learningObjectiveId) => {
    const backendAdapter = createBackendAdapter();

    return await backendAdapter.stationAdapter
      .getStationsForLearningObjective(learningObjectiveId)
      .getWrapped()
      .toArray();
  }
});
