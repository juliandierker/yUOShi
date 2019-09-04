import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { DragdropModel } from "../../../models/DragdropModel";
import {
  Button,
  Header,
  Modal,
  Image,
  Icon,
  List,
  Grid
} from "semantic-ui-react";

import Swal from "sweetalert2";

import MaslowView from "./MaslowView";
import MotiveView from "./MotiveView";

export default class TrainingAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTraining: null,
      open: false
    };
    this.view = null;
  }
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.solveTraining();

  componentDidMount() {
    if (this.state.currentTraining == null) {
      this.setState({
        currentTraining: this.props.student.currentTraining[0],
        open: true
      });
    }
  }
  solveTraining() {
    Meteor.call(
      "students.solveTraining",
      this.props.student,
      this.state.currentTraining
    );
    this.setState({ open: false });
  }
  renderTraining() {
    const { open, dimmer, currentTraining } = this.state;
    if (currentTraining) {
      return (
        <div className="modalTraining_div">
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header />
            <Modal.Content image>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image
                      wrapped
                      size="medium"
                      src={"/training/" + currentTraining.name + ".gif"}
                    />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Modal.Description>
                      <Header>{currentTraining.name}</Header>
                      {currentTraining.content}
                    </Modal.Description>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
            <Modal.Actions>
              <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Los gehts"
                onClick={this.close}
              />
            </Modal.Actions>
          </Modal>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderTraining()}</div>;
  }
}

TrainingAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
