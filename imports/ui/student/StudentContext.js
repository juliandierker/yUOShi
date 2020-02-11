import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";

import { Students } from "../../api/students";
import { Tasks } from "../../api/tasks";
import { Package } from "../../api/package";
import { Courses } from "../../api/courses";

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
  const course = Courses.findOne({});
  var gameInfo = {
    loading,
    student,
    tasks: null,
    package: null
  };
  var courseInfo = {
    course,
    otherStudents: null
  };
  if (student) {
    //TODO get other course students
    // courseInfo.otherStudents =
  }
  return { gameInfo, courseInfo };
});
function Provider(props) {
  const [page, setPage] = useState("StudentOverview");
  const gameInfo = { ...props.gameInfo, page, setPage };
  const classInfo = { ...props.classInfo };
  return (
    <GameContext.Provider value={gameInfo}>
      <CourseContext.Provider value={classInfo}>
        <StudentOverview />
      </CourseContext.Provider>
    </GameContext.Provider>
  );
}

export default (StudentContextProvider = withStudent(Provider));
