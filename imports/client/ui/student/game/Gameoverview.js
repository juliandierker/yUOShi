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
  componentDidMount() {
    var tasks = this.props.tasks;
    if (!this.state.tasks) {
      this.setState({ tasks });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.tasks && !prevProps.tasks) {
      var tasks = this.props.tasks;
      this.setState({ tasks });
    }
  }

  handleGetTask(task) {
    if (this.props.student.tasks.length == 0) {
      Meteor.call("students.getTasks", task, this.props.student._id);
      this.props.history.push("/student/workspace");
    }
  }
  renderTracks() {
    if (this.state.tasks) {
      return this.state.tasks.map((task, index) => {
        return (
          <Card.Group>
            <Card>
              <Image
                src={"/tasks/" + task.filePrefix + "/" + task.taskId + ".jpg"}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{task.taskId}</Card.Header>
                <Card.Meta>
                  <span className="date">Zuweisung</span>
                </Card.Meta>
                <Card.Description>{task.description}</Card.Description>
              </Card.Content>
              <Button
                onClick={() => this.handleGetTask(task)}
                basic
                color="green"
              >
                Bearbeiten
              </Button>
              <Card.Content extra>
                <Icon name="expand arrows alternate" />
                {task.credits}
              </Card.Content>
            </Card>
          </Card.Group>
        );
      });
    } else {
      return <Loading />;
    }
  }
  render() {
    return <div>{this.renderTracks()}</div>;
  }
}

Gameoverview.propTypes = {
  tasks: PropTypes.array
};
