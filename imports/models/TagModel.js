import { Meteor } from "meteor/meteor";

export const TagModel = {
  getNewModel: function() {
    var model = {
      init: function(student, task) {
        this._id = task._id;
        this.taskId = task.taskId;
        this.visQueue = [];
        this.solution = [];
      },

      run: function(solution) {
        this.reset();
        for (var i = 0; i < solution.length; i++) {
          var checkElem = solution[i].id.split("_")[0];
          if (solution[i].children.length > 0) {
            if (!(solution[i].children[0].id == checkElem)) {
              this.visQueue.push(["fail", checkElem]);
              return false;
            } else {
              this.solution.push(checkElem);
            }
          } else {
            this.visQueue.push(["fail", checkElem]);
            return false;
          }
        }
        if (!this.visQueue.includes("fail")) {
          this.visQueue.push(["won", null]);
          return true;
        }
      },

      reset: function() {
        this.visQueue = [];
        this.solution = [];
      }
    };
    return model;
  }
};
