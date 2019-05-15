import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import MaslowView from "./MaslowView";
export default class TaskAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.view = null;
  }
  renderView() {
    if (this.props.activeTask) {
      //TODO render view dynamicly
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: this.props.activeTask,
        courses: this.props.courses
      };
      if (this.props.activeTask.taskId == "Maslow") {
        return <MaslowView {...taskProps} />;
      }
    }
  }
  render() {
    return <div> {this.renderView()} </div>;
  }
}
