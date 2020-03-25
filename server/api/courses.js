import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";

import PromisifiedMeteor from "../../imports/api/promisified";

Meteor.methods({
    "courses.getTeacherCourses": async function() {
        //HTTP requests goes server-side only
        if (!Meteor.isServer) {
            return false
        }

        const backendAdapter = createBackendAdapter()

        const user = Meteor.user();

        if (!user) {
            return []
        }

        const studipUserId = user.services.studip.id;

        if (!studipUserId) {
            return []
        }

        const coursePaginator = backendAdapter.courseAdapter.getCourses(studipUserId);

        try {
            const memberships = [];

            for await (let course of coursePaginator) {
                if (await course.lecturers.contains((lecturer => lecturer.id === studipUserId))) {
                    memberships.push(course)
                }
            }

            return memberships
        } catch (e) {
            console.log(e)

            return []
        }
    },
    "courses.getStudentCourses": async function(currentCourses) {
        if (!Meteor.isServer) {
            return []
        }

        const user = Meteor.user()
        const backendAdapter = createBackendAdapter()

        if (!user) {
            return []
        }

        const studipUserId = user.services.studip.id

        if (!studipUserId) {
            return []
        }

        try {
            const courses = []
            const paginator = backendAdapter.courseAdapter.getCourses(studipUserId)

            for await (let course of paginator) {
                if (currentCourses.find(checkId => checkId === course.id)) {
                    courses.push(course.id)
                }

                await PromisifiedMeteor.call("students.addCourse", course.id, studipUserId)

                courses.push(course.id)
            }

            return PromisifiedMeteor.call(
                "students.getStartedCourses",
                courses,
            );
        } catch (e) {
            console.log(e);

            return [];
        }
    },
})
