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
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "Geschafft",
        timer: 1500
      });
    }
  }
  renderListElem() {
    return this.props.activeTask.content[0].keywords.map((keyword, index) => {
      return (
        <List.Item key={keyword + index} as="a">
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
  handleClickTag(match) {
    var elA = document.getElementsByClassName(match);
    if (!this.state.tags.includes(match)) {
      var tags = this.state.tags;
      tags.push(match);
      this.setState({ tags });
      for (var i in elA) {
        console.log(elA[i]);
        console.log(match);
        ReactDOM.render(<Label>{match}</Label>, elA[i]);
      }
    }
  }
  renderText() {
    var plainText = this.props.activeTask.content[0].text;
    var textArr = this.props.activeTask.content[0].text.split(" ");
    var keyArr = this.props.activeTask.content[0].keywords;
    let tmpKey = 0;
    for (var i = 0; i < textArr.length; i++) {
      if (keyArr.includes(textArr[i])) {
        var replacerStr = keyArr[keyArr.indexOf(textArr[i])];
        plainText = reactStringReplace(plainText, replacerStr, (match, j) => {
          tmpKey++;
          return (
            <span
              key={"textSpan" + tmpKey}
              className={match}
              style={{ color: "black", lineHeight: "2" }}
              onClick={() => this.handleClickTag(match)}
              href={match}
            >
              {match}
            </span>
          );
        });
      }
    }
    return <Segment id="defTextReader">{plainText}</Segment>;
  }
  renderTaglist() {
    return <List>{this.renderListElem()}</List>;
  }

  renderView() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column id="column_left">{this.renderTaglist()}</Grid.Column>
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
    return (
      <div>
        <Button onClick={() => this.solutionPrepare()}>Aufgabe lösen</Button>
        {this.renderView()}
        {this.renderVideo()}
      </div>
    );
  }
}
