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

export default class MotiveView extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      statements: [],
      index: 0,
      extr_container: [],
      intr_container: []
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
    directionStart.innerHTML = '"' + getDirection("start") + '"';
    directionVelocity.innerHTML = '"' + getDirection("velocity") + '"';
    directionObject.innerHTML = '"' + getDirection(logoElement) + '"';
  }

  initDragDrop() {
    Draggable.create(".dragItem", {
      type: "x,y",
      onRelease: this.dropItem,
      that: this
    });
  }
  componentDidMount() {
    function shuffle(a) {
      for (let i = a[0].length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[0][i], a[0][j]] = [a[0][j], a[0][i]];
      }
      return a;
    }
    let shuffled = shuffle(this.props.activeTask.statements);
    if (this.state.activeTask == null) {
      this.setState({ statements: shuffled });
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

  rerenderItems(that, container) {
    var boundsBefore, boundsAfter;
    boundsBefore = that.target.getBoundingClientRect();
    $(that.target).appendTo("#" + container + "_target");
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
    let index = that.state.index;
    let hit = "";
    if (this.hitTest("#intr_target")) {
      let intr = that.state.intr_container ? that.state.intr_container : [];
      intr.push(this.target);
      hit = "intr";
      that.setState({ intr_container: intr });
    } else if (this.hitTest("#extr_target")) {
      let extr = that.state.extr_container ? that.state.extr_container : [];
      extr.push(this.target);
      hit = "extr";
      that.setState({ extr_container: extr });
    } else {
      TweenMax.to(this.target, 0.5, { x: 0, y: 0 });
      return;
    }
    if (that.state.index != that.state.statements[0].length - 1) {
      that.setState({ index: ++index });
      that.rerenderItems(this, hit);
    } else {
      that.rerenderItems(this, hit);
    }
  }

  renderTable() {
    return (
      <Segment className="selected" style={{ width: "100%" }}>
        <Grid columns={2} stretched>
          <Grid.Column>
            <h4>Intrinsische Motivation</h4>
            <div
              id="intr_target"
              className="selected Motive"
              style={{
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
                justifyContent: "space-around",
                marginLeft: "1.5rem"
              }}
            />
          </Grid.Column>
        </Grid>
        <Divider vertical>oder</Divider>
      </Segment>
    );
  }

  renderStatements() {
    var statements = this.state.statements[0];
    for (var i in statements) {
      if (i == this.state.index) {
        return statements
          .slice(this.state.index, this.state.index + 1)
          .map(statement => {
            console.log(statement);
            return (
              <div
                description={[statement[1]]}
                key={"card" + i + statement[1]}
                style={{
                  marginBottom: "1rem",
                  height: "6rem",
                  padding: "1rem"
                }}
                className=" dragItem"
                id="dragDrop"
              >
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

  render() {
    return (
      <div id="svgDiv" style={{ width: "100%" }}>
        <div className="motiveWrapper">
          {this.renderElemCounter()}
          <Card.Group style={{ margin: "0px" }}>
            {this.renderStatements()}
          </Card.Group>

          {this.renderTable()}
        </div>
      </div>
    );
  }
}
