import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";

import { Students } from "../../api/students";
import { Tasks } from "../../api/tasks";
import { Package } from "../../api/package";
import { Courses } from "../../api/courses";

import Loading from "../Loading.js";
import StudentOverview from "./StudentOverview";

export const GameContext = React.createContext();
export const CourseContext = React.createContext();

const withStudent = withTracker(() => {
  const handles = [
    Meteor.subscribe("student"),
    Meteor.subscribe("tasks"),
    Meteor.subscribe("package"),
    Meteor.subscribe("coursesByStudent")
  ];

  const loading = handles.some((handle) => !handle.ready());
  const student = Students.findOne({ userId: Meteor.userId() });
  var gameInfo = {
    loading,
    student,
    tasks: null,
    packages: null
  };
  var courseInfo = {
    course: null,
    otherStudents: null
  };
  if (student) {
    gameInfo["tasks"] = Tasks.find({});
    gameInfo["packages"] = Package.find({}).fetch();
    // gameInfo["otherStudents"] = courses.filter((pupil) => pupil.userId != Meteor.userId());
    courseInfo["course"] = Courses.findOne({});
  }
  return { gameInfo, courseInfo };
});

function Provider(props) {
  const [page, setPage] = useState("schoolOverview");
  const gameInfo = { ...props.gameInfo, page, setPage };
  const courseInfo = { ...props.courseInfo };

  if (!gameInfo.student) {
    return <Loading />;
  }
  return (
    <GameContext.Provider value={gameInfo}>
      <CourseContext.Provider value={courseInfo}>
        <StudentOverview />
      </CourseContext.Provider>
    </GameContext.Provider>
  );
}

// initCourses(courses, studentId) {
//   var currentCourses = this.state.student.courses;
//   for (var i = 0; i < courses.data.length; i++) {
//     if (currentCourses.find((checkId) => checkId === courses.data[i].id)) {
//     } else {
//       var change = true;
//       Meteor.call("students.addCourse", courses.data[i].id, studentId);
//     }
//   }
//   Meteor.call("students.getStartedCourses", this.state.student.courses, (err, res) => {
//     if (res) {
//       if (!this.state.courses) {
//         this.setState({ courses: res });
//       }
//     }
//   });
// }

export default (StudentContextProvider = withStudent(Provider));
