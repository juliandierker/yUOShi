import React, { Component } from "react";
import PropTypes from "prop-types";

import { ClozeModel } from "../../../models/ClozeModel";

import ClozeView from "./ClozeView";

export default class ClozeAnimationTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTask: null
    };
    this.view = null;
    this.model = ClozeModel.getNewModel();
    this.model.init(props.student, props.activeTask);
  }

  renderView() {
    if (this.props.activeTask.type == "cloze") {
      return (
        <ClozeView
          student={this.props.student}
          model={this.model}
          activeTask={this.props.activeTask}
        />
      );
    }
  }

  render() {
    return <React.Fragment>{this.renderView()}</React.Fragment>;
  }
}

ClozeAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
