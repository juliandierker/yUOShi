import React, { Component } from "react";

import ReactPlayer from "react-player";
import { Modal, Button } from "semantic-ui-react";

export default class VideoModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoOpen: this.props.videoOpen,
      videoHasEnded: false,
      buttonText: "Später ansehen",
      buttonColor: "orange"
    };

    this.playerRef = React.createRef();
  }

  handleEnd() {
    this.setState({ videoHasEnded: true });
    if (this.props.autoclose) this.setState({ videoOpen: false });
  }

  componentDidUpdate() {
    if (this.state.videoHasEnded) {
      if (this.state.buttonColor !== "green") {
        this.setState({ buttonColor: "green", buttonText: "Video beenden" });
      }
    } else {
      if (this.state.buttonColor !== "orange") {
        this.setState({ buttonColor: "orange", buttonText: "Später ansehen" });
      }
    }
  }

  onVideoModalClose() {
    this.setState({ videoOpen: false });
    Meteor.call(
      "solutionHandler.viewVideo",
      this.props.studentId,
      this.props.taskId
    );
  }

  render() {
    if (!this.props.video) return null;
    return (
      <Modal
        basic
        size="large"
        open={this.state.videoOpen}
        onClose={() => {
          this.props.videoClose;
        }}
        trigger={
          <Button
            onClick={() =>
              this.setState({ videoOpen: true, videoHasEnded: false })
            }
            style={{ backgroundColor: "#8fb0e8", color: "white" }}
            content="Video ansehen"
            icon="play"
            labelPosition="right"
          />
        }
      >
        <Modal.Content>
          <ReactPlayer
            ref={this.playerRef}
            width="100%"
            style={{ margin: "auto" }}
            url={this.props.video}
            playing
            controls={true}
            onEnded={this.handleEnd.bind(this)}
          />
          <Button
            style={{ marginLeft: "70%", marginTop: "10px" }}
            color={this.state.buttonColor}
            onClick={() => {
              this.onVideoModalClose();
            }}
            inverted
          >
            {this.state.buttonText}
          </Button>
        </Modal.Content>
      </Modal>
    );
  }
}
