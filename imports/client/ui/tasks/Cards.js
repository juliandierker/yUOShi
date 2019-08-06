import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  clicked(framework) {
    this.props.click(framework);
  }
  render() {
    var def = this.props.framework.name.split("-")[1];
    return (
      <div
        className={
          "card" +
          (!this.props.close ? " opened" : "") +
          (this.props.complete ? " matched" : "")
        }
        onClick={() => this.clicked(this.props.framework)}
      >
        <div className="front">?</div>
        <div className="back">
          {this.props.framework.name.includes("def") ? (
            def
          ) : (
            <img src={"/tasks/Memory/" + this.props.framework.name + ".png"} />
          )}
        </div>
      </div>
    );
  }
}
