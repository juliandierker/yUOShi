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
    console.log(this.props);
    return this.props.tasks.map(task => {
      return (
        <Card.Group>
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      );
    });
  }
  render() {
    return <div>{this.renderTracks(this.props.tracks)}</div>;
  }
}

Gameoverview.propTypes = {
  tasks: PropTypes.array
};
