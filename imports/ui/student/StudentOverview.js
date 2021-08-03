import React, { useContext, useState, useEffect } from "react";

import StudentTopMenu from "./StudentTopMenu";
import SchoolOverview from "./game/SchoolOverview";
import ClassRoom from "./game/ClassRoom";
import TeacherRoom from "./game/TeacherRoom";
import Office from "./game/Office";
import ReadingTaskTemplate from "../tasks/reading/ReadingTaskTemplate";
import { TutorialHandler } from "../tutorials/TutorialHandler";

import Workspace from "./Workspace";
import Loading from "../Loading.js";
import TutorialComponent from "../tutorials/TutorialComponent";

import { GameContext } from "./StudentContextProvider";

import { usePrevious } from "../../shared/customHooks";
import LoggingOut from "../LoggingOut.js";
import { PackagesContextProvider, usePackagesContext } from "./PackagesContext";
import { StationsContextProvider } from "./StationsContext";

function RenderStudentOverview() {
  const { loading, student, page } = useContext(GameContext);
  const [loggingOut, setLoggingOut] = useState(false);
  const [activeTutorial, setActiveTutorial] = useState(false);
  const prevStudent = usePrevious(student);
  let tutorial = tutorialCheck();
  const { currentPackage, learningObjectives } = usePackagesContext();
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
    if (loggingOut) {
      return <LoggingOut />;
    } else if (page === "schoolOverview") {
      return <SchoolOverview tutorial={tutorial} />;
    } else if (page === "workspace") {
      return (
        <StationsContextProvider
          learningObjectives={learningObjectives}
          currentPackageId={currentPackage.id}>
          <Workspace />
        </StationsContextProvider>
      );
    } else if (page === "teacherRoom") {
      return <TeacherRoom />;
    } else if (page === "office") {
      return <Office />;
    } else if (page === "classroom") {
      return <ClassRoom />;
    } else if (page === "testWorkspace") {
      return <ReadingTaskTemplate />;
    }
  }

  if (loading) {
    return <Loading loadingText={"Seite lädt..."} />;
  } else {
    return (
      <React.Fragment>
        <StudentTopMenu
          student={student}
          setLoggingOut={setLoggingOut}
          activeTutorial={activeTutorial}
        />
        <div className="student__body">
          {renderRoutes()}
          {activeTutorial && <TutorialComponent activeTutorial={activeTutorial} />}
        </div>
      </React.Fragment>

    );
  }
}

const StudentOverview = (props) => {
  return (
    <PackagesContextProvider>
      <RenderStudentOverview {...props} />
    </PackagesContextProvider>
  );
};

export default StudentOverview;
