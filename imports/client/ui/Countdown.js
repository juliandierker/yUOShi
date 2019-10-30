import React, { Component } from "react";

var countdownTimer;

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    countdownTimer = setTimeout(() => {
      if (this.props.onComplete !== undefined) {
        this.props.onComplete();
      }
    }, this.props.seconds * 1000);
  }

  componentWillUnmount() {
    if (countdownTimer !== undefined) {
      clearTimeout(countdownTimer);
    }
  }

  render() {
    return (
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
    );
  }
}
