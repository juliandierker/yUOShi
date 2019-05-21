import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import MaslowView from "./MaslowView";
import { DragdropModel } from "../../../models/DragdropModel";
import Swal from "sweetalert2";

export default class DragAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.model = DragdropModel.getNewModel();
    this.model.init(props.student, props.activeTask);
  }
  renderView() {
    if (this.props.activeTask) {
      //TODO render view dynamicly
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: this.props.activeTask,
        courses: this.props.courses
      };
      if (this.props.activeTask.taskId == "Maslow") {
        return <MaslowView {...taskProps} />;
      }
    }
  }
  shouldComponentUpdate(nextProps) {
    console.log("entered UUUU");
    if (this.props.activeTask.taskId !== nextProps.activeTask.taskId) {
      this.model = DragDropModel.getNewModel();
      console.log(nextProps);
      this.model.init(nextProps.student._id, nextProps.activeTask);
      return true;
    } else {
      return false;
    }
  }
  solutionPrepare() {
    console.log("entered prepare");
    this.model.run(document.getElementsByClassName("zone"));
    var visQueue = this.model.visQueue;
    for (var i = 0; i < visQueue.length; i++) {
      if (visQueue[i][0] == "fail") {
        Swal.fire({
          position: "top-end",
          type: "warning",
          title: visQueue[i][1],
          timer: 1500
        });
        return false;
      }
    }
    this.submit();
  }
  submit() {
    console.log("entered submit");
    if (this.props.activeTask.type === "drag") {
      var meteorMethod =
        "solutionHandler.submit" + this.props.activeTask.filePrefix;
      var solution = this.model.solution;
    }
    Meteor.call(
      meteorMethod,
      solution,
      this.props.student._id,
      this.props.activeTask,
      (err, res) => {
        if (!res) {
          Swal.fire({
            position: "top-end",
            type: "warning",
            title: "Nicht ganz...",
            timer: 1500
          });
        } else {
          Swal.fire({
            position: "top-end",
            type: "success",
            title: "Geschafft",
            timer: 1500
          });
        }
      }
    );
  }
  render() {
    return (
      <div>
        {this.renderView()}
        <Button onClick={() => this.solutionPrepare()}>Aufgabe lösen</Button>
      </div>
    );
  }
}

DragAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
