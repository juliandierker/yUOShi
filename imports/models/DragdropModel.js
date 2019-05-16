import { Meteor } from "meteor/meteor";

export const DragdropModel = {
  getNewModel: function() {
    var model = {
      init: function(student, task) {
        this.task._id = task._id;
        this.task.taskId = task.taskId;
      },

      run: function() {
        //TODO
      },
      reset: function() {
        //TODO
      }
    };
    return model;
  }
};
