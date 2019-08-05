import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";
import ReactPlayer from "react-player";

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

export default class TagView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      tags: [],
      finished: false
    };
    this.view = null;
  }

  componentDidUpdate(prevProps, prevState) {
    var sol = this.props.activeTask.content[0].keywords;

    if (sol.length == this.state.tags.length) {
      if (!this.state.finished) {
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
  handleClickTag(match, key) {
    var el = document.getElementsByClassName(match);
    var highlighted = document.getElementById(match + key);

    if (!this.state.tags.includes(match)) {
      var tags = this.state.tags;
      tags.push(match);
      this.setState({ tags });
      for (var i = 0; i < el.length; i++) {
        if (el[i] === highlighted) {
          ReactDOM.render(<Label key={match + i}>{match}</Label>, el[i]);
        } else {
          ReactDOM.render(
            <strong style={{ color: "#585858" }} key={match + i}>
              {match}
            </strong>,
            el[i]
          );
        }
      }
    }
  }
  renderText() {
    var plainText = this.props.activeTask.content[0].text;
    var keyArr = this.props.activeTask.content[0].keywords;
    let tmpKey = 0;
    for (var i in keyArr) {
      const replacerStr = keyArr[i];
      var re = new RegExp("(?:" + replacerStr + ")(\\W)", "g");
      var plainText = reactStringReplace(plainText, re, (match, j) => {
        tmpKey++;
        const k = tmpKey;
        return (
          <React.Fragment key={"textFragment" + tmpKey}>
            {" "}
            <span
              key={"textSpan" + tmpKey}
              className={replacerStr}
              id={replacerStr + k}
              style={{ color: "black", lineHeight: "2" }}
              onClick={() => this.handleClickTag(replacerStr, k)}
            >
              {replacerStr}
            </span>
            {match}
          </React.Fragment>
        );
      });
    }
    return (
      <Segment
        id="defTextReader"
        style={{ maxWidth: "125%", whiteSpace: "pre-line" }}
      >
        {plainText}
      </Segment>
    );
  }
  renderTaglist() {
    return (
      <Segment style={{ position: "fixed" }}>
        <List>{this.renderListElem()}</List>
      </Segment>
    );
  }
  getTaskImage() {}
  renderView() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column id="column_left">
            <Grid.Row>{this.getTaskImage()}</Grid.Row>
            {this.renderTaglist()}
          </Grid.Column>
          <Grid.Column>{this.renderText()}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  solutionPrepare() {
    var sol = this.props.model.run(this.state.tags);
    if (sol && sol[0].includes("won")) {
      var meteorMethod =
        "solutionHandler.submit" + this.props.activeTask.filePrefix;
      Meteor.call(
        meteorMethod,
        this.state.tags,
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
    } else {
      Swal.fire({
        position: "top-end",
        type: "warning",
        title: "Die Lösung ist noch nicht korrekt.",
        timer: 1500
      });
    }
  }
  renderVideo() {
    if (this.props.activeTask.video) {
      return <ReactPlayer url={this.props.activeTask.video} playing />;
    }
  }
  render() {
    //TODO: Check if all tags are tagged

    const buttonDisabled = this.state.finished ? false : true;
    const buttonColor = this.state.finished ? "green" : "grey";
    return (
      <div>
        {this.renderView()}
        {this.renderVideo()}
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
          Weiter
        </Button>
      </div>
    );
  }
}
