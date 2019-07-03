import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";

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
    console.log("update");
    var sol = this.props.activeTask.content[0].keywords;
    console.log(sol);
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
        <List.Item as="a">
          {this.state.tags.includes(keyword) ? (
            <Icon color="green" name="check" />
          ) : (
            <Icon name="help" />
          )}

          <List.Content>
            <List.Header>{keyword}</List.Header>
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
        ReactDOM.render(<Label>{match}</Label>, elA[i]);
      }
    }
  }
  renderText() {
    var plainText = this.props.activeTask.content[0].text;
    var textArr = this.props.activeTask.content[0].text.split(" ");
    var keyArr = this.props.activeTask.content[0].keywords;
    console.log(keyArr);
    for (var i in textArr) {
      if (keyArr.includes(textArr[i])) {
        var replacerStr = keyArr[keyArr.indexOf(textArr[i])];
        // plainText = plainText.replace("positiv", {<p>testy</p>});
        plainText = reactStringReplace(plainText, replacerStr, (match, i) => (
          <span
            className={match}
            style={{ color: "black" }}
            onClick={() => this.handleClickTag(match)}
            key={match + i}
            href={match}
          >
            {match}
          </span>
        ));
      }
    }
    return <Segment>{plainText}</Segment>;
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
  render() {
    return <div>{this.renderView()}</div>;
  }
}
