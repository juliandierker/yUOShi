import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

export default class DragAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
    this.helpTasks = [];
    if (props.activeTask.type === "CodeAnalysis")
      this.state = {
        codeAnalysisSolution: Array(
          props.activeTask.content.numberOfChoices
        ).fill(false)
      };
  }
}
