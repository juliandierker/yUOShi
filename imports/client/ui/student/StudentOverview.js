import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";

import { Tokens } from "../../../api/tokens";
import { Courses } from "../../../api/courses";
import { Students } from "../../../api/students";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import StudentCourses from "./StudentCourses";
import StudentTopMenu from "./StudentTopMenu";

export default class StudentOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null,
      token: null,
      student: null
    };
  }
  componentDidMount() {
    let studentHandle = Meteor.subscribe("student");
    let tokenHandle = Meteor.subscribe("tokenByUser");
    // let coursesHandle = Meteor.subscribe("coursesByTeacher");

    this.teacherTracker = Tracker.autorun(() => {
      if (
        studentHandle.ready() &&
        tokenHandle.ready()
        // coursesHandle.ready()
      ) {
        const student = Students.findOne();
        const token = Tokens.findOne();
        const givenCourses = Courses.find({}).fetch();
        Meteor.call(
          "courses.getStudentCourses",
          token.token,
          student.studipUserId,
          (err, res) => {
            if (err) {
              console.log(err);
            } else {
              var studipCourses = res;
              const courses = this.loadCourses(res, student._id);

              this.setState({
                student,
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
  loadCourses(courses, studentId) {
    console.log(courses);
    if (courses.lengt > 0) {
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
  }

  render() {
    return (
      <div>
        <StudentTopMenu
          courses={this.state.courses}
          student={this.state.student}
        />
        <StudentCourses
          courses={this.state.courses}
          student={this.state.student}
        />
      </div>
    );
  }
}

StudentOverview.propTypes = {
  studipCourses: PropTypes.array
};
