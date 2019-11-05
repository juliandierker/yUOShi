import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import {
  Responsive,
  Segment,
  Button,
  Header,
  Modal,
  Image
} from "semantic-ui-react";

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

  renderNextStep() {
    this.setState({ introIndex: this.state.introIndex + 1 });
  }
  initIntroSteps() {
    const isOutro = this.props.student.currentTraining[0].finalTraining;
    const content = this.props.student.currentTraining[0].content[0];

    let stepContent = [];
    let stepName = [];
    let stepIcon = [];

    if (!isOutro) {
      stepContent.push(content.intro);
      stepName.push(this.props.student.currentTraining[0].name);
      stepIcon.push(this.props.student.currentTraining[0].image);
    }

    for (var i in content.quests) {
      stepContent.push(content.quests[i][content.quests[i].questName]);
      stepName.push(content.quests[i].questName);
      stepIcon.push(content.quests[i].image);
    }

    if (!isOutro) {
      stepContent.push(content.outro);
      stepName.push(this.props.student.currentTraining[0].name);
      stepIcon.push(this.props.student.currentTraining[0].image);
    }

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
    if (this.state.currentTraining.finalTraining) {
      if (introIndex < finalIndex - 2) {
        this.setState({ introIndex: introIndex + 1 });
      } else if (introIndex == finalIndex - 2) {
        this.solveTraining();
      }
    } else {
      if (introIndex < finalIndex) {
        this.setState({ introIndex: introIndex + 1 });
      }
    }
  }
  renderBtns() {
    const { introIndex, finalIndex, currentTraining } = this.state;
    if (!currentTraining.finalTraining) {
      return (
        <Button.Group attached="top">
          <Button
            id="prevBtn"
            content="Zurück"
            onClick={this.backAction.bind(this)}
          />
          <Button
            id="nextBtn"
            content="Weiter"
            onClick={this.nextAction.bind(this)}
          />
          {introIndex == finalIndex ? (
            <Button
              positive
              id="posiBtn"
              icon="checkmark"
              labelPosition="right"
              content="Los gehts"
              onClick={this.close}
            />
          ) : null}
        </Button.Group>
      );
    } else {
      return (
        <React.Fragment>
          <Button
            style={{ float: "left" }}
            id="nextBtn"
            content="Zurück zu den Aufgaben"
            onClick={this.props.loadPrevTask}
          />
          <Button
            id="nextBtn"
            content={
              this.state.introIndex === this.state.finalIndex - 2
                ? "Kapitel abschließen"
                : "Nächster Fall"
            }
            onClick={this.nextAction.bind(this)}
          />
        </React.Fragment>
      );
    }
  }
  renderOutro() {
    const { currentTraining } = this.state;
    const content = this.props.student.currentTraining[0].content[0].quests;

    if (
      content[this.state.introIndex] &&
      currentTraining.finalTraining &&
      this.state.introIndex < this.state.finalIndex
    ) {
      const multiObj = {
        AnswerSet: content[this.state.introIndex].AnswerSet,
        taskId: this.props.student.currentTraining[0].taskId,
        filePrefix: content[this.state.introIndex].filePrefix,
        QuestionId: content[this.state.introIndex].questId,
        Question: content[this.state.introIndex].Question,
        hasNext: content[this.state.introIndex].hasNext,
        multi: content[this.state.introIndex].multi
      };
      let taskProps = {
        student: this.props.student,
        tasks: this.props.tasks,
        activeTask: multiObj,
        courses: this.props.courses,
        trainings: this.props.trainings,
        renderNextStep: this.renderNextStep.bind(this)
      };
      return <MultiChoiceAnimationTemplate {...taskProps} />;
    }
  }
  render() {
    const { open, dimmer, currentTraining } = this.state;

    if (currentTraining) {
      const modalContent = (
        <Modal.Content image id="ImageContent">
          <Modal.Description id="introDescription">
            <Header id="IntroTrainingText">
              {this.state.stepName[this.state.introIndex]}
            </Header>
            {this.state.stepContent[this.state.introIndex]}
            {this.renderOutro()}
          </Modal.Description>
        </Modal.Content>
      );

      const modalContentContainer = (
        <React.Fragment>
          <Image
            wrapped
            size="small"
            src={
              "/training/quests/" + this.state.stepIcon[this.state.introIndex]
            }
          />
          {modalContent}
        </React.Fragment>
      );

      return (
        <div>
          <Modal
            style={{ overflowY: "scroll", height: "fit-content" }}
            className="scrolling"
            that={this}
            dimmer={dimmer}
            closeOnDimmerClick={false}
            open={open}
            onClose={this.close}
          >
            <Segment.Group>
              <Responsive as={Segment} {...Responsive.onlyMobile}>
                {modalContentContainer}
              </Responsive>
              <Responsive as={Segment} {...Responsive.onlyTablet}>
                {modalContentContainer}
              </Responsive>

              <Responsive as={Segment} {...Responsive.onlyComputer}>
                <div className="ui grid">
                  <div className="row">
                    <div className="four wide column">
                      <Image
                        wrapped
                        size="medium"
                        src={
                          "/training/quests/" +
                          this.state.stepIcon[this.state.introIndex]
                        }
                      />
                    </div>
                    <div className="ten wide column">{modalContent}</div>
                  </div>
                </div>
              </Responsive>
            </Segment.Group>

            <Modal.Actions id="ModalActions">{this.renderBtns()}</Modal.Actions>
          </Modal>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

TrainingAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
