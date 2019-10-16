import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { DragdropModel } from "../../../models/DragdropModel";
import DragdropTemplate from "./DragdropTemplate";
import Swal from "sweetalert2";
import { Container, Draggable } from "react-smooth-dnd";

import MaslowView from "./MaslowView";
import MotiveView from "./MotiveView_old";

export default class DragAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.model = DragdropModel.getNewModel();
    this.model.init(props.student, props.activeTask);
    this.state = { showSolution: false, childKeyIteration: 0 };
    this.viewScene = React.createRef();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.activeTask.taskId !== nextProps.activeTask.taskId) {
      this.model = DragDropModel.getNewModel();
      this.model.init(nextProps.student._id, nextProps.activeTask);
      return true;
    } else {
      return false;
    }
  }
  solutionPrepare() {
    const userSol = this.viewScene.current.state.scene.children;

    if (this.state.showSolution) {
      let correctAnswers = 0;
      for (let i = 0; i < this.model.correctArr.length; i++) {
        for (let j = 0; j < this.model.correctArr[i].length; j++) {
          if (this.model.correctArr[i][j]) {
            correctAnswers++;
          }
        }
      }
      let solvedPercentage = 1;
      if (this.props.activeTask.taskId == "Motive") {
        solvedPercentage =
          correctAnswers / this.props.activeTask.statements[0].length;
      } else if (this.props.activeTask.taskId == "Maslow") {
        solvedPercentage = correctAnswers / 5;
      }

      var meteorMethod =
        "solutionHandler.submit" + this.props.activeTask.filePrefix;
      Meteor.call(
        meteorMethod,
        null,
        this.props.student._id,
        this.props.activeTask,
        solvedPercentage
      );
      return;
    }
    var sol = this.model.run(userSol);
    var visQueue = this.model.visQueue;
    console.log(visQueue);
    if (visQueue.includes("fail")) {
      Swal.fire({
        position: "top-end",
        type: "warning",
        title: "Nicht ganz...",
        text:
          "Es sind nicht alle Felder richtg. Willst du es nochmal versuchen, oder möchtest du dir die Lösung anschauen?",
        confirmButtonText: "Lösung zeigen",
        cancelButtonText: "Nochmal versuchen",
        cancelButtonColor: "#3085d6",
        showCancelButton: true
      }).then(result => {
        if (result.value) {
          this.setState({ showSolution: true });
          this.forceUpdate();
        } else {
          this.setState({
            showSolution: false,
            childKeyIteration: this.state.childKeyIteration === 0 ? 1 : 0
          });
          this.forceUpdate();
        }
      });
      return false;
    }
    if (sol) this.submit(userSol);
  }

  submit(userSol) {
    if (this.props.activeTask.type === "drag") {
      var meteorMethod =
        "solutionHandler.submit" + this.props.activeTask.filePrefix;
    }
    Meteor.call(
      meteorMethod,
      userSol,
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
    let taskProps = {
      student: this.props.student,
      tasks: this.props.tasks,
      activeTask: this.props.activeTask,
      courses: this.props.courses,
      model: this.model
    };
    let buttonText = this.state.showSolution ? "Weiter" : "Aufgabe lösen";

    return (
      <div>
        <div
          style={{ overflowY: "auto", maxHeight: "80vh" }}
          className="dragAnimation__"
        >
          <DragdropTemplate
            {...taskProps}
            showSolution={this.state.showSolution}
            model={this.model}
            ref={this.viewScene}
            scale={null}
            key={"draganimationcomponentMotive" + this.state.childKeyIteration}
          />{" "}
        </div>
        <Button
          style={{ marginTop: "10px", marginRight: "10px", float: "right" }}
          onClick={() => this.solutionPrepare()}
        >
          {buttonText}
        </Button>
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
