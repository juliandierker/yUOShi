import { Meteor } from "meteor/meteor";
import createBackendAdapter from "./backendAdapter";
import "../../imports/api/taskTypes";

Meteor.methods({
  "tasks.getTask": async (taskId) => {
    const backendAdapter = createBackendAdapter();
    const task = await backendAdapter.taskAdapter.getTask(taskId, true);

    if (!task) {
      return;
    }
    return task.getStatic();
  },

  "tasks.nextTaskForStation": async (stationId) => {
    const backendAdapter = createBackendAdapter();
    const task = await backendAdapter.taskAdapter.getNextTask(stationId);

    if (!task) {
      return;
    }
    return task.getStatic();
  },

  "tasks.prevTaskForStation": async (station_id, current_task_id) => {
    const backendAdapter = createBackendAdapter();
    const task = await backendAdapter.taskAdapter.getPrevTask(station_id, current_task_id);
    if (!task) {
      return;
    }

    return task.getStatic();
  },

  "tasks.checkQuest": async (quest_id, answers) => {
    const backendAdapter = createBackendAdapter();
    return backendAdapter.userTaskSolutionAdapter.saveQuestSolution(quest_id, answers);
  },
  "tasks.checkDrag": async (task_id, answers) => {
    const backendAdapter = createBackendAdapter();
    const task = await backendAdapter.taskAdapter.getTask(task_id);
    if (!task) {
      return;
    }

    return backendAdapter.userTaskSolutionAdapter.saveCompleteTask(
      task_id,
      task.createAnswer(answers)
    );
  },
  "tasks.checkTag": async (task_id, answers) => {
    const backendAdapter = createBackendAdapter();
    const task = await backendAdapter.taskAdapter.getTask(task_id);
    if (!task) {
      return;
    }

    return backendAdapter.userTaskSolutionAdapter.saveCompleteTask(
      task_id,
      task.createAnswer(answers)
    );
  },
  "tasks.checkCloze": async (task_id, answers) => {
    const backendAdapter = createBackendAdapter();
    const task = await backendAdapter.taskAdapter.getTask(task_id);
    if (!task) {
      return;
    }

    // handle it this way - ejson can't handle Maps :(
    answers = answers.map((answer) => {
      return {
        id: answer.id,
        inputs: new Map(Object.entries(answer.inputs))
      };
    });

    return backendAdapter.userTaskSolutionAdapter.saveCompleteTask(
      task_id,
      task.createAnswer(answers)
    );
  },
  "tasks.checkAnswer": async (task_id, answers) => {
    const backendAdapter = createBackendAdapter();
    const task = await backendAdapter.taskAdapter.getTask(task_id);
    if (!task) {
      return;
    }

    return backendAdapter.userTaskSolutionAdapter.saveCompleteTask(
      task_id,
      task.createAnswer(answers)
    );
  },
  "tasks.getSolution": (quest_solution_id) => {
    const backendAdapter = createBackendAdapter();
    return backendAdapter.userTaskSolutionAdapter.getSampleSolution(quest_solution_id);
  },
  "tasks.getCurrentTaskPosition": (task_id, solutionId) => {
    const backendAdapter = createBackendAdapter();
    return backendAdapter.userTaskSolutionAdapter.getCurrentTaskPosition(task_id, solutionId);
  }
});
