import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";

import DragAnimationTemplate from "../../tasks/DragAnimationTemplate";
import TrainingAnimationTemplate from "../../tasks/TrainingAnimationTemplate";
import TagAnimationTemplate from "../../tasks/TagAnimationTemplate";
import ClozeAnimationTemplate from "../../tasks/ClozeAnimationTemplate";

import equals from "fast-deep-equal";
import { Button, Icon, Header, Image, Grid } from "semantic-ui-react";
import { Tasks } from "../../../../api/tasks";
import { Students } from "../../../../api/students";

import TaskProgress from "../taskProgress/TaskProgress";

/**
 * This component should control the progress of a student in a task-package
 * Workspace -> renders Package-values -> renders tasks or trainings
 */
export default class Workspace extends React.Component {
  constructor(props) {
    super(props);
    this.getCurrentTasksList();

    var activeTask = this.getActiveTask();
    this.state = {
      activeTask,
      showSolution: false,
      showCurrentTasks: true,
      packageStarted: null,
      currentSubPackageIndex: 0
    };
    this.handler = ev => {
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
  show = dimmer => () => this.setState({ dimmer, packageStarted: true });
  close = () => this.setState({ packageStarted: false });

  //TODO Check the clicked package and the progress in the package
  componentDidMount() {
    let currentTask = this.props.student.tasks;
    let regex = "\\d+";
    if (currentTask && currentTask.parentId) {
      let currentSubPackageIndex = currentTask.parentId.match(regex);
      this.setState({ currentSubPackageIndex: currentSubPackageIndex });
    }
    // this.checkProgress();
  }
  checkProgress() {
    if (!this.state.currentPackage) {
      if (!this.state.packageStarted) {
        this.show();
        this.setState({ currentPackage: this.props.student.currentPackage });
      } else {
        this.setState({ currentPackage: this.props.student.currentPackage });
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {}
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
    if (this.props.student) {
      var currentTaskIds = this.props.student.tasks.map(currentTask => {
        return currentTask.taskId;
      });
      var taskList = Tasks.find({ taskId: { $in: currentTaskIds } }).fetch();
      this.currentTasks = taskList;
    }
  }
  getActiveTask() {
    var student = this.props.student;

    if (student && this.props.student.lastActiveTaskId) {
      for (var i in student.tasks) {
        if (student.tasks[i]._id == student.lastActiveTaskId)
          return student.tasks[i];
      }
    } else {
      return student.tasks[student.tasks.length - 1];
    }
  }

  taskSwitch() {
    var student = this.props.student;
    var taskPackage = student.currentPackage;
    var currentTasks = student.tasks;
    var currentTraining = student.currentTraining;
    var solvedTraining = student.solvedTraining;
    //TODO check if we finished all tasks of a package
    //first training not initialized
    if (
      taskPackage.length > 0 &&
      solvedTraining.length == 0 &&
      currentTraining.length == 0 &&
      currentTasks.length == 0
    ) {
      const trainings = this.props.trainings;
      var currentPackage = taskPackage[0];
      for (var i in trainings) {
        let name = currentPackage.name;
        if (currentPackage.name == trainings[i][name][0].name) {
          var trainingObj = trainings[i][name];
        }
      }
      if (trainingObj) {
        Meteor.call(
          "students.initTraining",
          trainingObj,
          this.props.student._id
        );
      }
      //first training was initialized
    } else if (
      currentTraining.length > 0 &&
      currentTasks.length == 0 &&
      student.solvedTasks.length == 0
    ) {
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: this.state.activeTask,
        courses: this.props.courses,
        trainings: this.props.trainings
      };
      return <TrainingAnimationTemplate {...taskProps} />;
    } else if (
      currentTraining.length == 0 &&
      student.tasks.length == 0 &&
      student.solvedTraining.length > 0
    ) {
      this.props.handleNextTask();
    }
    //tasks are activated after intro trainings
    else {
      var propTask = student.tasks[student.tasks.length - 1];
      if (
        this.state.activeTask &&
        this.state.activeTask.taskId == propTask.taskId
      ) {
        let taskProps = {
          student: this.props.student,
          tasks: this.props.tasks,
          activeTask: this.state.activeTask,
          courses: this.props.courses,
          trainings: this.props.trainings
        };
        if (this.state.activeTask && this.state.activeTask.type == "drag") {
          return <DragAnimationTemplate {...taskProps} />;
        } else if (
          this.state.activeTask &&
          this.state.activeTask.type == "tag"
        ) {
          return <TagAnimationTemplate {...taskProps} />;
        } else if (
          this.state.activeTask &&
          this.state.activeTask.type == "cloze"
        ) {
          return <ClozeAnimationTemplate {...taskProps} />;
        }
      } else {
        let taskProps = {
          student: this.props.student,
          tasks: this.props.tasks,
          activeTask: student.tasks[student.tasks.length - 1],
          courses: this.props.courses,
          trainings: this.props.trainings
        };
        this.setState({
          activeTask: student.tasks[student.tasks.length - 1]
        });
        if (student.tasks[student.tasks.length - 1].type == "drag") {
          return <DragAnimationTemplate {...taskProps} />;
        }
      }
    }
    //package is completed
  }
  renderTraining() {
    const { packageStarted, dimmer } = this.state;
  }

  isTaskSolved(t) {
    const solvedTasks = this.props.student.solvedTasks.filter(
      task => t._id == task._id
    );

    if (!solvedTasks || solvedTasks.length == 0) return false;
    return true;
  }

  renderSolBtn() {
    return <Button> Aufgabe lösen </Button>;
  }

  getActiveSubpackage() {
    let pId;
    if (this.props.student.tasks[0]) {
      pId = this.props.student.tasks[0].parentId;
    } else if (this.props.student.currentTraining[0]) {
      pId = this.props.student.currentTraining[0].parentId;
    } else {
      return;
    }
    return this.props.student.currentPackage[0].content.filter(
      subpackage =>
        this.props.student.currentPackage[0].name + subpackage.sequenceId ===
        pId
    )[0];
  }

  render() {
    let activesubpackage = this.getActiveSubpackage();
    return (
      <div
        style={{
          display: "flex"
        }}
      >
        <TaskProgress
          student={this.props.student}
          currentPackage={this.props.student.currentPackage[0]}
          trainings={this.props.trainings}
          activeSubpackage={activesubpackage}
        />
        <div
          className="workspace__container"
          style={{ marginLeft: "16px", marginTop: "60px" }}
        >
          {this.taskSwitch()}
        </div>
      </div>
    );
  }
}

Workspace.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
