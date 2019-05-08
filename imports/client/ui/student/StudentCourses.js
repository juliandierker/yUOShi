import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../Loading";
import { Button, Card, Image } from "semantic-ui-react";

import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

import StudentTopMenu from "./StudentTopMenu";
export default class StudentCourses extends React.Component {
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
    console.log(courses);
    if (courses) {
      if (courses.length > 0) {
        return courses.map(course => {
          return <Card.Group>{this.renderCard(course)}</Card.Group>;
        });
      } else {
        return <p> Es wurde noch kein yUOShi-Kurs gestartet </p>;
      }
    }
  }
  renderCard(course) {
    if (course)
      return (
        <Card className="course_card">
          <Card.Content>
            <Image floated="right" size="mini" src="/courses/studip_logo.png" />
            <Card.Header>{course.courseName}</Card.Header>
            <Card.Meta>{"Teilnehmer: " + course.students.length}</Card.Meta>
            <Card.Description />
          </Card.Content>
          <Card.Content extra>
            <div>
              {course.started ? (
                <Button onClick={() => this.handleCourseClick(course)} animated>
                  <Button.Content visible>{"Weiterspielen"}</Button.Content>

                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              ) : (
                <Button
                  disabled
                  onClick={() => this.handleCourseClick(course)}
                  animated
                >
                  <Button.Content visible>{"Weiterspielen"}</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              )}
            </div>
          </Card.Content>
        </Card>
      );
  }

  render() {
    return <div>{this.renderCourses(this.props.courses)}</div>;
  }
}

StudentCourses.propTypes = {
  courses: PropTypes.array
};
