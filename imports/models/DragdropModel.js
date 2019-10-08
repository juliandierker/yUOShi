import { Meteor } from "meteor/meteor";

export const DragdropModel = {
  getNewModel: function() {
    var model = {
      init: function(student, task) {
        this._id = task._id;
        this.taskId = task.taskId;
        this.visQueue = [];
        this.correctArr = [];
        this.solution = [];
      },
      checkSolution: function(solution) {
        solution.children.map(child => {
          if (solution.solution != child.solution) {
            this.visQueue.push("fail", child);
          }
        });
        if (!this.visQueue.includes("fail")) {
          this.visQueue.push("won", null);
          return true;
        } else {
          return false;
        }
      },
      run: function(solutions) {
        this.reset();
        this.solution = solutions;
        return solutions.map(solution => {
          return this.checkSolution(solution);
        });
      },
      reset: function() {
        this.visQueue = [];
        this.solution = [];
        this.correctArr = [];
      }
    };
    return model;
  }
};
