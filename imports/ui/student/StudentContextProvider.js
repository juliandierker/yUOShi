import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import React from "react";

import { Students } from "../../api/students";
import { Tasks } from "../../api/tasks";
import { Package } from "../../api/package";
import { Courses } from "../../api/courses";

import StudentOverview from "./StudentOverview";

export const GameContext = React.createContext();
export const CourseContext = React.createContext();

export default class StudentContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "StudentOverview"
    };
  }
  trackStudent() {
    console.log("entered");
    let student = null;
    let course = null;

    this.studentTracker = Tracker.autorun(() => {
      let studentHandle = Meteor.subscribe("student");
      let taskHandle = Meteor.subscribe("tasks");
      let packageHandle = Meteor.subscribe("package");
      let studentCoursesHandle = Meteor.subscribe("coursesByStudent");

      if (
        studentHandle.ready() &&
        taskHandle.ready() &&
        packageHandle.ready() &&
        studentCoursesHandle.ready()
      ) {
        student = Students.findOne({ userId: Meteor.userId() });
        course = Courses.findOne({});
      }
      if (student) {
        console.log("ever?????");
        this.setState({ student, tasks: null, package: null, course, otherStudents: null });
      }
    });
  }
  componentDidMount() {
    this.trackStudent();
  }
  componentWillUnmount() {
    this.studentTracker.stop();
  }
  render() {
    return (
      <GameContext.Provider value={this.state}>
        <CourseContext.Provider value={this.state}>
          <StudentOverview />
        </CourseContext.Provider>
      </GameContext.Provider>
    );
  }
}

// export default (StudentContextProvider = withStudent(Provider));
