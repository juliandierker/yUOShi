import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";

Meteor.methods({
    "tasks.nextTaskForPackage": async (packageId) => {
        const backendAdapter = createBackendAdapter()
        const task = await backendAdapter.taskAdapter.getNextTask(packageId)

        for await (const statement of task.statements) {
            console.log(statement)
        }

        console.log("round 2")

        for await (const statement of task.statements) {
            console.log(statement)
        }

        return task.getStatic()
    }
})
