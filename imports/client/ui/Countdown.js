import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
import Swal from "sweetalert2";

var countdownTimer;

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = { timerStarted: false };
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  componentDidMount() {
    this.renderStartAlert();
  }

  clearTimer() {
    if (countdownTimer !== undefined) {
      clearTimeout(countdownTimer);
    }
  }

  startTimer() {
    countdownTimer = setTimeout(() => {
      if (this.props.onComplete !== undefined) {
        Swal.fire({
          position: "top-end",
          type: "success",
          title: "Du kannst nun die Schlüsselbegriffe im Text markieren!",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.props.onComplete();
        });
      }
    }, this.props.seconds * 1000);

    this.setState({ timerStarted: true, startModalOpen: false });
  }

  renderStartAlert() {
    Swal.fire(
      "Bitte lese den Text sorgfältig durch.",
      "Nach 2 Minuten wird eine Liste mit Schlüsselbegriffen freigeschaltet. Markiere diese Begriffe im Text, indem du auf die jeweiligen Wörter klickst."
    ).then(() => {
      this.setState({ timerStarted: true });
      this.startTimer();
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.timerStarted ? (
          <div id="countdown">
            <svg id="countdown-svg">
              <circle
                id="countdown-circle"
                r="25"
                cx="35"
                cy="35"
                style={{
                  animation:
                    "countdown " + this.props.seconds + "s linear forwards",
                  stroke: this.props.color,
                  strokeWidth: this.props.width
                }}
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}
