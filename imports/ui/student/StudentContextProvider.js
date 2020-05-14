import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import React, { useState } from "react";

import Loading from "../Loading.js";
import StudentOverview from "./StudentOverview";

export const GameContext = React.createContext();
export const TaskContext = React.createContext();

function Provider(props) {
  const [page, setPage] = useState("schoolOverview");
  const gameInfo = { ...props.gameInfo, page, setPage };
  if (!gameInfo.page) {
    return <Loading />;
  }
  return (
    <GameContext.Provider value={gameInfo}>
      <StudentOverview />
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

export default (StudentContextProvider = Provider);
