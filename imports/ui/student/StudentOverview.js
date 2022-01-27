import React, { useContext, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Loading from "../Loading.js";
import ClassRoom from "./game/ClassRoom";
import Office from "./game/Office";
import SchoolOverview from "./game/SchoolOverview";
import TeacherRoom from "./game/TeacherRoom";
import { PackagesContextProvider, usePackagesContext } from "./PackagesContext";
import { StationsContextProvider } from "./StationsContext";
import StudentTopMenu from "./StudentTopMenu";
import Workspace from "./Workspace";

function RenderStudentOverview(props) {
  const [loggingOut, setLoggingOut] = useState(false);
  const { packagesLoading, currentPackage, learningObjectives } = usePackagesContext();
  function renderRoutes() {
    return (
      <Switch>
        <Route exact path="/student" render={() => <SchoolOverview {...props} />} />
        <Route
          exact
          path="/student/workspace"
          render={() => {
            return (
              <StationsContextProvider
                learningObjectives={learningObjectives}
                currentPackageId={currentPackage?.id}>
                <Workspace />
              </StationsContextProvider>
            );
          }}
        />
        <Route exact path="/student/classroom" render={() => <ClassRoom />} />
        <Route exact path="/student/teacherRoom" render={() => <TeacherRoom />} />
        <Route exact path="/student/office" render={() => <Office />} />
        <Route>
          <Redirect to="/student" />
        </Route>
      </Switch>
    );
  }

  return (
    <React.Fragment>
      <StudentTopMenu setLoggingOut={setLoggingOut} />
      {packagesLoading && <Loading />}
      {!packagesLoading && <div className="student__body">{renderRoutes()}</div>}
    </React.Fragment>
  );
}

const StudentOverview = (props) => {
  return (
    <PackagesContextProvider>
      <RenderStudentOverview {...props} />
    </PackagesContextProvider>
  );
};

export default StudentOverview;
