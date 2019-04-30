import React from "react";
import { Link } from "react-router";

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Seite nicht gefunden</h1>
        <p>Seite konnnte nicht gefunden werden </p>
      </div>
    );
  }
}
