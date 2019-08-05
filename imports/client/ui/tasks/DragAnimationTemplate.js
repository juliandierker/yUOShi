import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { DragdropModel } from "../../../models/DragdropModel";

import Swal from "sweetalert2";

import MaslowView from "./MaslowView";
import MotiveView from "./MotiveView";

export default class DragAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.model = DragdropModel.getNewModel();
    this.model.init(props.student, props.activeTask);
    this.state = { showSolution: false, childKeyIteration: 0 };
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
        console.log(correctAnswers);
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

    this.model.run(
      document.getElementsByClassName(this.props.activeTask.taskId)
    );
    var visQueue = this.model.visQueue;
    for (var i = 0; i < visQueue.length; i++) {
      if (visQueue[i][0] == "fail") {
        Swal.fire({
          position: "top-end",
          type: "warning",
          title: "Nicht ganz...",
          text:
            "Es sind nicht alle Felder richtg. Willst du es nochmal versuchen, oder willst du dir die Lösung anschauen?",
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
    }
    this.submit();
  }

  submit() {
    if (this.props.activeTask.type === "drag") {
      var meteorMethod =
        "solutionHandler.submit" + this.props.activeTask.filePrefix;
      var solution = this.model.solution;
    }
    console.log(solution);
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
    let renderable;
    if (this.props.activeTask) {
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: this.props.activeTask,
        courses: this.props.courses,
        model: this.model
      };
      if (this.props.activeTask.taskId == "Maslow") {
        renderable = (
          <MaslowView
            {...taskProps}
            showSolution={this.state.showSolution}
            key={"draganimationcomponentMaslow" + this.state.childKeyIteration}
          />
        );
      } else if (this.props.activeTask.taskId == "Motive") {
        renderable = (
          <MotiveView
            {...taskProps}
            showSolution={this.state.showSolution}
            key={"draganimationcomponentMotive" + this.state.childKeyIteration}
          />
        );
      }
    }

    let buttonText = this.state.showSolution ? "Weiter" : "Aufgabe lösen";
    return (
      <div>
        <div className="dragAnimation__wrapper">{renderable}</div>
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
