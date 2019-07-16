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
  Image
} from "semantic-ui-react";
import Swal from "sweetalert2";

export default class MotiveView extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      statements: [],
      index: 0,
      lastElem: null
    };
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
      onRelease: this.dropItem,
      that: this
    });

    // onRelease: this.dropItem
  }
  componentDidMount() {
    if (this.state.activeTask == null) {
      this.setState({ statements: this.props.activeTask.statements });
    }
    window.addEventListener("load", this.handleLoad());
  }
  componentDidUpdate() {
    this.initDragDrop();
  }
  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad());
  }
  rerenderItems(that) {
    var boundsBefore, boundsAfter;
    boundsBefore = that.target.getBoundingClientRect();
    $(that.target).appendTo("#" + that.target.id + "_target");
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
  dropItem() {
    let that = this.vars.that;
    if (this.hitTest("#" + this.target.id + "_target")) {
      var index = that.state.index;
      if (that.state.lastElem != this.target.id) {
        if (
          that.state.index ==
          that.props.activeTask.statements[0].length - 1
        ) {
          that.rerenderItems(this);

          Swal.fire("das sieht gut aus");
        } else {
          that.setState({ index: ++index, lastElem: this.target.id });
          that.rerenderItems(this);
        }
      }
    } else {
      TweenMax.to(this.target, 0.5, { x: 0, y: 0 });
    }
  }
  renderTable() {
    return (
      <Segment className="selected">
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <h4>Intrinsische Motivation</h4>
            <div
              id="intr_target"
              className="selected Motive"
              style={{
                width: "400px",
                height: "100%",
                minHeight: "200px",
                justifyContent: "space-around"
              }}
            />
          </Grid.Column>
          <Grid.Column>
            <h4>Extrinsische Motivation</h4>
            <div
              id="extr_target"
              className="selected Motive"
              style={{
                height: "100%",
                minHeight: "200px",
                justifyContent: "space-around"
              }}
            />
          </Grid.Column>
        </Grid>
        <Divider vertical>oder</Divider>
      </Segment>
    );
  }
  renderStatements() {
    var statements = this.props.activeTask.statements[0];
    for (var i in statements) {
      if (i == this.state.index) {
        var tmp;
        return statements.slice(0, this.state.index + 1).map(statement => {
          return (
            <div id={statement[0]} className="dragItem">
              {statement[1]}
            </div>
          );
        });
      } else {
        var found = false;
      }
    }
    if (found == false) {
      return <div>Du hast alle Statements benutzt.</div>;
    }
  }
  renderElemCounter() {
    return (
      <div>
        {this.state.index +
          1 +
          " / " +
          this.props.activeTask.statements[0].length}
      </div>
    );
  }
  renderMotivation() {
    return (
      <div id="svgDiv">
        <div className="motiveWrapper">
          {this.renderElemCounter()}
          {this.renderStatements()}

          {this.renderTable()}

          <h1>Motivation</h1>
        </div>
      </div>
    );
  }
  render() {
    return <div>{this.renderMotivation()}</div>;
  }
}
