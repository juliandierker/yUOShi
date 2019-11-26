import { Meteor } from "meteor/meteor";

export const DragdropModel = {
  getNewModel: function() {
    var model = {
      init: function(student, task) {
        this._id = task._id;
        this.task = task;
        this.taskId = task.taskId;
        this.visQueue = [];
        this.correctArr = [];
        this.solution = [];
      },
      checkFormular: function(solution) {
        this.visQueue.push("won");
        return true;
      },
      checkSolution: function(solution) {
        if (this.task.formular) return this.checkFormular();
        solution.children.map((child, index) => {
          if (this.task.multipleColumns) {
            if (solution.categorie != child.solution) {
              this.visQueue.push("fail", child);
            }
          } else {
            if (child.solution != this.task.solArray[index]) {
              this.visQueue.push("fail", child);
            }
          }
        });
        if (!this.visQueue.includes("fail")) {
          this.visQueue.push("won");
          return true;
        } else {
          console.log("falsly entered");
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
