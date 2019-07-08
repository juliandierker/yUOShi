import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { TagModel } from "../../../models/TagModel";
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
    this.model = TagModel.getNewModel();
    this.model.init(props.student, props.activeTask);
  }

  componentDidMount() {}
  renderView() {
    if (this.props.activeTask.taskId == "Motivation_Intro") {
      return (
        <TagView
          student={this.props.student}
          model={this.model}
          activeTask={this.props.activeTask}
        />
      );
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
