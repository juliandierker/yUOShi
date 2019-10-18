import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";
import ReactPlayer from "react-player";
import Card from "./Cards";
import Swal from "sweetalert2";

import { DragdropModel } from "../../../models/DragdropModel";
import {
  Button,
  Header,
  List,
  Image,
  Grid,
  Icon,
  Segment,
  Label
} from "semantic-ui-react";
export default class MemoryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      frameworks: props.activeTask.content[0].keywords,
      duplicatedFrameworks: [],
      sol: [],
      randomizedFrameworks: [],
      finalizedFrameworks: [],
      openedFrameworks: [],
      finished: false
    };
    this.start();
    this.view = null;
  }

  handleClick(name, index) {
    if (this.state.openedFrameworks.length == 2) {
      setTimeout(() => {
        this.check();
      }, 750);
    } else {
      let framework = {
        name,
        index
      };
      let finalizedFrameworks = this.state.finalizedFrameworks;
      let frameworks = this.state.openedFrameworks;
      finalizedFrameworks[index].close = false;
      frameworks.push(framework);
      this.setState({
        openedFrameworks: frameworks,
        finalizedFrameworks: finalizedFrameworks
      });
      if (this.state.openedFrameworks.length == 2) {
        setTimeout(() => {
          this.check();
        }, 750);
      }
    }
  }
  shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  start() {
    let finalizedFrameworks = [];
    let defStr = "def-";
    var defName = "";
    this.state.frameworks.map((name, index) => {
      this.state.duplicatedFrameworks.push({
        name,
        close: true,
        complete: false,
        fail: false
      });
      defName = defStr + name;
      this.state.duplicatedFrameworks.push({
        name: defName,
        close: true,
        complete: false,
        fail: false
      });
    });

    this.state.randomizedFrameworks = this.shuffle(
      this.state.duplicatedFrameworks
    );
    this.state.randomizedFrameworks.map((name, index) => {
      finalizedFrameworks.push({
        name,
        close: true,
        complete: false,
        fail: false
      });
    });
    this.state.finalizedFrameworks = finalizedFrameworks;
  }
  check() {
    var def = "";
    var mainIndex = null;
    var checkIndex = null;
    this.state.openedFrameworks.map((elem, curIndex) => {
      if (elem.name.name.includes("-")) {
        def = elem.name.name.split("-")[1];
        mainIndex = curIndex;
        mainIndex > 0 ? (checkIndex = 0) : (checkIndex = 1);
      }
    });
    let finalizedFrameworks = this.state.finalizedFrameworks;
    let sol = this.state.sol;
    if (
      checkIndex != null &&
      this.state.openedFrameworks[checkIndex] &&
      this.state.openedFrameworks[checkIndex].name &&
      def === this.state.openedFrameworks[checkIndex].name.name &&
      this.state.openedFrameworks[0].index !=
        this.state.openedFrameworks[1].index
    ) {
      finalizedFrameworks[this.state.openedFrameworks[0].index].complete = true;
      finalizedFrameworks[this.state.openedFrameworks[1].index].complete = true;
      sol.push(
        finalizedFrameworks[this.state.openedFrameworks[0].index].complete
      );
      sol.push(
        finalizedFrameworks[this.state.openedFrameworks[1].index].complete
      );
    } else {
      finalizedFrameworks[this.state.openedFrameworks[0].index].close = true;
      finalizedFrameworks[this.state.openedFrameworks[1].index].close = true;
    }
    this.setState({
      finalizedFrameworks,
      sol,
      openedFrameworks: []
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.sol.length > 0 &&
      this.state.sol.length == this.state.finalizedFrameworks.length
    ) {
      if (!this.state.finished) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: "success",
          title: "Das sieht gut aus 🎉"
        });
        this.setState({ finished: true });
      }
    }
  }
  renderListElem() {
    return this.props.activeTask.content[0].keywords.map((keyword, index) => {
      return (
        <List.Item style={{ fontSize: "12px" }} key={keyword + index} as="a">
          {this.state.tags.includes(keyword) ? (
            <Icon key={"icon" + index} color="green" name="check" />
          ) : (
            <Icon key={"icon" + index} name="help" />
          )}

          <List.Content key={"content" + index}>
            <List.Header key={"header" + index}>{keyword}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
  }

  solutionPrepare() {
    var meteorMethod =
      "solutionHandler.submit" + this.props.activeTask.filePrefix;
    Meteor.call(
      meteorMethod,
      this.state.sol,
      this.props.student._id,
      this.props.activeTask,
      (err, res) => {
        if (res) {
          Swal.fire({
            position: "top-end",
            type: "success",
            title: "Geschafft",
            timer: 1500
          });
        }
      }
    );
  }

  render() {
    const buttonDisabled = this.state.finished ? false : true;
    const buttonColor = this.state.finished ? "green" : "grey";

    return (
      <div>
        <div className="playground">
          {this.state.finalizedFrameworks.map((framework, index) => {
            return (
              <Card
                key={"memCard-" + index}
                task={this.props.activeTask}
                framework={framework.name}
                click={() => {
                  this.handleClick(framework.name, index);
                }}
                close={framework.close}
                complete={framework.complete}
              />
            );
          })}
        </div>

        <Button
          color={buttonColor}
          disabled={buttonDisabled}
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "18.4%"
          }}
          floated="right"
          onClick={() => this.solutionPrepare()}
        >
          Aufgabe lösen
        </Button>
      </div>
    );
  }
}
