import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";

Meteor.methods({
    "tasks.nextTaskForPackage": async (packageId) => {
        const backendAdapter = createBackendAdapter()
        const task = await backendAdapter.taskAdapter.getNextTask(packageId)

        return task.getStatic()
    }
})
