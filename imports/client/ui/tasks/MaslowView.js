import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { TweenMax } from "gsap";

export default class MaslowView extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
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
    window.addEventListener("load", this.handleLoad());
  }

  componentDidUpdate() {
    if (this.props.showSolution) {
      let selfActualizationNodes = document.getElementById(
        "selfActualization_target"
      ).childNodes;
      let esteemNodes = document.getElementById("esteem_target").childNodes;
      let socialneedsNodes = document.getElementById("socialneeds_target")
        .childNodes;
      let safetyNodes = document.getElementById("safety_target").childNodes;
      let physologicalNodes = document.getElementById("physological_target")
        .childNodes;

      const correctArr = this.props.model.correctArr;
      if (correctArr.length >= 5) {
        for (let i = 0; i < correctArr[0].length; i++) {
          if (selfActualizationNodes[i]) {
            selfActualizationNodes[i].classList.add(
              correctArr[0][i] === true ? "correct" : "false"
            );
          }
        }
        for (let i = 0; i < correctArr[1].length; i++) {
          if (esteemNodes[i]) {
            esteemNodes[i].classList.add(
              correctArr[1][i] === true ? "correct" : "false"
            );
          }
        }
        for (let i = 0; i < correctArr[2].length; i++) {
          if (socialneedsNodes[i]) {
            socialneedsNodes[i].classList.add(
              correctArr[2][i] === true ? "correct" : "false"
            );
          }
        }
        for (let i = 0; i < correctArr[3].length; i++) {
          if (safetyNodes[i]) {
            safetyNodes[i].classList.add(
              correctArr[3][i] === true ? "correct" : "false"
            );
          }
        }
        for (let i = 0; i < correctArr[4].length; i++) {
          if (physologicalNodes[i]) {
            physologicalNodes[i].classList.add(
              correctArr[4][i] === true ? "correct" : "false"
            );
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
      <div id="svgDiv">
        <div className="pyramidWrapper">
          <div className="pyramid">
            <div id="selfActualization_target" className="selected Maslow" />
            <div id="esteem_target" className="selected Maslow" />
            <div id="socialneeds_target" className="selected Maslow" />
            <div id="safety_target" className="selected Maslow" />
            <div id="physological_target" className="selected Maslow" />

            <div className="dragItemGroup">
              <div id="selfActualization" className="dragItem">
                Selbstverwirklichung
              </div>
              <div id="esteem" className="dragItem">
                Individualbedürfnisse
              </div>
              <div id="socialneeds" className="dragItem">
                Soziale Bedürfnisse
              </div>
              <div id="safety" className="dragItem">
                Sicherheits Bedürfnisse
              </div>
              <div id="physological" className="dragItem">
                Körperliche Bedürfnisse
              </div>
            </div>
          </div>

          <h1>Maslow Pyramide</h1>
          <div>
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
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderPyramid()}</div>;
  }
}
