import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";

import { Teachers } from "../../../api/teachers";
import { Tokens } from "../../../api/tokens";
import { Courses } from "../../../api/courses";

export default class TeacherOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let teacherHandle = Meteor.subscribe("teacherByUserId");
    let tokenHandle = Meteor.subscribe("tokenByUser");
    let coursesHandle = Meteor.subscribe("coursesByTeacher");
    this.teacherTracker = Tracker.autorun(() => {
      if (teacherHandle.ready() && tokenHandle.ready()) {
        var teacher = Teachers.findOne();
        var token = Tokens.findOne();
        console.log(token);
        console.log(teacher);
        var courses = Meteor.call(
          "courses.getTeacherCourses",
          token.token,
          teacher.studipUserId,
          (err, res) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    });
  }

  componentWillUnmount() {
    this.teacherTracker.stop();
  }
  render() {
    return <div> Teacher </div>;
  }
}

TeacherOverview.propTypes = {
  studipCourses: PropTypes.array
};
