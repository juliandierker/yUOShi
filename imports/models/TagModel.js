import { Meteor } from "meteor/meteor";

export const TagModel = {
  getNewModel: function() {
    var model = {
      init: function(student, task) {
        this._id = task._id;
        this.taskId = task.taskId;
        this.solution = [];
        this.visQueue = [];
        console.log(task.content[0].keywords);
        this.sampleSolution = task.content[0].keywords;
      },

      run: function(solution) {
        if (this.sampleSolution.length == solution.length) {
          if (!this.visQueue.includes("fail")) {
            this.visQueue.push(["won", null]);
          }
        }
        return this.visQueue;
      },

      reset: function() {
        this.solution = [];
        this.visQueue = [];
      }
    };
    return model;
  }
};
