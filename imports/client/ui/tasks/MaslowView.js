import React from "react";
import { TweenMax } from "gsap";

export default class MaslowView extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;

    this.state = {
      statements: [
        { id: "selfActualization", name: "Selbstverwirklichung" },
        { id: "esteem", name: "Individualbedürfnisse" },
        { id: "socialneeds", name: "Soziale Bedürfnisse" },
        { id: "safety", name: "Sicherheits Bedürfnisse" },
        { id: "physological", name: "Körperliche Bedürfnisse" }
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
    const targets = [
      "selfActualization",
      "esteem",
      "socialneeds",
      "safety",
      "physological"
    ];
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

  renderPyramid() {
    return (
      <div className="pyramidWrapper">
        <div className="pyramid">
          <div id="selfActualization_target" className="selected Maslow" />
          <div id="esteem_target" className="selected Maslow" />
          <div id="socialneeds_target" className="selected Maslow" />
          <div id="safety_target" className="selected Maslow" />
          <div id="physological_target" className="selected Maslow" />

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
          </div>
        </div>

        <svg width="0" height="0">
          <defs>
            <clipPath id="part1" clipPathUnits="objectBoundingBox">
              <polygon points="0.5 0, 0.6 1, 0.4 1" />
            </clipPath>
            <clipPath id="part2" clipPathUnits="objectBoundingBox">
              <polygon points="0.4 0, 0.6 0, 0.7 1, 0.3 1" />
            </clipPath>
            <clipPath id="part3" clipPathUnits="objectBoundingBox">
              <polygon points="0.3 0, 0.7 0, 0.8 1, 0.2 1" />
            </clipPath>
            <clipPath id="part4" clipPathUnits="objectBoundingBox">
              <polygon points="0.2 0, 0.8 0, 0.9 1, 0.1 1" />
            </clipPath>
            <clipPath id="part5" clipPathUnits="objectBoundingBox">
              <polygon points="0.1 0, 0.9 0, 1 1, 0 1" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
  render() {
    return <div id="svgdiv">{this.renderPyramid()}</div>;
  }
}
