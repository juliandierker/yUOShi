import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { TweenMax } from "gsap";

import { DragdropModel } from "../../../models/DragdropModel";

export default class MaslowView extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.handleLoad = this.handleLoad.bind(this);
    console.log(DragdropModel);

    this.model = DragdropModel.getNewModel();
    this.model.init(props.student, props.activeTask);
  }
  handleLoad() {
    this.initDragDrop();
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
    console.log("mount");
    window.addEventListener("load", this.handleLoad());
  }
  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad());
  }
  dropItem() {
    var boundsBefore, boundsAfter;
    console.log(this.target.id);
    if (this.hitTest("#" + this.target.id + "_target")) {
      console.log("hit");
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
          <div className="pyramid">
            <div id="selfActualization_target" className="selected zone">
              +
            </div>
            <div id="esteem_target" className="selected zone">
              +
            </div>
            <div id="socialneeds_target" className="selected zone">
              +
            </div>
            <div id="safety_target" className="selected zone">
              +
            </div>
            <div id="physological_target" className="selected zone">
              +
            </div>
          </div>

          <h1>Maslow Pyramide</h1>

          <svg width="0" height="0">
            <defs>
              <clipPath id="part1" clipPathUnits="objectBoundingBox">
                <polygon points="0.5 0, 1 1, 0 1" />
              </clipPath>
              <clipPath id="part2" clipPathUnits="objectBoundingBox">
                <polygon points="0.25 0, 0.75 0, 1 1, 0 1" />
              </clipPath>
              <clipPath id="part3" clipPathUnits="objectBoundingBox">
                <polygon points="0.165 0, 0.83 0, 1 1, 0 1" />
              </clipPath>
              <clipPath id="part4" clipPathUnits="objectBoundingBox">
                <polygon points="0.125 0, 0.875 0, 1 1, 0 1" />
              </clipPath>
              <clipPath id="part5" clipPathUnits="objectBoundingBox">
                <polygon points="0 0, 1 0, 1 1, 0 1" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderPyramid()}
        <Button size="small">Aufgabe lösen</Button>
      </div>
    );
  }
}
