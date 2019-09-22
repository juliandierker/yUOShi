import React, { Component } from "react";
import PropTypes from "prop-types";

import { MultiChoiceModel } from "../../../models/MultiChoiceModel";

import MultiChoiceView from "./MultiChoiceView";

export default class MultiChoiceAnimationTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTask: null
    };
    this.view = null;
    this.model = MultiChoiceModel.getNewModel();
    this.model.init(props.student, props.activeTask);
  }

  renderView() {
    console.log(this.props.activeTask);
    return (
      <MultiChoiceView
        handleNextTask={this.props.handleNextTask}
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
