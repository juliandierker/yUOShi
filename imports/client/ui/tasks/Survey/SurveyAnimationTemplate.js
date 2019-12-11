import React, { Component } from "react";
import SurveyView from "./SurveyView";

export default class SurverAnimationTemplate extends Component {
  render() {
    return (
      <React.Fragment>
        <SurveyView {...this.props} />
      </React.Fragment>
    );
  }
}
