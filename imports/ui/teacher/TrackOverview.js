import React from "react";
import PropTypes from "prop-types";

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
        Lernpfade LernpfadeLernpfadeLernpfadeLernpfadeLernpfadeLernpfade Lernpfade Lernpfade
        Lernpfade Lernpfade Lernpfade Lernpfade
      </div>
    );
  }
}
TrackOverview.propTypes = {
  courses: PropTypes.array
};
