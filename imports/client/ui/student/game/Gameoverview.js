import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../../Loading";
import { Button, Card, Image } from "semantic-ui-react";

import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

import StudentTopMenu from "../StudentTopMenu";
export default class Gameoverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: null
    };
  }
  renderTracks() {
    return <p> tracks </p>;
  }
  render() {
    return <div>{this.renderTracks(this.props.tracks)}</div>;
  }
}

Gameoverview.propTypes = {
  tasks: PropTypes.array
};
