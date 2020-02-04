import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import { Route, Switch } from "react-router-dom";
import { Tokens } from "../../../api/tokens";
import { Courses } from "../../../api/courses";
import { Students } from "../../../api/students";
import { Tasks } from "../../../api/tasks";
import { Training } from "../../../api/training";
import { Package } from "../../../api/package";
import {
  Dropdown,
  Icon,
  Menu,
  Segment,
  Button,
  Responsive
} from "semantic-ui-react";
import StudentCourses from "./StudentCourses";
import StudentTopMenu from "./StudentTopMenu";
import GameOverview from "./game/Gameoverview";
import ClassRoom from "./game/ClassRoom";
import TeacherRoom from "./game/TeacherRoom";
import Office from "./game/Office";
import { TutorialHandler } from "../tutorials/TutorialHandler";
import Workspace from "./game/Workspace";
import Loading from "../Loading";
import TutorialComponent from "../tutorials/TutorialComponent";
export default class StudentOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null,
      activeTutorial: null,
      token: null,
      student: null
    };
    this.activeTutorial = React.createRef();
  }
  tutorialCheck() {
    console.log("testy");
    const { activeTutorial, student } = this.state;
    if (
      (student && !activeTutorial) ||
      (student && activeTutorial && student.tutorials.includes(activeTutorial))
    ) {
      var tutorial = TutorialHandler.checkForStudentTutorial(
        this.state.student
      );
      if (tutorial != this.state.activeTutorial)
        this.setState({
          activeTutorial: TutorialHandler.checkForStudentTutorial(
            this.state.student
          )
        });
    }
  }
  componentDidMount() {
    this.tutorialCheck();
    //Check responsive viewport

    <Responsive {...Responsive.onlyMobile} />;

    let studentHandle = Meteor.subscribe("student");
    let tokenHandle = Meteor.subscribe("tokenByUser");
    let coursesHandle = Meteor.subscribe("coursesByStudent");
    let taskHandle = Meteor.subscribe("tasks");
    let trainingHandle = Meteor.subscribe("training");
    let packageHandle = Meteor.subscribe("package");
    this.studentTracker = Tracker.autorun(() => {
      if (
        studentHandle.ready() &&
        tokenHandle.ready() &&
        coursesHandle.ready() &&
        taskHandle.ready() &&
        trainingHandle.ready() &&
        packageHandle.ready()
      ) {
        const student = Students.findOne();
        const token = Tokens.findOne();
        const givenCourses = Courses.find({}).fetch();
        const tasks = Tasks.find({}).fetch();
        const trainings = Training.find({}).fetch();
        const packages = Package.find({}).fetch();

        if (givenCourses.length == 0) {
          Meteor.call(
            "courses.getStudentCourses",
            token.token,
            student.studipUserId,
            (err, res) => {
              if (err) {
                console.log(err);
              } else {
                const courses = this.initCourses(
                  res,
                  student._id,
                  student.studipUserId
                );
              }
            }
          );
        }
        this.setState({
          student,
          token,
          courses: givenCourses,
          tasks,
          loading: false,
          trainings,
          packages
        });
      } else {
        if (!this.state.loading) {
          this.setState({ loading: true });
        }
      }
    });

    this.props.history.push("/student/game");
  }
  componentDidUpdate(prevProps, prevState) {
    this.tutorialCheck();

    console.log("update");
  }
  componentWillUnmount() {
    this.studentTracker.stop();
  }

  handleNextTask() {
    let student = this.state.student;

    if (
      !student.solvedTasks.find(elem => {
        return (
          elem.sequenceId.toString() === student.currentSequenceId.toString()
        );
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
      if (currentCourses.find(checkId => checkId === courses.data[i].id)) {
      } else {
        var change = true;
        Meteor.call("students.addCourse", courses.data[i].id, studentId);
      }
    }
    Meteor.call(
      "students.getStartedCourses",
      this.state.student.courses,
      (err, res) => {
        if (res) {
          if (!this.state.courses) {
            this.setState({ courses: res });
          }
        }
      }
    );
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
            render={props => (
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
            render={props => (
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
            render={props => (
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
            render={props => (
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
            render={props => (
              <StudentCourses
                courses={this.state.courses}
                tasks={this.state.tasks}
              />
            )}
          />
          <Route
            path="/student/workspace"
            render={props => (
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
      <React.Fragment>
        <StudentTopMenu
          history={this.props.history}
          courses={this.state.courses}
          student={this.state.student}
          activeTutorial={this.activeTutorial}
        />
        {this.renderRoutes()}
        {activeTutorial && (
          <TutorialComponent
            activeTutorial={activeTutorial}
            stopTutorial={() => {
              this.setState({ activeTutorial: null });
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

StudentOverview.propTypes = {
  studipCourses: PropTypes.array
};
