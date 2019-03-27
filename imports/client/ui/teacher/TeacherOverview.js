import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TeacherOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div> Teacher </div>;
  }
}

TeacherOverview.propTypes = {
  studipCourses: PropTypes.array
};
