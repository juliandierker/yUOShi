import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

import Swal from "sweetalert2";
import { Container, Draggable } from "react-smooth-dnd";
import { Button } from "semantic-ui-react";

import { DragdropModel } from "../../../models/DragdropModel";
import DragdropTemplate from "./DragdropTemplate";

export default class DragAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.model = DragdropModel.getNewModel();
    this.model.init(props.student, props.activeTask);
    this.state = {
      showSolution: false,
      childKeyIteration: 0,
      viewScene: null,
      renderNextCard: false,
      finish: false,
      statements: this.shuffleStatements()
    };

    this.viewScene = React.createRef();
  }

  shuffleStatements() {
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    return shuffle(this.props.activeTask.statements);
  }

  componentDidMount() {
    this.setState({ viewScene: this.viewScene });
  }
  shouldComponentUpdate(nextProps, nextState) {
    let finishAfter = this.state.finish == false && nextState.renderNextCard == true;
    let finishBefore = this.state.renderNextCard == true && nextState.renderNextCard == false;

    if (finishAfter) return finishAfter;

    if (finishBefore) return finishBefore;
    if (this.props.activeTask.taskId !== nextProps.activeTask.taskId) {
      this.model = DragDropModel.getNewModel();
      this.model.init(nextProps.student._id, nextProps.activeTask);
      return true;
    } else {
      return false;
    }
  }

  learnCardPrepare() {
    const viewScene = this.viewScene.current.view.current.state;

    if (viewScene.currentIndex == 4) {
      Meteor.call(
        "solutionHandler.submitCard",
        this.props.student._id,
        this.props.activeTask,
        (err, res) => {
          Swal.fire({
            position: "top-end",
            type: "success",
            title: "Geschafft! Die Lernkarten werden in deinem Büro abgelegt.",
            timer: 1500
          });
        }
      );
    } else {
      alert("Noch nicht");
    }
  }

  solutionPrepare() {
    if (this.props.activeTask.formular) return this.learnCardPrepare();

    const userSol = this.viewScene.current.state.scene.children;

    if (this.state.showSolution) {
      let falseAnswers = 0;
      let totalAnswerCount = 0;

      for (let i = 0; i < this.props.activeTask.statements.length; i++) {
        totalAnswerCount++;
      }

      for (let i = 0; i < this.model.visQueue.length; i++) {
        if (this.model.visQueue[i] === "fail") {
          falseAnswers++;
        }
      }

      let solvedPercentage = (totalAnswerCount - falseAnswers) / totalAnswerCount;

      var meteorMethod = "solutionHandler.submit" + this.props.activeTask.filePrefix;
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
      }).then((result) => {
        if (result.value) {
          this.setState({ showSolution: true });
          this.forceUpdate();
        } else {
          this.setState({
            showSolution: false
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
      var meteorMethod = "solutionHandler.submit" + this.props.activeTask.filePrefix;
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
  externDragUpdate(target) {
    const dragState = this.viewScene.current.view.current.state;
    const dragView = this.viewScene.current.view.current;
    const statements = dragState.statements;
    let currentStatements = dragState.currentStatements;
    let currentIndex = dragState.currentIndex;

    let solvedStatements = dragState.solvedStatements;
    let targetStr;
    let renderNextCard = false;
    let stateObj;
    if (target.includes("statement")) {
      targetStr = target.split("statement")[0];
      for (var i in currentStatements) {
        if (currentStatements[i][0] === targetStr) {
          solvedStatements.push(currentStatements[i]);
        }
      }
    } else {
    }
    let solveLength = solvedStatements.length;

    if (currentIndex + 1 == solveLength) {
      renderNextCard = true;
    } else {
      stateObj = {
        // currentStatements,
        //
        solvedStatements,
        currentIndex: ++currentIndex
      };
      dragView.setState(stateObj);
    }
    if (renderNextCard) this.setState({ renderNextCard });
  }
  setDragIndex() {
    const dragState = this.viewScene.current.view.current.state;
    const dragView = this.viewScene.current.view.current;
    let editorValue = dragState.content;
    const statements = dragState.statements;
    let currentStatements = dragState.currentStatements;
    let currentIndex = dragState.currentIndex;
    let currentImages = dragState.currentImages;
    const imgs = currentImages[0];
    const stmts = currentStatements[0];
    let solvedStatements = dragState.solvedStatements;
    let stateObj;
    let nextIndex;
    let finish = this.state.finish;

    const editorExampleValue = dragState.exampleContent;
    currentStatements = [dragState.statements[currentIndex + 1]];
    if (dragState.currentIndex + 1 < dragState.statements.length) {
      nextIndex = ++dragState.currentIndex;
      stateObj = {
        finish,
        currentStatements,

        solvedStatements,

        currentIndex: nextIndex
      };
      dragView.setState(stateObj);
      if (this.state.renderNextCard) {
        this.setState({ renderNextCard: false });
        dragView.initView();
      }
    } else {
      finish = false;
      this.setState({ finish });
    }

    this.saveLearncard(stmts, imgs, editorValue);
    if (!finish) this.setState({ renderNextCard: false });
  }
  saveLearncard(currentStatements, currentImages, editorValue) {
    const student = this.props.student;
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000
    });
    //TODO EXAMPLE SAVE
    Meteor.call(
      "student.saveLearncard",
      this.props.student._id,
      currentStatements[0],
      currentStatements[1],
      editorValue,
      currentImages[1],

      (err, res) => {
        if (err) {
        } else {
          Toast.fire({
            type: "success",
            title: "Lernkarte gespeichert"
          });
        }
      }
    );
  }
  renderLearnCardBtn() {
    let viewScene = null;
    if (!this.viewScene.current) {
      if (this.state.viewScene) viewScene = this.state.viewScene;
    } else {
      viewScene = this.viewScene.current.view.current.state;
    }

    if (this.props.activeTask.formular && viewScene) {
      const currentStatements = viewScene.currentStatements.length;
      const statements = viewScene.statements.length;
      const solvedStatements = viewScene.statements.length;
      const currentIndex = viewScene.currentIndex;

      return this.state.renderNextCard && !this.state.finish ? (
        <Button
          style={{ marginTop: "10px", marginRight: "10px", float: "left" }}
          onClick={() => this.setDragIndex()}>
          {"Lernkarte speichern"}
        </Button>
      ) : null;
    } else return null;
  }
  renderSolBtn(buttonText) {
    if (!this.props.activeTask.isCard) {
      return (
        <Button
          style={{ marginTop: "10px", marginRight: "10px", float: "right" }}
          onClick={() => this.solutionPrepare()}>
          {buttonText}
        </Button>
      );
    }
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
      <React.Fragment>
        <div style={{ overflowY: "auto" }} className="dragAnimation__" id="dragAnimation__">
          <DragdropTemplate
            {...taskProps}
            showSolution={this.state.showSolution}
            model={this.model}
            ref={this.viewScene}
            externDragUpdate={this.externDragUpdate.bind(this)}
            scale={null}
            key={"draganimationcomponentMotive" + this.state.childKeyIteration}
          />{" "}
          {this.renderLearnCardBtn()}
          {this.renderSolBtn(buttonText)}
        </div>
      </React.Fragment>
    );
  }
}

DragAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
