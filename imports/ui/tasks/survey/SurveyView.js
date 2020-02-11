import React, { Component } from "react";
import { Checkbox, Form, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import FullEditor from "../texteditor/FullEditor";
export default class SurveyView extends Component {
  constructor(props) {
    super(props);

    this.state = { textboxValue: "", checkedAnswers: [], content: null };
  }
  handleEditorChange = (event, editor) => {
    var change = JSON.parse(JSON.stringify(this.state["content"]));
    const content = editor.getData();
    this.setState({ content });
  };
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
    this.props.handleSubmit(this.state, () => {
      Swal.fire("Vielen Dank!", "Danke dass du an der Umfrage teilgenommen hast!", "success");
    });
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
    let { content } = this.state;
    content ? null : (content = "Sonstiges hier eingeben...");
    return (
      <React.Fragment>
        <FullEditor
          name="instruction"
          onChange={this.handleEditorChange.bind(this)}
          value={content}
        />
      </React.Fragment>
    );
  }

  render() {
    return (
      <Form
        style={{ padding: "10px", paddingBottom: "40px" }}
        onSubmit={this.handleSubmit.bind(this)}>
        <h2>{this.props.activeTask.Question}</h2>
        {this.renderCheckboxes()}
        {this.renderMiscellaneousTextbox()}
        <Button floated="right" style={{ marginBottom: "10px" }}>
          Absenden
        </Button>
      </Form>
    );
  }
}
