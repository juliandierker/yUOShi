import React from "react";
import { TweenMax } from "gsap";

export default class DragdropViewFormular extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;

    this.state = {
      statements: [
        { id: "motivation", name: "Motivation" },
        { id: "motiv", name: "Motiv" }
      ],
      images: [
        { id: "motivationImage", name: "Motivation" },
        { id: "motivImage", name: "Motiv" }
      ],
      examples: [
        { id: "motivationExample", name: "Motivation" },
        { id: "motivExample", name: "Motiv" }
      ]
    };
    this.handleLoad = this.handleLoad.bind(this);
  }
  handleLoad() {
    this.initDragDrop();
  }

  updateDirections() {
    var directionStart = document.getElementById("directionStart"),
      directionVelocity = document.getElementById("directionVelocity"),
      directionObject = document.getElementById("directionObject"),
      original = document.getElementById("original"),
      logoElement = document.getElementById("logoElement");
    //getDirection() can return 3 types of direction...
    directionStart.innerHTML = '"' + getDirection("start") + '"'; //direction from start of drag
    directionVelocity.innerHTML = '"' + getDirection("velocity") + '"'; //momentary velocity *requires ThrowPropsPlugin
    directionObject.innerHTML = '"' + getDirection(logoElement) + '"'; //direction from an object
  }

  initDragDrop() {
    Draggable.create(".dragItem", {
      type: "x,y",
      onRelease: this.dropItem
    });
  }
  componentDidMount() {
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    let shuffled = shuffle(this.state.statements);
    this.setState({ statements: shuffled });
    window.addEventListener("load", this.handleLoad());
  }

  componentDidUpdate() {
    this.initDragDrop();
    if (this.props.showSolution) {
      const nodes = [
        document.getElementById("selfActualization_target").childNodes,
        document.getElementById("esteem_target").childNodes,
        document.getElementById("socialneeds_target").childNodes,
        document.getElementById("safety_target").childNodes,
        document.getElementById("physological_target").childNodes
      ];

      const correctArr = this.props.model.correctArr;

      if (correctArr.length >= 5) {
        for (let i = 0; i < correctArr.length; i++) {
          for (let j = 0; j < correctArr[i].length; j++) {
            if (nodes[i][j]) {
              nodes[i][j].classList.add(
                correctArr[i][j] === true ? "correct" : "false"
              );
            }
          }
        }
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad());
  }
  dropItem() {
    var boundsBefore, boundsAfter;
    const targets = ["motivation", "motiv"];
    let targetHit = "";
    for (let i = 0; i < targets.length; i++) {
      if (this.hitTest("#" + targets[i] + "_target")) {
        targetHit = "#" + targets[i] + "_target";
      }
    }
    if (targetHit !== "") {
      boundsBefore = this.target.getBoundingClientRect();
      $(this.target).appendTo(targetHit);
      boundsAfter = this.target.getBoundingClientRect();
      TweenMax.fromTo(
        this.target,
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
    } else {
      TweenMax.to(this.target, 0.5, { x: 0, y: 0 });
    }
  }

  renderDragContent() {
    return (
      <div className="defCardWrapper">
        <div className="defCards">
          <div id="defcard_motivation" className="selected DefCard" />
          <div id="defcard_motiv" className="selected DefCard" />

          <div className="dragItemGroup">
            {this.state.statements.map(statement => {
              return (
                <div
                  key={statement.id + "_key"}
                  id={statement.id}
                  className="dragItem"
                >
                  {statement.name}
                </div>
              );
            })}
            {this.state.images.map((image, index) => {
              return (
                <img
                  src={
                    "/tasks/Drag/Motivationsbegriffe/" +
                    this.state.statements[index].id +
                    ".png"
                  }
                  key={image.id + "_key"}
                  id={image.id}
                  className="dragItem"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  renderTargets() {
    return (
      <div className="targetItemGroup">
        {this.state.statements.map(statement => {
          return (
            <div class="customCard">
              <img
                class="customImage"
                src="/tasks/Drag/ImagePlaceholder.png"
                alt="Avatar"
              />
              <div class="customContainer">
                <h4>
                  <b>{statement.name}</b>
                </h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div id="dragWrapper">
        {this.renderTargets()}
        {this.renderDragContent()}
      </div>
    );
  }
}
