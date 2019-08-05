import { Meteor } from "meteor/meteor";

export const ClozeModel = {
  getNewModel: function() {
    let model = {
      init: function(student, task) {
        this._id = task._id;
        this.taskId = task.taskId;
        this.solution = [];
        this.visQueue = [];
      },

      run: function(solution) {
        // !!!!!!!! Samplesolution not available
        // if (this.sampleSolution.length == solution.length) {
        //   if (!this.visQueue.includes("fail")) {
        //     this.visQueue.push(["won", null]);
        //   }
        // }
        // return this.visQueue;
      },
      reset: function() {}
    };
    return model;
  }
};
