import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";

import { Teachers } from "../../../api/teachers";
import { Tokens } from "../../../api/tokens";
import { Courses } from "../../../api/courses";

import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import TeacherCourses from "./TeacherCourses";
import TeacherTopMenu from "./TeacherTopMenu";

export default class TeacherOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null,
      token: null,
      teacher: null
    };
  }
  componentDidMount() {
    let teacherHandle = Meteor.subscribe("teacherByUserId");
    let tokenHandle = Meteor.subscribe("tokenByUser");
    let coursesHandle = Meteor.subscribe("coursesByTeacher");

    this.teacherTracker = Tracker.autorun(() => {
      if (
        teacherHandle.ready() &&
        tokenHandle.ready() &&
        coursesHandle.ready()
      ) {
        const teacher = Teachers.findOne();
        const token = Tokens.findOne();
        const givenCourses = Courses.find({}).fetch();
        Meteor.call(
          "courses.getTeacherCourses",
          token.token,
          teacher.studipUserId,
          (err, res) => {
            if (err) {
              console.log(err);
            } else {
              var studipCourses = res;
              const teacher = Teachers.findOne();
              const courses = this.loadCourses(res, teacher._id);

              this.setState({
                teacher,
                token,
                courses: givenCourses,
                loading: false
              });
            }
          }
        );
      } else {
        if (!this.state.loading) {
          this.setState({ loading: true });
        }
      }
    });
  }

  componentWillUnmount() {
    this.teacherTracker.stop();
  }
  loadCourses(courses, teacherId) {
    console.log(courses);

    for (var i in courses) {
      var targetCourse = courses[i].attributes;
      var exists = false;
      if (this.state.courses) {
        for (var j in this.state.courses) {
          console.log(courses[i].id);
          if (this.state.courses[j].studipId == courses[i].id) {
            exists = true;
          }
          if (!exists) {
            Meteor.call(
              "courses.insert",
              targetCourse.title,
              courses[i].id,
              teacherId
            );
          }
        }
      } else {
        Meteor.call(
          "courses.insert",
          targetCourse.title,
          courses[i].id,
          teacherId
        );
      }
    }
  }

  render() {
    return (
      <div>
        <TeacherTopMenu
          courses={this.state.courses}
          teacher={this.state.teacher}
        />
        <TeacherCourses courses={this.state.courses} />
      </div>
    );
  }
}

TeacherOverview.propTypes = {
  studipCourses: PropTypes.array
};
