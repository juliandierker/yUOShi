import React, { Component } from "react";
import { Segment, Input, Button } from "semantic-ui-react";
import reactStringReplace from "react-string-replace";
import { Meteor } from "meteor/meteor";

export default class Clozeview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctAnswers: null
    };
  }
  solutionPrepare() {
    let solutionValues = [];
    let el = document.querySelectorAll('[name^="inp#"]');
    for (let i = 0; i < el.length; i++) {
      solutionValues.push(el[i].value);
    }

    const meteorMethod =
      "solutionHandler.submit" + this.props.activeTask.filePrefix;
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

  renderText() {
    let text = this.props.activeTask.content[0].text;
    let re = new RegExp("W*(##\\d##)W*", "gm");
    text = reactStringReplace(text, re, (match, j) => {
      const ident = match.replace("##", "").replace("##", "");
      const cssId = !this.state.correctAnswers
        ? "cloze"
        : this.state.correctAnswers[ident] == false
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
    return <Segment style={{ whiteSpace: "pre-line" }}>{text}</Segment>;
  }

  render() {
    return (
      <div style={{ width: "70%", margin: "auto" }}>
        {this.renderText()}
        <div style={{ float: "right" }}>
          <Button color="green" onClick={() => this.solutionPrepare()}>
            Lösung überprüfen
          </Button>
        </div>
      </div>
    );
  }
}
