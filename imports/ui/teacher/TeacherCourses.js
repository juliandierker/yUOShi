import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../../Loading";
import { Button, Card, Image, Label, Grid } from "semantic-ui-react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

import TrackOverview from "../mentorsession/TrackOverview";
import { createBrowserHistory } from "history";

import { Courses } from "../../../../api/courses";
export default class TeacherCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startMenuId: null,
      courses: null
    };
  }
  handleCourseClick(course) {
    const browserHistory = createBrowserHistory();

    if (course.started) {
      this.props.history.push(
        "/teacher/" + course.courseName + "/trackoverview"
      );
    } else if (this.state.startMenuId != course._id) {
      this.setState({ startMenuId: course._id });
    } else {
      Meteor.call("courses.start", course._id);

      this.props.history.push(
        "/teacher/" + course.courseName + "/trackoverview"
      );
    }
  }
  handleChange(param) {}

  renderStartMenu(courseId) {
    if (courseId == this.state.startMenuId) {
      return <Label pointing="left">Erneut klicken los geht's!</Label>;
    }
  }
  renderCourses(courses) {
    if (courses) {
      return courses.map(course => {
        return <Card.Group>{this.renderCard(course)}</Card.Group>;
      });
    } else {
      return (
        <div>
          <h3> Kurse werden geladen... </h3>
          <Loading />
        </div>
      );
    }
  }
  renderCard(course) {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Card className="course_card">
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/courses/studip_logo.png"
                  />
                  <Card.Header>{course.courseName}</Card.Header>
                  <Card.Meta>
                    {"Teilnehmer: " + course.students.length}
                  </Card.Meta>
                  <Card.Description>
                    {course.started ? "Spiel verwalten" : "Spiel starten"}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div>
                    <Button
                      onClick={() => this.handleCourseClick(course)}
                      animated
                    >
                      <Button.Content visible>
                        {course.started ? "Verwalten" : "Spiel starten"}
                      </Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={5}>
              {this.renderStartMenu(course._id)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  render() {
    return <div>{this.renderCourses(this.props.courses)}</div>;
  }
}

TeacherCourses.propTypes = {
  courses: PropTypes.array
};
