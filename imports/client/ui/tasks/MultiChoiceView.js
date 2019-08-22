import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Card, Checkbox, Grid } from "semantic-ui-react";

export default class MultiChoiceView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedAnswers: []
    };
  }

  solutionPrepare() {}

  handleChange(e, { value }) {
    const questionId = e.target.id.split("_")[1];
    const multi = e.target.id.split("_")[3] === "m";
    let checkedAnswers = this.state.checkedAnswers;
    let checkedQuestionAnsweres = checkedAnswers.find(element => {
      return element.id.toString() === questionId;
    });
    const index = checkedAnswers.indexOf(checkedQuestionAnsweres);

    if (index === -1) {
      checkedQuestionAnsweres = {
        id: questionId,
        values: []
      };
    }

    if (multi) {
      if (checkedQuestionAnsweres.values.includes(value)) {
        let i = checkedQuestionAnsweres.values.indexOf(value);
        checkedQuestionAnsweres.values.splice(i, 1);
      } else {
        checkedQuestionAnsweres.values.push(value);
      }
    } else {
      checkedQuestionAnsweres.values = [];
      checkedQuestionAnsweres.values.push(value);
    }

    if (index !== -1) {
      checkedAnswers[index] = checkedQuestionAnsweres;
    } else {
      checkedAnswers.push(checkedQuestionAnsweres);
    }
    this.setState({ checkedAnswers: checkedAnswers });
  }

  renderAnswerSet(questionId, set, multi) {
    let checkedAnswers = this.state.checkedAnswers.find(element => {
      return element.id.toString() === questionId.toString();
    });

    return set.map((answer, index) => {
      return (
        <Checkbox
          style={{ width: "100%" }}
          key={"Checkbox_" + questionId + "_" + index}
          id={"cb_" + questionId + "_" + index + "_" + (multi ? "m" : "")}
          radio={!multi}
          label={answer}
          value={answer}
          checked={checkedAnswers && checkedAnswers.values.includes(answer)}
          onChange={this.handleChange.bind(this)}
        />
      );
    });
  }

  renderQuestions() {
    return (
      <Card.Group>
        {this.props.activeTask.content[0].questions.map(question =>
          this.renderQuestion(question)
        )}
      </Card.Group>
    );
  }

  renderQuestion(question) {
    return (
      <div
        key={"questionDiv_" + question.QuestionId}
        style={{ width: "100%", paddingBottom: "16px" }}
      >
        <Card
          key={"questionCard_" + question.QuestionId}
          style={{ marginLeft: "10%", minWidth: "30%" }}
        >
          <Card.Content>
            <Card.Header>{question.Question}</Card.Header>
            <Card.Description>
              {this.renderAnswerSet(
                question.QuestionId,
                question.AnswerSet,
                question.multi
              )}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }

  render() {
    return <React.Fragment>{this.renderQuestions()}</React.Fragment>;
  }
}
