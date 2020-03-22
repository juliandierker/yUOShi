import React, { useState, useContext, useRef, useEffect } from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Responsive, Segment, Button, Header, Modal, Image } from "semantic-ui-react";

import MultiChoiceAnimationTemplate from "../multiChoice/MultiChoiceAnimationTemplate";
import SurveyAnimationTemplate from "../survey/SurveyAnimationTemplate.js";
import { GameContext } from "../../student/StudentContextProvider";

export default function TrainingAnimationTemplate(activeTask) {
  console.log("TRAININGANI");
  const { student } = useContext(GameContext);
  console.log(student);
  const [currentTraining, setCurrentTraining] = useState(null);
  const [open, setOpen] = useState(true);
  const [outro, setOutro] = useState(false);

  const [introIndex, setIntroIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(student.tasks.content[0].quests.length + 1);
  const [stepContent, setStepContent] = useState([]);
  const [stepName, setStepName] = useState([]);
  const [stepIcon, setStepIcon] = useState([]);

  // this.view = React.createRef();

  function show(dimmer) {
    setDimmer(dimmer);
    setOpen(true);
  }
  function close(dimmer) {
    solveTraining();
  }
  function renderNextStep() {
    setIntroIndex(introIndex + 1);
  }
  function initIntroSteps() {
    const isOutro = student.tasks[0].finalTraining;
    const content = student.tasks[0].content[0];

    let stepContent = [];
    let stepName = [];
    let stepIcon = [];

    if (!isOutro) {
      stepContent.push(content.intro);
      stepName.push(student.tasks[0].name);
      stepIcon.push(student.tasks[0].image);
    }

    for (var i in content.quests) {
      stepContent.push(content.quests[i][content.quests[i].questName]);
      stepName.push(content.quests[i].questName);
      stepIcon.push(content.quests[i].image);
    }

    if (!isOutro) {
      stepContent.push(content.outro);
      stepName.push(student.tasks[0].name);
      stepIcon.push(student.tasks[0].image);
    }
    setStepContent(stepContent);
    setStepName(stepName);
    setStepIcon(stepIcon);
  }
  useEffect(() => {
    if (!introSteps) {
      initIntroSteps();
    }
  });

  function solveTraining() {
    Meteor.call("students.solveTraining", student, currentTraining);
    this.setState({ open: false });
  }

  function backAction() {
    const { introIndex } = this.state;

    if (introIndex > 0) {
      this.setState({ introIndex: introIndex - 1 });
    }
  }
  function nextAction() {
    if (this.view.current) {
      let mcView = this.view.current.view.current;
      if (mcView && mcView.state.showSolution) {
        mcView.setState({ showSolution: false });
      }
    }

    const { introIndex, finalIndex, currentTraining } = this.state;
    if (currentTraining.finalTraining) {
      if (introIndex <= finalIndex) {
        this.setState({ introIndex: introIndex + 1 });
      } else {
        this.solveTraining();
      }
    } else {
      this.setState({ introIndex: introIndex + 1 });
    }
  }
  function renderBtns() {
    const { introIndex, finalIndex, currentTraining } = this.state;
    if (!currentTraining.finalTraining) {
      return (
        <Button.Group attached="top">
          <Button id="prevBtn" content="Zurück" onClick={this.backAction.bind(this)} />
          {introIndex != finalIndex ? (
            <Button id="nextBtn" content="Weiter" onClick={this.nextAction.bind(this)} />
          ) : null}

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
            onClick={loadPrevTask}
          />
          <Button
            id="nextBtn"
            content={introIndex <= finalIndex - 1 ? "Nächster Fall" : "Kapitel abschließen"}
            onClick={this.nextAction.bind(this)}
          />
        </React.Fragment>
      );
    }
  }
  function renderOutro() {
    const content = student.tasks[0].content[0].quests;

    if (introIndex < finalIndex - 1) {
      const multiObj = {
        AnswerSet: content[introIndex].AnswerSet,
        taskId: student.tasks[0].taskId,
        filePrefix: content[introIndex].filePrefix,
        QuestionId: content[introIndex].questId,
        Question: content[introIndex].Question,
        hasNext: content[introIndex].hasNext,
        multi: content[introIndex].multi
      };
      let taskProps = {
        student,
        tasks,
        activeTask: multiObj,
        courses: courses,
        trainings: trainings,
        renderNextStep: setIntroIndex(introIndex + 1).bind(this)
      };

      if (activeTask.content[0].quests[introIndex].filePrefix === "Survey")
        taskProps = {
          student: student,
          tasks: tasks,
          activeTask: activeTask.content[0].quests[introIndex],
          courses: courses,
          trainings: trainings,
          renderNextStep: this.renderNextStep.bind(this)
        };

      return activeTask.content[0].quests[introIndex].filePrefix === "Multi" ? (
        <MultiChoiceAnimationTemplate {...taskProps} ref={this.view} />
      ) : (
        <SurveyAnimationTemplate {...taskProps} />
      );
    }
  }
  if (currentTraining) {
    const modalContent = (
      <Modal.Content image id="ImageContent">
        <Modal.Description id="introDescription">
          <Header id="IntroTrainingText">{stepName[introIndex]}</Header>
          {stepContent[introIndex]}
          {this.renderOutro()}
        </Modal.Description>
      </Modal.Content>
    );

    const modalContentContainer = (
      <React.Fragment>
        <Image wrapped size="small" src={"/training/quests/" + stepIcon[introIndex]} />
        {modalContent}
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Modal
          id="introModal"
          className="scrolling"
          that={this}
          dimmer={dimmer}
          closeOnDimmerClick={false}
          closeOnEscape={false}
          open={open}
          onClose={this.close}>
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
                    <Image wrapped size="medium" src={"/training/quests/" + stepIcon[introIndex]} />
                  </div>
                  <div className="ten wide column">{modalContent}</div>
                </div>
              </div>
            </Responsive>
          </Segment.Group>

          <Modal.Actions id="ModalActions">{this.renderBtns()}</Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  } else {
    return <div />;
  }
}

TrainingAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
