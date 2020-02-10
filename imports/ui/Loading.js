import React from "react";

import { Segment, Dimmer, Loader } from "semantic-ui-react";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div align="center" className="divHeight-normal">
        <Segment
          className="getRidOfborder"
          style={{ height: "inherit", zIndex: "-1" }}
        >
          <Dimmer active inverted>
            <Loader inverted size="big">
              {this.props.loadingText ? this.props.loadingText : "Loading"}
            </Loader>
          </Dimmer>
        </Segment>
      </div>
    );
  }
}
