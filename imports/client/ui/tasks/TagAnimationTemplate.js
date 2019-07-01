import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { DragdropModel } from "../../../models/DragdropModel";
import { Button, Header, Modal, Image, Grid } from "semantic-ui-react";

import Swal from "sweetalert2";
import TagView from "./TagView";

export default class TagAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTask: null
    };
    this.view = null;
  }

  componentDidMount() {}
  renderView() {
    if (this.props.activeTask.taskId == "Motivation_Intro") {
      return <TagView activeTask={this.props.activeTask} />;
    }
  }
  render() {
    return <div>{this.renderView()}</div>;
  }
}

TagAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
