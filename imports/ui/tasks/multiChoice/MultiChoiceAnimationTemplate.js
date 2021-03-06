import React, { Component } from "react";

import { MultiChoiceModel } from "../../../models/MultiChoiceModel";

import MultiChoiceView from "./MultiChoiceView";

export default class MultiChoiceAnimationTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTask: null
    };
    this.view = React.createRef();
    this.model = MultiChoiceModel.getNewModel();
    this.model.init(props.student, props.activeTask);
  }

  renderView() {
    return (
      <MultiChoiceView
        handleNextTask={this.props.handleNextTask}
        student={this.props.student}
        model={this.model}
        activeTask={this.props.activeTask}
        renderNextStep={this.props.renderNextStep}
        ref={this.view}
      />
    );
  }
  render() {
    return <React.Fragment>{this.renderView()}</React.Fragment>;
  }
}
