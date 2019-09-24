import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import Swal from "sweetalert2";
import DragAnimationTemplate from "../../tasks/DragAnimationTemplate";
import TrainingAnimationTemplate from "../../tasks/TrainingAnimationTemplate";
import TagAnimationTemplate from "../../tasks/TagAnimationTemplate";
import ClozeAnimationTemplate from "../../tasks/ClozeAnimationTemplate";
import MemoryAnimationTemplate from "../../tasks/MemoryAnimationTemplate";
import MultiChoiceAnimationTemplate from "../../tasks/MultiChoiceAnimationTemplate";
import KeywordList from "../../tasks/KeywordList";

import equals from "fast-deep-equal";
import { Tasks } from "../../../../api/tasks";

import TaskProgress from "../taskProgress/TaskProgress";
import { Segment, Button, Grid, Icon } from "semantic-ui-react";

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
      currentSubPackageIndex: 0,
      currentSequenceId: 0,
      hasActiveTaskOrTraining: false,
      finishedKeywords: []
    };
    this.tagInstance = React.createRef();
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

    this.handleNextTaskButtonClick = this.handleNextTaskButtonClick.bind(this);
    this.handlePreviousTaskButtonClick = this.handlePreviousTaskButtonClick.bind(
      this
    );
  }
  show = dimmer => () => this.setState({ dimmer, packageStarted: true });
  close = () => this.setState({ packageStarted: false });

  // TODO: Check the clicked package and the progress in the package
  componentDidMount() {
    let currentTask = this.props.student.tasks;
    let regex = "\\d+";
    if (currentTask && currentTask.parentId) {
      let currentSubPackageIndex = currentTask.parentId.match(regex);
      this.setState({ currentSubPackageIndex: currentSubPackageIndex });
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

  checkPackageProgress() {
    console.log("entered");
    var check = this.props.student.solvedTraining.filter(elem => {
      console.log(elem);
      console.log(this.props.student.currentPackage[0]);
      return elem.package == this.props.student.currentPackage[0].name;
    });
    console.log(check);

    return check.length >= 2;
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
    let student = this.props.student;
    var cTask = null;
    if (this.state.currentSequenceId !== student.currentSequenceId) {
      this.props.handleNextTask();
      for (var i in this.props.tasks) {
        if (this.props.tasks[i].sequenceId == student.currentSequenceId) {
          cTask = this.props.tasks[i];
        }
      }
      this.props.tasks.map(task => {
        if (task.sequenceId == student.currentSequenceId) {
          var cTask = task;
        }
      });
      this.setState({
        currentSequenceId: student.currentSequenceId,
        activeTask: cTask
      });

      return;
    }

    let packageTrainings = this.props.trainings[0][
      student.currentPackage[0].name
    ];
    // Get current Training
    let currentTask = packageTrainings.find(elem => {
      return elem.sequenceId === student.currentSequenceId;
    });
    // Get current Task
    if (!currentTask) {
      currentTask = this.props.tasks.find(elem => {
        return elem.sequenceId === student.currentSequenceId;
      });
    }

    if (currentTask || this.props.student.currentTraining.length == 0) {
      if (currentTask && currentTask.isTask) {
        let taskProps = {
          student: this.props.student,
          tasks: this.props.tasks,
          activeTask: currentTask,
          courses: this.props.courses,
          trainings: this.props.trainings
        };

        switch (currentTask.type) {
          case "drag":
            return <DragAnimationTemplate {...taskProps} />;
          case "tag":
            return (
              <TagAnimationTemplate
                {...taskProps}
                externUpdate={this.externUpdate.bind(this)}
                finishedKeywords={this.state.finishedKeywords}
                ref={this.tagInstance}
              />
            );
          case "cloze":
            return <ClozeAnimationTemplate {...taskProps} />;
          case "memory":
            return <MemoryAnimationTemplate {...taskProps} />;
          case "multiChoice":
            return (
              <MultiChoiceAnimationTemplate
                {...taskProps}
                handleNextTask={this.props.handleNextTask}
              />
            );
        }
      } else if (this.checkPackageProgress()) {
        Swal.fire({
          position: "top-end",
          type: "success",
          title: "🎉 Du hast das Paket Motivation abgeschlossen. 🎉",

          timer: 2000
        }).then(result => {
          this.props.history.push("/student/classroom");
        });
      } else {
        let currentTaskArray = [];
        currentTaskArray.push(currentTask);
        Meteor.call("students.initTraining", currentTaskArray, student._id);

        student.currentTraining = currentTaskArray;

        let taskProps = {
          student: this.props.student,
          tasks: this.props.tasks,
          activeTask: currentTask,
          courses: this.props.courses,
          trainings: this.props.trainings
        };

        return <TrainingAnimationTemplate {...taskProps} />;
      }
    }
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

  handleNextTaskButtonClick() {
    Meteor.call("students.showNextTask", this.props.student);
  }

  handlePreviousTaskButtonClick() {
    if (this.props.student && this.props.student.currentSequenceId > 1) {
      Meteor.call("students.showPreviousTask", this.props.student);
    }
  }

  renderNavigationButtons() {
    var that = this;
    return (
      <div
        style={{
          position: "absolute",
          bottom: "35px",
          width: "50%",
          textAlign: "center",
          marginLeft: "25%",
          marginRight: "25%"
        }}
      >
        <Button
          id="prevTaskBtn"
          content="Vorherige Aufgabe"
          icon="left arrow"
          labelPosition="left"
          onClick={this.handlePreviousTaskButtonClick}
        />

        <Button
          id="nextTaskBtn"
          content="Nächste Aufgabe"
          icon="right arrow"
          labelPosition="right"
          onClick={this.handleNextTaskButtonClick}
        />
      </div>
    );
  }
  externUpdate(tagState) {
    this.setState({ finishedKeywords: tagState });
  }

  handleKWContinue() {
    this.tagInstance.current.solutionPrepare();
  }
  renderDescription() {
    let task = this.props.tasks.find(elem => {
      return elem.sequenceId === this.props.student.currentSequenceId;
    });
    if (!task) return;
    return <Segment id="workspaceDescription">{task.description}</Segment>;
  }
  renderWorkspaceGrid() {
    let activesubpackage = this.getActiveSubpackage();

    return (
      <Grid id="workspaceGrid">
        <Grid.Column
          width={3}
          style={{
            padding: "0rem"
          }}
        >
          {this.renderDescription()} {this.renderKeywordList()}
        </Grid.Column>
        <Grid.Column width={8}>
          <div className="workspace__container">{this.taskSwitch()}</div>
        </Grid.Column>
        <Grid.Column width={4}>
          <TaskProgress
            currentTask={this.state.activeTask}
            student={this.props.student}
            currentPackage={this.props.student.currentPackage[0]}
            trainings={this.props.trainings}
            activeSubpackage={activesubpackage}
          />
        </Grid.Column>
      </Grid>
    );
  }
  renderKeywordList() {
    if (this.state.activeTask && this.state.activeTask.type === "tag") {
      return (
        <KeywordList
          handleClick={this.handleKWContinue.bind(this)}
          keywords={this.state.activeTask.content[0].keywords}
          finishedKeywords={this.state.finishedKeywords}
        />
      );
    }
  }
  render() {
    return (
      <div
        style={{
          justfyContent: "center"
        }}
      >
        {this.renderWorkspaceGrid()}>{this.renderNavigationButtons()}
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
