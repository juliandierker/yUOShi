import React, { Component } from "react";
import { Checkbox, Loader } from "semantic-ui-react";

export default class SurveyView extends Component {
  constructor(props) {
    super(props);

    this.state = { textboxValue: "", checkedAnswers: [] };
  }
  handleChange(e) {
    let newCheckedAnswers = this.state.checkedAnswers;

    let cbId = e.target.id.split("_")[1];
    if (newCheckedAnswers.includes(cbId)) {
      newCheckedAnswers.splice(newCheckedAnswers.indexOf(cbId), 1);
    } else {
      newCheckedAnswers.push(cbId);
    }
    this.setState({ checkedAnswers: newCheckedAnswers });
  }
  renderCheckboxes() {
    return this.props.activeTask.keywords.map((keyword, index) => {
      return (
        <Checkbox
          id={"cb_" + index}
          radio={false}
          label={keyword}
          value={keyword}
          onChange={this.handleChange.bind(this)}
        />
      );
    });
  }

  renderTextbox() {
    return;
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.activeTask.question}</h1>
        {this.renderCheckboxes()}
      </React.Fragment>
    );
  }
}
