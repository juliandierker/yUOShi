import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { DragdropModel } from "../../../models/DragdropModel";
import { Button, Header, Modal, Image } from "semantic-ui-react";

import Swal from "sweetalert2";

export default class TagView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
    this.view = null;
  }

  componentDidMount() {}
  renderView() {
    return "task";
  }
  render() {
    return (
      <div>
        View
        {this.renderView()}
      </div>
    );
  }
}
