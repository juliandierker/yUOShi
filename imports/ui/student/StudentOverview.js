import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import { Route, Switch } from "react-router-dom";
import { Tokens } from "../../api/tokens.js";
import { Courses } from "../../api/courses";
import { Students } from "../../api/students.js";
import { Tasks } from "../../api/tasks";
import { Training } from "../../api/training";
import { Package } from "../../api/package";
import { Dropdown, Icon, Menu, Segment, Button, Responsive } from "semantic-ui-react";
import StudentCourses from "./StudentCourses";
import StudentTopMenu from "./StudentTopMenu";
import GameOverview from "./game/Gameoverview";
import ClassRoom from "./vektors/ClassRoom";
import TeacherRoom from "./vektors/TeacherRoom";
import Office from "./vektors/Office";
import { TutorialHandler } from "../tutorials/TutorialHandler";
import Workspace from "./game/Workspace";
import Loading from "../Loading";
import TutorialComponent from "../tutorials/TutorialComponent";
import { GameContext, CourseContext } from "./StudentContextProvider";

export default class StudentOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTutorial: null
    };
  }
  tutorialCheck() {
    const { activeTutorial, student } = this.state;
    if (
      (student && !activeTutorial) ||
      (student && activeTutorial && student.tutorials.includes(activeTutorial))
    ) {
      var tutorial = TutorialHandler.checkForStudentTutorial(this.state.student);
      if (tutorial != this.state.activeTutorial)
        this.setState({
          activeTutorial: TutorialHandler.checkForStudentTutorial(this.state.student)
        });
    }
  }
  componentDidMount() {
    this.activeTutorial = React.createRef();
    this.tutorialCheck();
    //Check responsive viewport

    <Responsive {...Responsive.onlyMobile} />;
  }
  componentDidUpdate(prevProps, prevState) {
    this.tutorialCheck();
  }

  handleNextTask() {
    let student = this.state.student;

    if (
      !student.solvedTasks.find((elem) => {
        return elem.sequenceId.toString() === student.currentSequenceId.toString();
      })
    ) {
      Meteor.call(
        "students.getNextTask",
        student.currentPackage[0].name,
        student.currentSequenceId,
        student._id,
        (err, res) => {
          if (res) {
            this.props.history.push("/student/workspace");
          }
        }
      );
    }
  }

  initCourses(courses, studentId) {
    var currentCourses = this.state.student.courses;
    for (var i = 0; i < courses.data.length; i++) {
      if (currentCourses.find((checkId) => checkId === courses.data[i].id)) {
      } else {
        var change = true;
        Meteor.call("students.addCourse", courses.data[i].id, studentId);
      }
    }
    Meteor.call("students.getStartedCourses", this.state.student.courses, (err, res) => {
      if (res) {
        if (!this.state.courses) {
          this.setState({ courses: res });
        }
      }
    });
  }
  startFreeGame() {
    this.props.history.push("/student/game");
  }
  renderRoutes() {
    if (this.state.courses && this.state.student && this.state.tasks) {
      return (
        <Switch>
          <Route
            path="/student/game"
            render={(props) => (
              <GameOverview
                courses={this.state.courses}
                student={this.state.student}
                tasks={this.state.tasks}
                trainings={this.state.trainings}
                packages={this.state.packages}
                {...props}
                ref={this.activeTutorial}
              />
            )}
          />
          <Route
            path="/student/classroom"
            render={(props) => (
              <ClassRoom
                courses={this.state.courses}
                student={this.state.student}
                tasks={this.state.tasks}
                trainings={this.state.trainings}
                packages={this.state.packages}
                {...props}
              />
            )}
          />
          <Route
            path="/student/office"
            render={(props) => (
              <Office
                courses={this.state.courses}
                student={this.state.student}
                tasks={this.state.tasks}
                trainings={this.state.trainings}
                packages={this.state.packages}
                {...props}
              />
            )}
          />
          <Route
            path="/student/teacherRoom"
            render={(props) => (
              <TeacherRoom
                courses={this.state.courses}
                student={this.state.student}
                tasks={this.state.tasks}
                trainings={this.state.trainings}
                packages={this.state.packages}
                {...props}
              />
            )}
          />
          <Route
            // TODO: Is that even used?
            path="/student/studentoverview"
            render={(props) => (
              <StudentCourses courses={this.state.courses} tasks={this.state.tasks} />
            )}
          />
          <Route
            path="/student/workspace"
            render={(props) => (
              <Workspace
                history={this.props.history}
                student={this.state.student}
                handleNextTask={this.handleNextTask.bind(this)}
                courses={this.state.courses}
                tasks={this.state.tasks}
                trainings={this.state.trainings}
              />
            )}
          />
        </Switch>
      );
    } else {
      return <Loading />;
    }
  }

  render() {
    const { activeTutorial } = this.state;
    return (
      <GameContext.Consumer>
        {(context) => (
          <React.Fragment>
            <StudentTopMenu />
            {/* {this.renderRoutes()} */}
            {activeTutorial && (
              <TutorialComponent
                activeTutorial={activeTutorial}
                stopTutorial={() => {
                  this.setState({ activeTutorial: null });
                }}
              />
            )}
          </React.Fragment>
        )}
      </GameContext.Consumer>
    );
  }
}

StudentOverview.contextType = { GameContext, CourseContext };

StudentOverview.propTypes = {
  studipCourses: PropTypes.array
};
