import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";
Meteor.methods({
  "package.getAll": async () => {
    const user = Meteor.user();
    const backendAdapter = createBackendAdapter();

    const courses = backendAdapter.courseAdapter.getCourses(user.services.studip.id);
    return courses.getWrapped().reduce(async (packages, course) => {
      return packages.concat(await course.packages.toArray());
    }, []);
  },
  "package.getStations": (packageId) => {
    const backendAdapter = createBackendAdapter();

    return backendAdapter.stationAdapter
      .getStationsForPackage(packageId)
      .getWrapped()
      .toArray();
  }
});
