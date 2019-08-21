import { Meteor } from "meteor/meteor";

export const MultiChoiceModel = {
  getNewModel: function() {
    let model = {
      init: function(student, task) {
        this._id = task._id;
        this.taskId = task.taskId;
        this.solution = [];
        this.visQueue = [];
      },

      run: function(solution) {},
      reset: function() {
        this.solution = null;
        this.visQueue = [];
      }
    };
    return model;
  }
};
