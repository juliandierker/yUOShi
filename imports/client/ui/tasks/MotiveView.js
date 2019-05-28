import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { TweenMax } from "gsap";
import { Header, Table } from "semantic-ui-react";

export default class MotiveView extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      statements: [],
      index: 0
    };
  }
  handleLoad() {
    this.initDragDrop();
  }
  componentDidMount() {
    console.log("mountet " + this.props.activeTask);
    this.setState({ statements: this.props.activeTask.statements });
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
  renderTable() {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />

          <Table.HeaderCell>
            Intrinsische Motivation
            <div id="intr_target" className="selected Motive">
              +
            </div>
          </Table.HeaderCell>

          <Table.HeaderCell>
            Extrinsische Motivation
            <div id="extr_target" className="selected Motive">
              +
            </div>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }
  renderStatements() {}
  renderMotivation() {
    return (
      <div id="svgDiv">
        <div className="motiveWrapper">
          {this.renderStatements()}
          <div id="intr" className="dragItem">
            Lena interessiert sich für Sport, weshalb sie gerne neue Sportarten
            ausprobiert.
          </div>
          <div id="extr" className="dragItem">
            Lukas Vater ist Physiker, weshalb er sich mit physikalischen Themen
            beschäftigen soll.
          </div>
          <div id="intr" className="dragItem">
            Die Klasse arbeitet gerne mit, weil sie dadurch etwas lernen.
          </div>
          <div id="extr" className="dragItem">
            Die Lehrkraft vergibt Sternchen für gute Mitarbeit
          </div>
          {this.renderTable()}

          <h1>Motivation</h1>

          <svg width="0" height="0">
            <defs>
              <clipPath id="part1_m" clipPathUnits="objectBoundingBox">
                <rect width="300" height="100" />
              </clipPath>
              <clipPath id="part2_m" clipPathUnits="objectBoundingBox">
                <rect width="300" height="100" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderMotivation()}</div>;
  }
}
