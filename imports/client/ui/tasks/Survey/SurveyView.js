import React, { Component } from "react";
import { Checkbox, TextArea, Form, Button } from "semantic-ui-react";

export default class SurveyView extends Component {
  constructor(props) {
    super(props);

    this.state = { textboxValue: "", checkedAnswers: [] };
  }
  handleCheckboxChange(e) {
    let newCheckedAnswers = this.state.checkedAnswers;

    let cbId = e.target.id.split("_")[1];
    if (newCheckedAnswers.includes(cbId)) {
      newCheckedAnswers.splice(newCheckedAnswers.indexOf(cbId), 1);
    } else {
      newCheckedAnswers.push(cbId);
    }
    this.setState({ checkedAnswers: newCheckedAnswers });
  }

  handleTextAreaChange(e, data) {
    this.setState({ textboxValue: data.value });
  }

  handleSubmit() {
    console.log(this.state);
    console.log("TODO: Save data!");
  }

  renderCheckboxes() {
    return this.props.activeTask.keywords.map((keyword, index) => {
      return (
        <Checkbox
          key={"key_cb_" + index}
          id={"cb_" + index}
          radio={false}
          label={keyword}
          value={keyword}
          onChange={this.handleCheckboxChange.bind(this)}
        />
      );
    });
  }

  renderMiscellaneousTextbox() {
    return (
      <React.Fragment>
        Sonstiges:
        <TextArea
          style={{ minHeight: "100px", marginBottom: "10px" }}
          onChange={this.handleTextAreaChange.bind(this)}
        />
      </React.Fragment>
    );
  }

  render() {
    return (
      <Form
        style={{ padding: "10px", paddingBottom: "40px" }}
        onSubmit={this.handleSubmit.bind(this)}
      >
        <h2>{this.props.activeTask.question}</h2>
        {this.renderCheckboxes()}
        {this.renderMiscellaneousTextbox()}
        <Button floated="right" style={{ marginBottom: "10px" }}>
          Absenden
        </Button>
      </Form>
    );
  }
}
