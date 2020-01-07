import React, { Component } from "react";
import SurveyView from "./SurveyView";

export default class SurverAnimationTemplate extends Component {
  handleSubmit(surveyData, callback) {
    Meteor.call(
      "solutionHandler.submitSurvey",
      surveyData,
      this.props.student._id,
      this.props.activeTask,
      (res, err) => {
        callback();
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <SurveyView
          {...this.props}
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </React.Fragment>
    );
  }
}
