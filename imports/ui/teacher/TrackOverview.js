import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import { Button, Card, Image, Label, Grid } from "semantic-ui-react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

import { Courses } from "../../../../api/courses";

export default class TrackOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startMenuId: null,
      courses: null
    };
  }

  render() {
    return (
      <div>
        <p> testytest </p>
        Lernpfade LernpfadeLernpfadeLernpfadeLernpfadeLernpfadeLernpfade
        Lernpfade Lernpfade Lernpfade Lernpfade Lernpfade Lernpfade
      </div>
    );
  }
}
TrackOverview.propTypes = {
  courses: PropTypes.array
};
