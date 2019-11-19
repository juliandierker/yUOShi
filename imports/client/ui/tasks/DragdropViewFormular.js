import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { TweenMax } from "gsap";
import {
  Header,
  Table,
  Divider,
  Grid,
  Segment,
  Image,
  Card
} from "semantic-ui-react";
import Swal from "sweetalert2";

export default class DragdropViewFormular extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    console.log(props);
    this.state = {
      statements: props.activeTask.statements,
      images: props.activeTask.images,
      examples: props.activeTask.examples,
      currentIndex: 0,
      currentStatements: [],
      currentImages: [],
      currentExamples: [],
      evItem: [],
      currentIndex: 0
    };

    this.handleLoad = this.handleLoad.bind(this);
  }
  getStatements() {
    let currentStatements = [];
    for (
      let i = this.state.currentIndex;
      i < this.state.currentIndex + 2;
      i++
    ) {
      currentStatements.push(this.state.statements[i]);
    }
    this.setState({ currentStatements });
  }
  getImages() {
    let currentImages = [];
    for (
      let i = this.state.currentIndex;
      i < this.state.currentIndex + 2;
      i++
    ) {
      currentImages.push(this.state.images[i]);
    }
    this.setState({ currentImages });
  }

  //TODO auslagern

  mouseHitTest(mouseX, mouseY, containerId) {
    let targetId = containerId.split("_")[0] + "_target";
    let boundingRect = document
      .getElementById(targetId)
      .getBoundingClientRect();
    // Rectangle bounds
    let top = boundingRect.top;
    let bottom = boundingRect.top + boundingRect.height;
    let left = boundingRect.left;
    let right = boundingRect.left + boundingRect.width;
    if (
      mouseX >= left &&
      mouseX <= right &&
      mouseY >= top &&
      mouseY <= bottom
    ) {
      console.log("ja");
      return true;
    }
    return false;
  }

  getExamples() {
    let currentExamples = [];
    for (
      let i = this.state.currentIndex;
      i < this.state.currentIndex + 2;
      i++
    ) {
      currentExamples.push(this.state.examples[i]);
    }
    this.setState({ currentExamples: currentExamples });
  }
  handleLoad() {
    this.initDragDrop();
  }
  setCurrents() {
    const { statements, images, examples } = this.state;
  }

  initDragDrop() {
    Draggable.create(".dragItem", {
      type: "x,y",
      onRelease: this.dropItem,
      that: this
    });
  }
  componentDidMount() {
    this.getStatements();
    this.getExamples();
    this.getImages();
    if (this.state.activeTask == null) {
      console.log(this.props);
      this.setState({ statements: this.props.activeTask.statements });
    }
    window.addEventListener("load", this.handleLoad());
  }

  componentDidUpdate() {
    this.initDragDrop();
    if (this.props.showSolution) {
      let intrNodes = document.getElementById("intr_target").childNodes;
      let extrNodes = document.getElementById("extr_target").childNodes;
      const correctArr = this.props.model.correctArr;
      if (correctArr.length >= 2) {
        for (let i = 0; i < correctArr[0].length; i++) {
          if (intrNodes[i]) {
            if (correctArr[0][i] === true) {
              intrNodes[i].classList.add("correct");
            } else {
              intrNodes[i].classList.add("false");
            }
          }
        }
        for (let i = 0; i < correctArr[1].length; i++) {
          if (extrNodes[i]) {
            if (correctArr[1][i] === true) {
              extrNodes[i].classList.add("correct");
            } else {
              extrNodes[i].classList.add("false");
            }
          }
        }
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad());
  }

  rerenderItems(that, containerId) {
    console.log(that);
    console.log(this);
    let targetId = containerId.split("_")[0] + "_target";
    let boundsBefore, boundsAfter;
    boundsBefore = that.target.getBoundingClientRect();
    $(that.target).appendTo("#" + targetId);
    boundsAfter = that.target.getBoundingClientRect();
    TweenMax.fromTo(
      that.target,
      0.3,
      {
        x: "+=" + (boundsBefore.left - boundsAfter.left),
        y: "+=" + (boundsBefore.top - boundsAfter.top)
      },
      {
        x: 0,
        y: 0
      }
    );
  }

  dropItem(event) {
    let that = this.vars.that;
    console.log(this);
    let index = that.state.currentIndex;
    const { currentStatements, currentExamples } = that.state;
    if (that.mouseHitTest(event.clientX, event.clientY, this.target.id)) {
      that.rerenderItems(this, this.target.id);
    } else {
      TweenMax.to(this.target, 0.5, { x: 0, y: 0 });
    }
  }
  renderTargetCards() {
    const { currentStatements, currentExamples, currentImages } = this.state;
    return currentStatements.map((statements, index) => {
      // return statements.map(statement => {
      return (
        // <div class="customCard">
        //   <img
        //     src={
        //       "/tasks/Drag/" +
        //       this.props.activeTask.taskId +
        //       "/" +
        //       statements[0] +
        //       ".png"
        //     }
        //     alt="Avatar"
        //     style={{ width: "100%" }}
        //   />
        //   <div class="customContainer">
        //     <h4>
        //       <b>{statements[0]}</b>
        //     </h4>
        //     <div className="targetDrop" id={statements[0] + "statement_target"}>
        //       <p>Definition:</p>
        //       {/* <p>{statements[1]}</p> */}
        //     </div>
        //     <div
        //       className="targetDrop"
        //       id={currentExamples[index][0] + "example_target"}
        //     >
        //       <p>Beispiel:</p>
        //     </div>
        //   </div>
        // </div>
        <div class="customCard">
          <Image
            src={
              "/tasks/Drag/" +
              this.props.activeTask.taskId +
              "/" +
              statements[0] +
              ".png"
            }
            size="tiny"
            circular
          />
          <h2> {statements[0]}</h2>
          <div class="customCard-body">
            <div className="targetDrop" id={statements[0] + "statement_target"}>
              <p>Definition:</p>
              {/* <p>{statements[1]}</p> */}
            </div>
            <div className="targetDrop" id={statements[0] + "example_target"}>
              <p>Beispiel:</p>
              {/* <p>{statements[1]}</p> */}
            </div>
          </div>
          <div class="customCard-footer" />
        </div>
      );
    });
  }
  renderSolutionState() {
    const that = this.props.that;
    const solutions = this.props.scene.children;

    solutions.map(solution => {
      solution.children.map(child => {
        let elem = document.getElementById(child.id);
        elem.style.backgroundColor = "green";
        if (
          this.props.model.visQueue.find(elem => {
            return elem.id === child.id;
          }) !== undefined
        ) {
          elem.style.backgroundColor = "red";
        }
      });
    });
  }
  renderCardGrid() {
    return this.renderTargetCards();
  }

  renderDragStatements() {
    const { currentStatements } = this.state;
    return currentStatements.map((statement, index) => {
      return (
        <div id={statement[0] + "statement_start"} className="dragItem">
          {statement[1]}
        </div>
      );
    });
  }

  renderDragExamples() {
    const { currentExamples } = this.state;

    return currentExamples.map((example, index) => {
      return (
        <div id={example[0] + "example_start"} className="dragItem">
          {example[1]}
        </div>
      );
    });
  }

  render() {
    return (
      <div id="svgDiv" style={{ width: "100%" }}>
        <div className="motiveWrapper">
          {this.renderCardGrid()}
          {this.renderDragStatements()}
          {this.renderDragExamples()}
        </div>
      </div>
    );
  }
}
