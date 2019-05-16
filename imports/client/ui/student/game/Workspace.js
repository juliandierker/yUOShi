import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";

import TaskAnimationTemplate from "../../tasks/TaskAnimationTemplate";
import MaslowView from "../../tasks/MaslowView";
import equals from "fast-deep-equal";

import { Tasks } from "../../../../api/tasks";
export default class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.getCurrentTasksList();

    var activeTask = this.getActiveTask();

    this.state = {
      activeTask,
      showSolution: false,
      showCurrentTasks: true
    };
    this.handler = ev => {
      // TODO saveTask on close
      if (this.state.activeTask) {
        Meteor.call(
          "student.setLastActiveTaskId",
          this.state.activeTask._id,
          this.props.student._id
        );
      }
    };
    window.addEventListener("beforeunload", this.handler);
  }
  componentDidUpdate(prevProps, prevState) {
    var prevTask = prevState.activeTask;
    var curTaskNum = this.props.student.tasks.length;
    // solved last task
    if (prevTask && curTaskNum === 0 && !this.state.showSolution) {
      this.setState({ activeTask: false });
    } else if (!prevTask && curTaskNum > 0) {
      var activeTask = this.currentTasks[this.currentTasks.length - 1];
      var currentTaskState = this.getActiveTask();

      //TODO setState correctly
      if (this.state.activeTask == null) {
        this.setState({
          activeTask,
          courses: this.props.courses,
          tasks: this.props.tasks
        });
      }
    } else {
      // no tasks change or received task without submitting last one
      if (this.state.activeTask) {
        var currentTaskState = this.getActiveTask();
        var taskStateChange = !equals(
          prevState.currentTaskState,
          currentTaskState
        );
      }
    }
  }
  componentWillUnmount() {
    if (this.state.activeTask) {
      Meteor.call(
        "students.setLastActiveTaskId",
        this.state.activeTask._id,
        this.props.student._id
      );
    }
    window.removeEventListener("beforeunload", this.handler);
  }
  getCurrentTasksList() {
    var currentTaskIds = this.props.student.tasks.map(currentTask => {
      return currentTask.taskId;
    });
    var taskList = Tasks.find({ taskId: { $in: currentTaskIds } }).fetch();
    this.currentTasks = taskList;
  }
  getActiveTask() {
    var student = this.props.student;

    if (this.props.student.lastActiveTaskId) {
      for (var i in student.tasks) {
        if (student.tasks[i]._id == student.lastActiveTaskId)
          return student.task[i];
      }
    } else {
      return student.tasks[student.tasks.length - 1];
    }
  }
  taskSwitch() {
    if (this.state.activeTask) {
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: this.state.activeTask,
        courses: this.props.courses
      };

      if (this.state.activeTask.type == "drag") {
        return <TaskAnimationTemplate {...taskProps} />;
      }
    }
  }
  render() {
    const { activeTask } = this.state;
    return <div className="workspace__container">{this.taskSwitch()}</div>;
  }
}

Workspace.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
