import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { TweenMax } from "gsap";
import FullEditor from "../../texteditor/FullEditor";
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
    this.state = {
      statements: props.activeTask.statements,
      images: props.activeTask.images,
      examples: props.activeTask.examples,
      currentIndex: 0,
      content: null,
      currentStatements: [],
      currentImages: [],
      currentExamples: [],
      evItem: [],
      solvedStatements: [],
      solvedImages: [],
      solvedExamples: []
    };

    this.handleLoad = this.handleLoad.bind(this);
  }
  handleEditorChange = (event, editor) => {
    console.log(editor);
    var change = JSON.parse(JSON.stringify(this.state["content"]));
    const content = editor.getData();
    this.setState({ content });
  };
  getStatements() {
    let currentStatements = [];
    for (
      let i = this.state.currentIndex;
      i < this.state.currentIndex + 1;
      i++
    ) {
      if (!currentStatements.includes(this.state.statements[i])) {
        currentStatements.push(this.state.statements[i]);
      }
    }
    this.setState({ currentStatements });
  }
  getImages() {
    let currentImages = [];
    for (
      let i = this.state.currentIndex;
      i < this.state.currentIndex + 1;
      i++
    ) {
      if (!currentImages.includes(this.state.statements[i])) {
        currentImages.push(this.state.images[i]);
      }
    }
    this.setState({ currentImages });
  }
  getExamples() {
    let currentExamples = [];
    for (
      let i = this.state.currentIndex;
      i < this.state.currentIndex + 1;
      i++
    ) {
      if (!currentExamples.includes(this.state.statements[i])) {
        currentExamples.push(this.state.examples[i]);
      }
    }
    this.setState({ currentExamples: currentExamples });
  }

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
      return true;
    }
    return false;
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

  rerenderItems(that, compContext, containerId) {
    let targetId = containerId.split("_")[0] + "_target";
    let boundsBefore, boundsAfter;
    boundsBefore = that.target.getBoundingClientRect();
    $(that.target).appendTo("#" + targetId);
    boundsAfter = that.target.getBoundingClientRect();
    TweenMax.fromTo(
      that.target,
      0.3,
      {
        x: "+=" + (boundsBefore.left - boundsAfter.left - 1),
        y: "+=" + (boundsBefore.top - boundsAfter.top + 10)
      },
      {
        x: 0,
        y: 0
      }
    );
    compContext.props.externDragUpdate(containerId);
  }
  checkSolutions(solvedArr, targetStr) {
    return solvedArr.filter(elem => {
      return elem[0] === targetStr;
    });
  }
  dropItem(event) {
    let that = this.vars.that;
    let index = that.state.currentIndex;

    const {
      currentStatements,
      currentExamples,
      solvedStatements,
      solvedExamples
    } = that.state;
    if (that.mouseHitTest(event.clientX, event.clientY, this.target.id)) {
      if (this.target.id.includes("statement")) {
        let targetStr = this.target.id.split("statement")[0];
        if (that.checkSolutions(solvedStatements, targetStr).length == 0) {
          that.rerenderItems(this, that, this.target.id);
        }
      } else if (this.target.id.includes("example")) {
        let targetStr = this.target.id.split("example")[0];
        if (that.checkSolutions(solvedExamples, targetStr).length == 0) {
          that.rerenderItems(this, that, this.target.id);
        }
      }
    } else {
      TweenMax.to(this.target, 0.5, { x: 0, y: 0 });
    }
  }
  initView() {
    var targets = document.getElementsByClassName("dragItem");
    let elem = document.getElementById("dragElements").getBoundingClientRect();
    let node = document.getElementById("dragElements");
    node.appendChild(targets[1]);
    TweenMax.to(targets[1], 0.5, { x: 0, y: 0 });

    node.appendChild(targets[0]);
    TweenMax.to(targets[0], 0.5, { x: 0, y: 0 });
  }
  renderTargetCards() {
    const { currentStatements, currentExamples, currentImages } = this.state;
    let { content } = this.state;
    content ? null : (content = "Bemerkungen hier eingeben...");
    return currentStatements.map((statements, index) => {
      // return statements.map(statement => {
      return (
        <div class="customCard">
          <Image
            src={
              "/tasks/Drag/" +
              this.props.activeTask.taskId +
              "/" +
              statements[0] +
              ".png"
            }
            floated="right"
            size="tiny"
            circular
          />
          <h2
            style={{
              fontWeight: "bold",
              textTransform: "Capitalize"
            }}
          >
            {statements[0]}
          </h2>
          <div class="customCard-body">
            <div className="targetDrop" id={statements[0] + "statement_target"}>
              <p class="targetDropDefinition">Definition:</p>
              {/* <p>{statements[1]}</p> */}
            </div>
            <div className="targetDrop" id={statements[0] + "example_target"}>
              <p class="targetDropExample">Beispiel:</p>
              {/* <p>{statements[1]}</p> */}
            </div>
            <div>
              <p class="targetDropComment">Bemerkungen:</p>
              <FullEditor
                name="instruction"
                onChange={this.handleEditorChange.bind(this)}
                value={content}
              />
            </div>
          </div>
          <div class="customCard-footer" />
        </div>
      );
    });
  }
  renderSolutionState() {
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
          <div id="dragElements">
            {this.renderDragStatements()}
            {this.renderDragExamples()}
          </div>
        </div>
      </div>
    );
  }
}
