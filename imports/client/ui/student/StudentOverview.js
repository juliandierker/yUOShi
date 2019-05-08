import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import { Route, Switch } from "react-router-dom";

import { Tokens } from "../../../api/tokens";
import { Courses } from "../../../api/courses";
import { Students } from "../../../api/students";
import { Tasks } from "../../../api/tasks";

import { Dropdown, Icon, Menu, Segment, Button } from "semantic-ui-react";
import StudentCourses from "./StudentCourses";
import StudentTopMenu from "./StudentTopMenu";
import GameOverview from "./game/Gameoverview";
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
    console.log("mouuunt");
    let studentHandle = Meteor.subscribe("student");
    let tokenHandle = Meteor.subscribe("tokenByUser");
    let coursesHandle = Meteor.subscribe("coursesByStudent");
    let taskHandle = Meteor.subscribe("tasks");

    this.teacherTracker = Tracker.autorun(() => {
      if (
        studentHandle.ready() &&
        tokenHandle.ready() &&
        coursesHandle.ready() &&
        taskHandle.ready()
      ) {
        const student = Students.findOne();
        const token = Tokens.findOne();
        const givenCourses = Courses.find({}).fetch();
        const tasks = Tasks.find({}).fetch();
        console.log(givenCourses);
        if (givenCourses.length == 0) {
          console.log("entered");
          Meteor.call(
            "courses.getStudentCourses",
            token.token,
            student.studipUserId,
            (err, res) => {
              if (err) {
                console.log(err);
              } else {
                console.log(res);
                const courses = this.initCourses(
                  res,
                  student._id,
                  student.studipUserId
                );
              }
            }
          );
        }
        this.setState({
          student,
          token,
          courses: givenCourses,
          tasks,
          loading: false
        });
      } else {
        if (!this.state.loading) {
          this.setState({ loading: true });
        }
      }
    });
  }
  componentDidUpdate(prev) {
    console.log(prev);
  }
  componentWillUnmount() {
    this.teacherTracker.stop();
  }
  initCourses(courses, studentId) {
    console.log(this.state);
    var currentCourses = this.state.student.courses;
    for (var i = 0; i < courses.data.length; i++) {
      if (currentCourses.find(checkId => checkId === courses.data[i].id)) {
      } else {
        var change = true;
        Meteor.call("students.addCourse", courses.data[i].id, studentId);
      }
    }
    Meteor.call(
      "students.getStartedCourses",
      this.state.student.courses,
      (err, res) => {
        if (res) {
          this.setState({ courses: res });
        }
      }
    );
  }
  startFreeGame() {
    console.log("testy");
    this.props.history.push("/student/game");
  }
  renderRoutes() {
    return (
      <Switch>
        <Route
          path="/student/game"
          render={props => (
            <GameOverview
              classrooms={this.state.classrooms}
              student={this.state.student}
              tasks={this.state.tasks}
              {...props}
            />
          )}
        />
        <Route
          path="/student/studentoverview"
          render={props => (
            <StudentCourses
              courses={this.state.courses}
              tasks={this.state.tasks}
            />
          )}
        />
      </Switch>
    );
  }

  render() {
    console.log("entered render");
    return (
      <div>
        <StudentTopMenu
          history={this.props.history}
          courses={this.state.courses}
          student={this.state.student}
        />
        {this.renderRoutes()}

        {/* <StudentCourses
          courses={this.state.courses}
          student={this.state.student}
        /> */}

        <div />
      </div>
    );
  }
}

StudentOverview.propTypes = {
  studipCourses: PropTypes.array
};
