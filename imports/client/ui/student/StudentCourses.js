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
    return <p> test </p>;
  }

  render() {
    return <div>{this.renderCourses(this.props.courses)}</div>;
  }
}

StudentCourses.propTypes = {
  courses: PropTypes.array
};
