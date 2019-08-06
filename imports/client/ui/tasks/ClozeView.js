import React, { Component } from "react";
import { Segment, Input, Button, List, Icon, Grid } from "semantic-ui-react";
import reactStringReplace from "react-string-replace";
import { Meteor } from "meteor/meteor";

export default class Clozeview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      correctAnswers: null,
      keywords: []
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
    let re = new RegExp("W*(##\\d##)W*", "gm");
    text = reactStringReplace(text, re, (match, j) => {
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
    return <Segment style={{ whiteSpace: "pre-line" }}>{text}</Segment>;
  }

  renderKeywordList() {
    return (
      <Segment style={{ position: "fixed" }}>
        <List>{this.renderListElem()}</List>
      </Segment>
    );
  }

  getTaskImage() {}

  render() {
    return (
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column id="column_left">
              <Grid.Row>{this.getTaskImage()}</Grid.Row>
              {this.renderKeywordList()}
            </Grid.Column>
            <Grid.Column style={{ width: "70%" }}>
              {this.renderText()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div style={{ float: "right" }}>
          <Button color="green" onClick={() => this.solutionPrepare()}>
            Lösung überprüfen
          </Button>
        </div>
      </div>
    );
  }
}
