import React, { Component } from "react";
import {
  Segment,
  Input,
  Button,
  List,
  Icon,
  Grid,
  Image
} from "semantic-ui-react";
import reactStringReplace from "react-string-replace";
import { Meteor } from "meteor/meteor";

export default class ClozeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctAnswers: null,
      keywords: []
    };
  }
  solutionPrepare() {
    const meteorMethod =
      "solutionHandler.submit" + this.props.activeTask.filePrefix;

    if (this.state.correctAnswers) {
      let count = 0;
      let correctCount = 0;
      for (let answer in this.state.correctAnswers) {
        count++;
        if (this.state.correctAnswers[answer]) {
          correctCount++;
        }
      }
      let solvedPercentage = correctCount / count;
      Meteor.call(
        meteorMethod,
        null,
        this.props.student._id,
        this.props.activeTask,
        solvedPercentage,
        (err, res) => {}
      );
    }

    let solutionValues = [];
    let el = document.querySelectorAll('[name^="inp#"]');
    for (let i = 0; i < el.length; i++) {
      solutionValues.push(el[i].value);
    }

    Meteor.call(
      meteorMethod,
      solutionValues,
      this.props.student._id,
      this.props.activeTask,
      (err, res) => {
        if (res) {
          this.setState({ correctAnswers: res });
        }
      }
    );
  }

  renderListElem() {
    let keywords = this.props.activeTask.content[0].keywords;
    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    keywords = shuffle(keywords);

    return keywords.map((keyword, index) => {
      return (
        <List.Item style={{ fontSize: "12px" }} key={keyword + index} as="a">
          <Icon key={"icon" + index} name="help" />
          <List.Content key={"content" + index}>
            <List.Header key={"header" + index}>{keyword}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
  }

  renderText() {
    let text = this.props.activeTask.content[0].text;

    // load images
    let imageRegex = new RegExp("W*(--\\d--)W*", "gm");
    text = reactStringReplace(text, imageRegex, (match, j) => {
      const ident = match.replace("--", "").replace("--", "");
      return (
        <Image
          style={{ float: "left" }}
          src={this.props.activeTask.content[0].images[ident]}
          size="tiny"
          key={"img#" + ident}
        />
      );
    });

    // Create Text Inputs
    let inputRegex = new RegExp("W*(##\\d##)W*", "gm");
    text = reactStringReplace(text, inputRegex, (match, j) => {
      const ident = match.replace("##", "").replace("##", "");
      const cssId = !this.state.correctAnswers
        ? "cloze"
        : this.state.correctAnswers[ident] === false
        ? "cloze-incorrect"
        : "cloze-correct";
      return (
        <Input
          style={{ width: "25%", color: "green" }}
          size="mini"
          id={cssId}
          key={"inp" + ident}
          name={"inp#" + ident}
          className={"inp#" + ident}
        />
      );
    });
    return (
      <Segment
        style={{
          whiteSpace: "pre-line",
          overflowY: "auto",
          height: "79vh"
        }}
      >
        {text}
      </Segment>
    );
  }

  renderKeywordList() {
    if (this.props.activeTask.content[0].keywords == undefined) return;
    return (
      <Segment style={{ position: "fixed" }}>
        <List>{this.renderListElem()}</List>
      </Segment>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderText()}
        <div style={{ float: "right" }}>
          <Button color="green" onClick={() => this.solutionPrepare()}>
            {this.state.correctAnswers
              ? "Lösung abschicken"
              : "Lösung überprüfen"}
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
