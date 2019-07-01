import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { DragdropModel } from "../../../models/DragdropModel";
import {
  Button,
  Header,
  List,
  Image,
  Grid,
  Icon,
  Segment
} from "semantic-ui-react";

import Swal from "sweetalert2";

export default class TagView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
    this.view = null;
  }

  componentDidMount() {}
  renderListElem() {
    return this.props.activeTask.content[0].keywords.map((keyword, index) => {
      console.log("render elems");

      return (
        <List.Item as="a">
          <Icon name="help" />
          <List.Content>
            <List.Header>{keyword}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
  }
  renderText() {
    var textArr = this.props.activeTask.content[0].text.split(" ");
    console.log(textArr);
    for (var i in textArr) {
    }
    return <Segment>{this.props.activeTask.content[0].text}</Segment>;
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
