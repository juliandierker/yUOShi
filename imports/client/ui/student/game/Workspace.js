import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import DragAnimationTemplate from "../../tasks/DragAnimationTemplate";
import MaslowView from "../../tasks/MaslowView";
import equals from "fast-deep-equal";
import { Button, Icon, Modal, Header, Image } from "semantic-ui-react";
import { Tasks } from "../../../../api/tasks";

/**
 * This component should control the progress of a student in a task-package
 * Workspace -> renders Package-values -> renders tasks or trainings
 *
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
      packageStarted: null
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
  // Check the clicked package and the progress in the package
  componentDidMount() {
    // if (!this.state.activeTask) {
    //   this.setState({
    //     activeTask: this.props.student.tasks[0]
    //   });
    // }
    this.checkProgress();
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
  componentDidUpdate(prevProps, prevState) {
    var prevTask = prevState.activeTask;
    var curTaskNum = this.props.student.tasks.length;
    // solved last task
    if (prevTask && curTaskNum === 0 && !this.state.showSolution) {
      this.setState({ activeTask: false });
    } else if (!prevTask && curTaskNum > 0) {
      var activeTask = this.getActiveTask();

      //TODO setState correctly
      if (!this.state.activeTask) {
        var tasks = this.props.student.tasks;
        if (this.props.student.tasks.length > prevProps.student.tasks.length) {
          this.setState({
            activeTask: tasks[tasks.length - 1]
          });
        }
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

    if (student) {
      if (this.props.student.lastActiveTaskId) {
        for (var i in student.tasks) {
          if (student.tasks[i]._id == student.lastActiveTaskId)
            return student.tasks[i];
        }
      } else {
        return student.tasks[student.tasks.length - 1];
      }
    }
  }
  taskSwitch() {
    if (this.state.activeTask) {
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: this.state.activeTask,
        courses: this.props.courses,
        trainings: this.props.trainings
      };

      if (this.state.activeTask.type == "drag") {
        return <DragAnimationTemplate {...taskProps} />;
      }
    }
  }
  renderModal() {
    const { packageStarted, dimmer } = this.state;
    return (
      <div>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your
                e-mail address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Nope
            </Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yep, that's me"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
  render() {
    const { activeTask, packageStarted } = this.state;
    return (
      <div className="workspace__container">
        {this.renderModal()}
        {this.taskSwitch()}
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
