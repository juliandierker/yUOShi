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
  "package.getTasks": async (slug) => {
    const user = Meteor.user();
    const backendAdapter = createBackendAdapter();
    const courses = backendAdapter.courseAdapter.getCourses(user.services.studip.id);
    if (slug) {
      return courses
        .getWrapped()
        .map((course) => {
          return course.packages
            .map((packageItem) => {
              if (slug === packageItem.slug) {
                return packageItem.tasks
                  .map((item) => {
                    return item;
                  })
                  .toArray();
              }
            })
            .toArray();
        })
        .toArray();
    }
  }
});
