import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { DragdropModel } from "../../../models/DragdropModel";
import {
  Button,
  Header,
  Modal,
  Image,
  Icon,
  List,
  Grid
} from "semantic-ui-react";

import Swal from "sweetalert2";

import MultiChoiceAnimationTemplate from "./MultiChoiceAnimationTemplate.js";

export default class TrainingAnimationTemplate extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.student.currentTraining);
    this.state = {
      currentTraining: null,
      open: false,
      introIndex: 0,
      finalIndex: props.student.currentTraining[0].content[0].quests.length,
      stepContent: [],
      stepName: [],
      stepIcon: [],
      outro: false
    };
    this.view = null;
  }
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.solveTraining();

  initIntroSteps() {
    const content = this.props.student.currentTraining[0].content[0];
    console.log(content);
    let stepContent = [];
    let stepName = [];
    let stepIcon = [];
    for (var i in content.quests) {
      stepContent.push(content.quests[i][content.quests[i].questName]);
      stepName.push(content.quests[i].questName);
      stepIcon.push(content.quests[i].image);
    }
    stepContent.push(content.intro);
    stepName.push(this.props.student.currentTraining[0].name);
    stepIcon.push(this.props.student.currentTraining[0].image);
    this.setState({ stepContent, stepName, stepIcon });
  }

  componentDidMount() {
    if (this.state.currentTraining == null) {
      console.log(this.props.student.currentTraining[0]);
      this.setState({
        currentTraining: this.props.student.currentTraining[0],
        open: true,
        introSteps: this.initIntroSteps()
      });
    }
  }

  solveTraining() {
    Meteor.call(
      "students.solveTraining",
      this.props.student,
      this.state.currentTraining
    );
    this.setState({ open: false });
  }

  backAction() {
    const { introIndex } = this.state;

    if (introIndex > 0) {
      this.setState({ introIndex: introIndex - 1 });
    }
  }
  nextAction() {
    console.log(this);
    const { introIndex, finalIndex } = this.state;

    if (introIndex < finalIndex) {
      this.setState({ introIndex: introIndex + 1 });
    }
  }
  renderBtns() {
    const { introIndex, finalIndex, currentTraining } = this.state;
    if (!currentTraining.finalTraining) {
      return (
        <Button.Group attached="top">
          <Button
            labelPosition="right"
            content="zurück"
            onClick={this.backAction.bind(this)}
          />
          <Button
            labelPosition="right"
            content="weiter"
            onClick={this.nextAction.bind(this)}
          />
          {introIndex == finalIndex ? (
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Los gehts"
              onClick={this.close}
            />
          ) : null}
        </Button.Group>
      );
    }
  }
  renderOutro() {
    const { currentTraining } = this.state;
    const content = this.props.student.currentTraining[0].content[0].quests;

    if (
      currentTraining.finalTraining &&
      this.state.introIndex < this.state.finalIndex
    ) {
      const multiObj = {
        AnswerSet: content[this.state.introIndex].AnswerSet,
        QuestionId: content[this.state.introIndex].questId,
        Question: content[this.state.introIndex].Question,
        multi: content[this.state.introIndex].multi
      };
      console.log(multiObj);
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: multiObj,
        courses: this.props.courses,
        trainings: this.props.trainings
      };
      console.log("testyB");
      return <MultiChoiceAnimationTemplate {...taskProps} />;
    }
  }
  renderTraining() {
    const { open, dimmer, currentTraining } = this.state;
    if (currentTraining) {
      return (
        <div className="modalTraining_div">
          <Modal
            style={{ top: "5px" }}
            size="fullscreen"
            that={this}
            dimmer={dimmer}
            open={open}
            onClose={this.close}
          >
            <Modal.Header />
            <Modal.Content image>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={5}>
                    <Image
                      wrapped
                      size="medium"
                      src={
                        "/training/quests/" +
                        this.state.stepIcon[this.state.introIndex]
                      }
                    />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Modal.Description>
                      <Header>
                        {this.state.stepName[this.state.introIndex]}
                      </Header>
                      {this.state.stepContent[this.state.introIndex]}
                      {this.renderOutro()}
                    </Modal.Description>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
            <Modal.Actions>{this.renderBtns()}</Modal.Actions>
          </Modal>
        </div>
      );
    }
  }
  render() {
    return <div>{this.renderTraining()}</div>;
  }
}

TrainingAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
