import React from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";

import { Teachers } from "../../api/teachers.js";
import { Courses } from "../../api/courses";
import { Route, Switch } from "react-router-dom";

import TeacherCourses from "./TeacherCourses";
import TeacherTopMenu from "./TeacherTopMenu";
import PromisifiedMeteor from "../../api/promisified";
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
    let coursesHandle = Meteor.subscribe("coursesByTeacher");

    this.teacherTracker = Tracker.autorun(async () => {
      if (teacherHandle.ready() && coursesHandle.ready()) {
        // const token = Tokens.findOne();
        const givenCourses = Courses.find({}).fetch();

        const res = await PromisifiedMeteor.call("courses.getTeacherCourses")

        const teacher = Teachers.findOne();

        this.setState({
          teacher,
          courses: givenCourses,
          loading: false
        }, () => {
          // TODO: this may also be done on server side!
          this.loadCourses(res, teacher._id);
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
    courses.filter(course => {
      if (!this.state.courses) {
        return true
      }

      return !this.state.courses.find(item => item.studipId === course.id)
    }).forEach(course => {
      Meteor.call(
          "courses.insert",
          course.title,
          course.id,
          teacherId
      );
    })
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
