import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";
import "../../imports/api/taskTypes"

Meteor.methods({
    "tasks.nextTaskForPackage": async packageId => {
        const backendAdapter = createBackendAdapter()
        const task = await backendAdapter.taskAdapter.getNextTask(packageId)

        return task.getStatic()
    },
    "tasks.checkQuestMulti": async (quest_id, answers) => {
        const backendAdapter = createBackendAdapter()
        return backendAdapter.userTaskSolutionAdapter.saveQuestSolution(quest_id, answers)
    },
    "tasks.getSolution": quest_solution_id => {
        const backendAdapter = createBackendAdapter()
        return backendAdapter.userTaskSolutionAdapter.getSampleSolution(quest_solution_id)
    },
    "tasks.getCurrentTaskPosition": (task_id, solutionId) => {
        const backendAdapter = createBackendAdapter()
        return backendAdapter.userTaskSolutionAdapter.getCurrentTaskPosition(task_id, solutionId)
    }
})
