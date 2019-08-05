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

      run: function(solution) {
        this.reset();

        for(let i = 0; i < solution.length; i++) {
          let correctArr = [];
          let checkElem = solution[i].id.split("_")[0];
            for(let j = 0; j < solution[i].children.length; j++) {
              if(solution[i].children[j].id == checkElem) {
                correctArr.push(true);
                if(this.solution.indexOf(checkElem) === -1) {
                  this.solution.push(checkElem)
                }
              } else {
                correctArr.push(false);
                this.visQueue.push(["fail", checkElem])
              }
            }
          this.correctArr.push(correctArr);
        }
        let allCorrect = true;
        for(let i = 0; i< this.correctArr.length; i++)  {
          if(this.correctArr[i].includes(false)) {
            allCorrect = false;
          }
        }

        if(allCorrect) {
          this.visQueue.push(["won", null]);
          return true;
        } else {
          return false;
        }
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
