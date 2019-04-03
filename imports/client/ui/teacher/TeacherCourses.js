import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../Loading";
import { Button, Card, Image } from "semantic-ui-react";

import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

export default class TeacherCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null
    };
  }
  handleCourseClick(course) {
    console.log(course.started);
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
      <Card>
        <Card.Content>
          <Image floated="right" size="mini" src="/courses/studip_logo.png" />
          <Card.Header>{course.courseName}</Card.Header>
          <Card.Meta>{"Teilnehmer: " + course.students.length}</Card.Meta>
          <Card.Description>
            {course.started ? "Spiel verwalten" : "Spiel starten"}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <Button onClick={() => this.handleCourseClick(course)} animated>
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
    );
  }

  render() {
    return <div>{this.renderCourses(this.props.courses)}</div>;
  }
}

TeacherCourses.propTypes = {
  courses: PropTypes.array
};
