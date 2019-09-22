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
    this.state = {
      currentTraining: null,
      open: false,
      introIndex: 0,
      finalIndex: props.student.currentTraining[0].content[0].quests.length + 1,
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
    let stepContent = [];
    let stepName = [];
    let stepIcon = [];

    stepContent.push(content.intro);
    stepName.push(this.props.student.currentTraining[0].name);
    stepIcon.push(this.props.student.currentTraining[0].image);

    for (var i in content.quests) {
      stepContent.push(content.quests[i][content.quests[i].questName]);
      stepName.push(content.quests[i].questName);
      stepIcon.push(content.quests[i].image);
    }
    stepContent.push(content.outro);
    stepName.push(this.props.student.currentTraining[0].name);
    stepIcon.push(this.props.student.currentTraining[0].image);
    this.setState({ stepContent, stepName, stepIcon });
  }

  componentDidMount() {
    if (this.state.currentTraining == null) {
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
            id="prevBtn"
            Position="center"
            content="Zurück"
            onClick={this.backAction.bind(this)}
          />
          <Button
            id="nextBtn"
            Position="center"
            content="Weiter"
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
        taskId: this.props.student.currentTraining[0].taskId,
        filePrefix: content[this.state.introIndex].filePrefix,
        QuestionId: content[this.state.introIndex].questId,
        Question: content[this.state.introIndex].Question,
        multi: content[this.state.introIndex].multi
      };
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: multiObj,
        courses: this.props.courses,
        trainings: this.props.trainings
      };
      return <MultiChoiceAnimationTemplate {...taskProps} />;
    }
  }
  renderTraining() {
    const { open, dimmer, currentTraining } = this.state;
    if (currentTraining) {
      return (
        <Modal
          style={{ overflowY: "scroll" }}
          className="scrolling"
          that={this}
          dimmer={dimmer}
          open={open}
          onClose={this.close}
        >
          <Modal.Content image id="ImageContent">
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
                <Grid.Column width={10}>
                  <Modal.Description id="introDescription">
                    <Header id="IntroTrainingText">
                      {this.state.stepName[this.state.introIndex]}
                    </Header>
                    {this.state.stepContent[this.state.introIndex]}
                    {this.renderOutro()}
                  </Modal.Description>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions id="ModalActions">{this.renderBtns()}</Modal.Actions>
        </Modal>
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
