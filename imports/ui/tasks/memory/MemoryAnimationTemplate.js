import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button, Header, Modal, Image, Icon, List } from "semantic-ui-react";

import Swal from "sweetalert2";

import MemoryView from "./MemoryView";

export default class MemoryAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
      solved: false
    };
    this.view = null;
  }

  solveTask() {
    Meteor.call("students.solveTask", this.props.student, this.state.currentTask);
    this.setState({ open: false });
  }
  renderView() {
    return (
      <MemoryView
        student={this.props.student}
        model={this.model}
        activeTask={this.props.activeTask}
      />
    );
  }
  render() {
    return <React.Fragment>{this.renderView()}</React.Fragment>;
  }
}

MemoryAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
