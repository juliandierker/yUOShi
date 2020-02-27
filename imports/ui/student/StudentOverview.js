import React, { useContext, useState, useEffect, useRef } from "react";
import { Dropdown, Icon, Menu, Segment, Button, Responsive } from "semantic-ui-react";

import StudentCourses from "./StudentCourses";
import StudentTopMenu from "./StudentTopMenu";
import SchoolOverview from "./game/SchoolOverview";
import ClassRoom from "./game/ClassRoom";
import TeacherRoom from "./game/TeacherRoom";
import Office from "./game/Office";

import { TutorialHandler } from "../tutorials/TutorialHandler";

import Workspace from "./game/Workspace";
import Loading from "../Loading.js";
import TutorialComponent from "../tutorials/TutorialComponent";

import { GameContext, CourseContext } from "./StudentContextProvider";
import { usePrevious } from "../../shared/customHooks";
import LoggingOut from "../LogginOut.js";

export default function StudentOverview() {
  const { loading, student, tasks, page } = useContext(GameContext);
  const { course, otherStudents } = useContext(CourseContext);
  const [loggingOut, setLoggingOut] = useState(false);
  const [activeTutorial, setActiveTutorial] = useState(false);
  const prevStudent = usePrevious(student);
  let tutorial = tutorialCheck();

  useEffect(() => {
    if (prevStudent && prevStudent.tutorials.length < student.tutorials.length) {
      setActiveTutorial(tutorialCheck(student, activeTutorial));
    }
  }, [activeTutorial, prevStudent, student]);

  function tutorialCheck(student, activeTutorial) {
    if (
      (student && !activeTutorial) ||
      (student && activeTutorial && student.tutorials.includes(activeTutorial))
    ) {
      var tutorial = TutorialHandler.checkForStudentTutorial(this.state.student);
      if (tutorial != this.state.activeTutorial)
        return TutorialHandler.checkForStudentTutorial(this.state.student);
    }
  }

  function renderRoutes() {
    console.log("page");
    if (loggingOut) {
      return <LoggingOut />;
    } else if (page === "schoolOverview") {
      return <SchoolOverview tutorial={tutorial} />;
    } else if (page === "workspace") {
      return <Workspace />;
    } else if (page === "teacherRoom") {
      return <TeacherRoom />;
    } else if (page === "office") {
      return <Office />;
    } else if (page === "classroom") {
      return <ClassRoom />;
    }
  }

  if (loading) {
    return <Loading loadingText={"Seite lädt..."} />;
  } else {
    return (
      <div className="student__body">
        <StudentTopMenu
          student={student}
          setLoggingOut={setLoggingOut}
          activeTutorial={activeTutorial}
        />
        {renderRoutes()}
        {activeTutorial && <TutorialComponent activeTutorial={activeTutorial} />}
      </div>
    );
  }
}
// handleNextTask() {
//   let student = this.state.student;
//
//   if (
//     !student.solvedTasks.find((elem) => {
//       return elem.sequenceId.toString() === student.currentSequenceId.toString();
//     })
//   ) {
//     Meteor.call(
//       "students.getNextTask",
//       student.currentPackage[0].name,
//       student.currentSequenceId,
//       student._id,
//       (err, res) => {
//         if (res) {
//           this.props.history.push("/student/workspace");
//         }
//       }
//     );
//   }
// }
