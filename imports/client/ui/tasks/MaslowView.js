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
  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad());
  }
  dropItem() {
    var boundsBefore, boundsAfter;
    if (this.hitTest("#" + this.target.id + "_target")) {
      boundsBefore = this.target.getBoundingClientRect();
      $(this.target).appendTo("#" + this.target.id + "_target");
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
