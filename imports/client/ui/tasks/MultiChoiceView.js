import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Card, Checkbox, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

export default class MultiChoiceView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedAnswers: [],
      showSolution: false,
      childKeyIteration: 0,
      result: null
    };
  }

  solutionPrepare() {
    let meteorMethod =
      "solutionHandler.submit" + this.props.activeTask.filePrefix;
    if (this.state.showSolution) {
      let result = this.state.result;
      let solvedPercentage = result.falseCount / result.totalAnswerCount;
      Meteor.call(
        meteorMethod,
        this.state.checkedAnswers,
        this.props.student._id,
        this.props.activeTask,
        solvedPercentage
      );
    } else {
      Meteor.call(
        meteorMethod,
        this.state.checkedAnswers,
        this.props.student._id,
        this.props.activeTask,
        (err, res) => {
          if (err) console.log(err);
          if (res && res[0] === "free") {
            Swal.fire({
              position: "top-end",
              type: "success",
              title: "Danke",
              toast: true,
              text: "Deine Gründe werden im Lehrendenzimmer ausgestellt.",
              timer: 2000
            }).then(result => {
              this.props.handleNextTask();
            });
          } else if (res.falseCount == 0) {
            Swal.fire({
              position: "top-end",
              type: "warning",
              title: "Das reicht noch nicht...",
              text: "Ihr solltet zumindest eine Antwortmöglichkeit nutzen...",
              confirmButtonText: "Lösung zeigen",
              cancelButtonText: "Nochmal versuchen",
              cancelButtonColor: "#3085d6",
              showCancelButton: true
            }).then(result => {
              if (result.value) {
                this.setState({ showSolution: true, result: res });
                this.forceUpdate();
              } else {
                this.setState({
                  showSolution: false,
                  checkedAnswers: [],
                  childKeyIteration: this.state.childKeyIteration === 0 ? 1 : 0
                });
              }
            });
          }
          if (res && res.falseCount > 0) {
            Swal.fire({
              position: "top-end",
              type: "warning",
              title: "Nicht ganz...",
              text:
                "Es sind nicht alle Fragen richtig beantwortet. Willst du es nochmal versuchen, oder möchtest du dir die Lösung anschauen?",
              confirmButtonText: "Lösung zeigen",
              cancelButtonText: "Nochmal versuchen",
              cancelButtonColor: "#3085d6",
              showCancelButton: true
            }).then(result => {
              if (result.value) {
                this.setState({ showSolution: true, result: res });
                this.forceUpdate();
              } else {
                this.setState({
                  showSolution: false,
                  checkedAnswers: [],
                  childKeyIteration: this.state.childKeyIteration === 0 ? 1 : 0
                });
              }
            });
          }
        }
      );
    }
  }

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
    let correctAnswers = [];
    if (this.state.showSolution) {
      let falseQuestion = this.state.result.falseQuestions.find(element => {
        return element.id.toString() === questionId.toString();
      });
      if (falseQuestion) {
        correctAnswers = falseQuestion.sol;
      }
    }

    return set.map((answer, index) => {
      let color = "";
      if (this.state.showSolution && correctAnswers.length > 0) {
        color = correctAnswers.includes(answer) ? "green" : "red";
      }
      return (
        <Checkbox
          style={{
            width: "100%",
            marginBottom: "2rem",
            backgroundColor: color
          }}
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
        {this.props.activeTask.content
          ? this.renderQuestion(this.props.activeTask.content[0])
          : this.renderQuestion(this.props.activeTask)}
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
          style={{ width: "100%" }}
        >
          <Card.Content>
            <Card.Header style={{ marginBottom: "2rem" }}>
              <br />

              {question.Question}
            </Card.Header>
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
    return (
      <React.Fragment>
        {this.renderQuestions()}
        <Button
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "18.4%",
            backgroundColor: "rgb(143, 176, 232)",
            color: "white"
          }}
          floated="right"
          onClick={() => this.solutionPrepare()}
        >
          Weiter
        </Button>
      </React.Fragment>
    );
  }
}
