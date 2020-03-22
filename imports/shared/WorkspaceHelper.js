import { Meteor } from "meteor/meteor";
export const workspaceHelper = {
  handleNextTaskButtonClick: function(student) {
    Meteor.call("students.showNextTask", student);
  },
  handleNextTask: function(student) {
    if (
      !student.solvedTasks.find((elem) => {
        return elem.sequenceId.toString(student) === student.currentSequenceId.toString(student);
      })
    ) {
      Meteor.call(
        "students.getNextTask",
        student.currentPackage[0].name,
        student.currentSequenceId,
        student._id,
        (err, res) => {
          if (res) {
            return true;
          }
        }
      );
    }
  },

  handlePreviousTaskButtonClick: function(student) {
    if (student && student.currentSequenceId > 1) {
      Meteor.call("students.showPreviousTask", student);
    }
  },
  getActiveSubpackage: function(student) {
    let pId;
    if (student.tasks[0]) {
      pId = student.tasks[0].parentId;
    } else if (student.currentTraining[0]) {
      pId = student.currentTraining[0].parentId;
    } else {
      return;
    }
    return student.currentPackage[0].content.filter(
      (subpackage) => student.currentPackage[0].name + subpackage.sequenceId === pId
    )[0];
  },
  solvePackage: function(student) {
    Meteor.call(
      "students.solvePackage",
      student.currentPackage[0].name,
      student._id,
      (err, res) => {
        if (!err) return true;
      }
    );
  }
};
