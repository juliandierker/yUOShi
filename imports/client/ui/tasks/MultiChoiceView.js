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
      result: null,
      next: false,
      final: false,
      fails: 0,
      totalAnswerCount: 0
    };
  }

  solutionPrepare() {
    let meteorMethod =
      "solutionHandler.submit" + this.props.activeTask.filePrefix;
    if (this.state.showSolution && this.state.final) {
      let result = this.state.result;
      let solvedPercentage = null;
      if (this.state.totalAnswerCount > 0) {
        solvedPercentage =
          (this.state.totalAnswerCount - this.state.falseCount) /
          this.state.totalAnswerCount;
      } else {
        solvedPercentage =
          (result.totalAnswerCount - result.falseCount) /
          result.totalAnswerCount;
      }
      const { currentTraining } = this.props.student;
      Meteor.call(
        meteorMethod,
        this.state.checkedAnswers,
        this.props.student._id,
        this.props.activeTask,
        solvedPercentage,
        (err, res) => {
          if (!err) {
            Meteor.call(
              "students.solveTraining",
              this.props.student,
              currentTraining[currentTraining.length - 1]
            );
          }
        }
      );
    } else if (this.state.next) {
      this.props.renderNextStep();
      this.state.checkedAnswers,
        this.props.student._id,
        this.props.activeTask,
        this.setState({ next: false, showSolution: false });
    } else {
      Meteor.call(
        meteorMethod,
        this.state.checkedAnswers,
        this.props.student._id,
        this.props.activeTask,
        (err, res) => {
          if (err) console.log(err);
          if ((res.next || this.state.fails > 0) && res.falseCount > 0) {
            var tmp = this.state.fails > 0;

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
                this.setState({
                  showSolution: true,
                  final: tmp,
                  result: res,
                  next: true,
                  fails: this.state.fails + res.falseCount,
                  totalAnswerCount:
                    this.state.totalAnswerCount + res.totalAnswerCount
                });
                this.forceUpdate();
              } else {
                this.setState({
                  showSolution: false,
                  fails: (this.state.fails += res.falseCount),
                  final: tmp,
                  totalAnswerCount: (this.state.totalAnswerCount +=
                    res.totalAnswerCount),
                  checkedAnswers: [],
                  childKeyIteration: this.state.childKeyIteration === 0 ? 1 : 0
                });
              }
            });
          } else if (res.next && res.falseCount == 0) {
            Swal.fire({
              position: "top-end",
              type: "success",
              title: "Weiter gehts zum nächsten Fall."
            }).then(result => {
              if (result.value) {
                this.setState({
                  showSolution: true,
                  result: res,
                  next: true,
                  final: false
                });
                this.forceUpdate();
              } else {
                this.setState({
                  showSolution: false,
                  checkedAnswers: [],
                  final: false,
                  childKeyIteration: this.state.childKeyIteration === 0 ? 1 : 0
                });
              }
            });
          } else if (res && res[0] === "free") {
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
              type: "success",
              title: "Geschafft!",
              timer: 2000
            });
            this.setState({ final: true });
          } else if (res && res.falseCount > 0) {
            Swal.fire({
              position: "top-end",
              type: "warning",
              final: true,

              title: "Nicht ganz...",
              text:
                "Es sind nicht alle Fragen richtig beantwortet. Willst du es nochmal versuchen, oder möchtest du dir die Lösung anschauen?",
              confirmButtonText: "Lösung zeigen",
              cancelButtonText: "Nochmal versuchen",
              cancelButtonColor: "#3085d6",
              showCancelButton: true
            }).then(result => {
              if (result.value) {
                this.setState({ showSolution: true, result: res, final: true });
                this.forceUpdate();
              } else {
                this.setState({
                  showSolution: false,
                  final: true,
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
        correctAnswers = falseQuestion.correct;
      }
    }

    return set.map((answer, index) => {
      let color = "";
      if (this.state.showSolution && correctAnswers !== undefined) {
        if (
          this.state.result.neutralAnswers !== undefined &&
          this.state.result.neutralAnswers.includes(answer)
        ) {
          color = "yellow";
        } else {
          color = correctAnswers.includes(answer) ? "green" : "red";
        }
      }
      return (
        <Checkbox
          style={{
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
            <Card.Header style={{ marginBottom: "2rem", textAlign: "left" }}>
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
          id="solveTask"
          floated="right"
          onClick={() => this.solutionPrepare()}
        >
          Aufgabe lösen
        </Button>
      </React.Fragment>
    );
  }
}
