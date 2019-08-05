import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";
import ReactPlayer from "react-player";
import Card from "./Cards";

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
import Swal from "sweetalert2";
export default class MemoryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      frameworks: [
        "angular2",
        "vue",
        "react",
        "grunt",
        "phantomjs",
        "ember",
        "babel",
        "ionic",
        "gulp",
        "meteor",
        "yeoman",
        "yarn",
        "nodejs",
        "bower",
        "browserify"
      ],
      duplicatedFrameworks: [],
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
    this.state.duplicatedFrameworks = this.state.frameworks.concat(
      this.state.frameworks
    );
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
    let finalizedFrameworks = this.state.finalizedFrameworks;
    if (
      this.state.openedFrameworks[0].name ==
        this.state.openedFrameworks[1].name &&
      this.state.openedFrameworks[0].index !=
        this.state.openedFrameworks[1].index
    ) {
      finalizedFrameworks[this.state.openedFrameworks[0].index].complete = true;
      finalizedFrameworks[this.state.openedFrameworks[1].index].complete = true;
    } else {
      finalizedFrameworks[this.state.openedFrameworks[0].index].close = true;
      finalizedFrameworks[this.state.openedFrameworks[1].index].close = true;
    }
    this.setState({
      finalizedFrameworks,
      openedFrameworks: []
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // var keywords = this.props.activeTask.content[0].keywords;
    //
    // if (sol.length == this.state.tags.length) {
    //   if (!this.state.finished) {
    //     this.setState({ finished: true });
    //   }
    // }
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

  solutionPrepare() {}

  render() {
    return (
      <div>
        <div className="playground">
          {this.state.finalizedFrameworks.map((framework, index) => {
            return (
              <Card
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
      </div>
    );
  }
}
