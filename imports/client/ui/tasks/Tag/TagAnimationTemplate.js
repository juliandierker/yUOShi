import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { TagModel } from "../../../../models/TagModel";

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

  solutionPrepare() {
    var sol = this.model.run(this.props.finishedKeywords);
    if (
      (sol && sol[0].includes("won")) ||
      this.props.activeTask.content[0].keywords.length === 0
    ) {
      var meteorMethod =
        "solutionHandler.submit" + this.props.activeTask.filePrefix;
      Meteor.call(
        meteorMethod,
        this.props.finishedKeywords,
        this.props.student._id,
        this.props.activeTask,
        (err, res) => {
          if (res) {
            Swal.fire({
              position: "top-end",
              type: "success",
              title: "Geschafft",
              timer: 1500
            });
          }
        }
      );
    } else {
      Swal.fire({
        position: "top-end",
        type: "warning",
        title: "Die Lösung ist noch nicht korrekt.",
        timer: 1500
      });
    }
  }

  render() {
    return (
      <TagView
        externUpdate={this.props.externUpdate}
        student={this.props.student}
        activeTask={this.props.activeTask}
      />
    );
  }
}

TagAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
