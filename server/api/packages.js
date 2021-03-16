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
  "package.getStations": async (packageId) => {
    const backendAdapter = createBackendAdapter();
    let stations = await backendAdapter.stationAdapter
      .getStationsForPackage(packageId)
      .getWrapped()
      .toArray();
    for (let station of stations) {
      await station.tasks.toArray();
    }

    return stations;
  }
});
