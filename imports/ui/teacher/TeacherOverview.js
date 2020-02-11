import React from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";

import { Teachers } from "../../api/teachers.js";
import { Tokens } from "../../api/tokens";
import { Courses } from "../../api/courses";
import { Route, Switch } from "react-router-dom";

import TeacherCourses from "./TeacherCourses";
import TeacherTopMenu from "./TeacherTopMenu";
import TrackOverview from "./TrackOverview.js";

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
      if (teacherHandle.ready() && tokenHandle.ready() && coursesHandle.ready()) {
        const teacher = Teachers.findOne();
        const token = Tokens.findOne();
        const givenCourses = Courses.find({}).fetch();
        Meteor.call("courses.getTeacherCourses", token.token, teacher.studipUserId, (err, res) => {
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
        });
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
    for (var i in courses) {
      var targetCourse = courses[i].attributes;
      var exists = false;
      if (this.state.courses) {
        for (var j in this.state.courses) {
          if (this.state.courses[j].studipId == courses[i].id) {
            exists = true;
          }
          if (!exists) {
            Meteor.call("courses.insert", targetCourse.title, courses[i].id, teacherId);
          }
        }
      } else {
        Meteor.call("courses.insert", targetCourse.title, courses[i].id, teacherId);
      }
    }
  }
  renderRoutes() {
    return (
      <Switch>
        <Route
          path="/teacher/:class/trackoverview"
          render={(props) => (
            <TrackOverview
              classrooms={this.state.classrooms}
              teacher={this.state.teacher}
              companies={this.state.companies}
              pupils={this.state.pupils}
              {...props}
            />
          )}
        />
        <Route
          path="/teacher/teacheroverview"
          render={(props) => (
            <TeacherCourses courses={this.state.courses} history={this.props.history} />
          )}
        />
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <TeacherTopMenu courses={this.state.courses} teacher={this.state.teacher} />
        {this.renderRoutes()}
      </div>
    );
  }
}

TeacherOverview.propTypes = {
  studipCourses: PropTypes.array
};
