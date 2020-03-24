import React, { useState, useContext, useRef, useEffect } from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { Responsive, Segment, Button, Header, Modal, Image } from "semantic-ui-react";

import MultiChoiceAnimationTemplate from "../multiChoice/MultiChoiceAnimationTemplate";
import SurveyAnimationTemplate from "../survey/SurveyAnimationTemplate.js";
import { ActiveTaskContext } from "../../student/WorkspaceContext";
import { GameContext } from "../../student/StudentContextProvider";

export default function TrainingAnimationTemplate(props) {
  const activeTask = props.activeTask;
  const { student } = useContext(GameContext);
  const { solveIntroTraining } = useContext(ActiveTaskContext);
  const [open, setOpen] = useState(true);
  const [outro, setOutro] = useState(false);

  const [introIndex, setIntroIndex] = useState(0);
  const [finalIndex, setFinalIndex] = useState(activeTask.content[0].quests.length + 1);
  const [stepContent, setStepContent] = useState([]);
  const [stepName, setStepName] = useState([]);
  const [stepIcon, setStepIcon] = useState([]);
  const [dimmer, setDimmer] = useState(false);

  // view = React.createRef();

  function show(dimmer) {
    setDimmer(dimmer);
    setOpen(true);
  }
  function close() {
    if (!activeTask.finalTraining) {
      solveIntroTraining(student._id, activeTask);
      setOpen(false);
    } else {
      alert("todo");
    }
  }

  function initIntroSteps() {
    const isOutro = activeTask.finalTraining;
    const content = activeTask.content[0];

    let stepContent = [];
    let stepName = [];
    let stepIcon = [];

    if (!isOutro) {
      stepContent.push(content.intro);
      stepName.push(activeTask.name);
      stepIcon.push(activeTask.image);
    }

    for (var i in content.quests) {
      stepContent.push(content.quests[i][content.quests[i].questName]);
      stepName.push(content.quests[i].questName);
      stepIcon.push(content.quests[i].image);
    }

    if (!isOutro) {
      stepContent.push(content.outro);
      stepName.push(activeTask.name);
      stepIcon.push(activeTask.image);
    }
    setStepContent(stepContent);
    setStepName(stepName);
    setStepIcon(stepIcon);
  }
  useEffect(() => {
    if (!stepName || stepName.length == 0) {
      initIntroSteps();
    }
  });

  function backAction() {
    if (introIndex > 0) {
      setIntroIndex(introIndex - 1);
    }
  }
  function nextAction() {
    // if (view.current) {
    //   let mcView = view.current.view.current;
    //   if (mcView && mcView.state.showSolution) {
    //     TODO setState of view
    //     mcView.setState({ showSolution: false });
    //   }
    // }

    if (activeTask.finalTraining) {
      if (introIndex <= finalIndex) {
        setIntroIndex(introIndex + 1);
      } else {
        solveTraining();
      }
    } else {
      setIntroIndex(introIndex + 1);
    }
  }
  function renderBtns() {
    if (!activeTask.finalTraining) {
      return (
        <Button.Group attached="top">
          <Button id="prevBtn" content="Zurück" onClick={backAction} />
          {introIndex != finalIndex ? (
            <Button id="nextBtn" content="Weiter" onClick={nextAction} />
          ) : null}

          {introIndex == finalIndex ? (
            <Button
              positive
              id="posiBtn"
              icon="checkmark"
              labelPosition="right"
              content="Los gehts"
              onClick={close}
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
            onClick={nextAction}
          />
        </React.Fragment>
      );
    }
  }
  function renderOutro() {
    const content = activeTask.content[0].quests;
    if (introIndex < finalIndex - 1) {
      const multiObj = {
        AnswerSet: content[introIndex].AnswerSet,
        taskId: activeTask.taskId,
        filePrefix: content[introIndex].filePrefix,
        QuestionId: content[introIndex].questId,
        Question: content[introIndex].Question,
        hasNext: content[introIndex].hasNext,
        multi: content[introIndex].multi
      };
      let taskProps = {
        student,
        activeTask: multiObj
      };

      if (activeTask.content[0].quests[introIndex].filePrefix === "Survey")
        taskProps = {
          student: student,
          activeTask: activeTask.content[0].quests[introIndex]
        };

      return activeTask.finalTraining &&
        activeTask.content[0].quests[introIndex].filePrefix === "Multi" ? (
        //TODO REF VIEW
        <MultiChoiceAnimationTemplate {...taskProps} />
      ) : null;
      // <SurveyAnimationTemplate {...taskProps} />
    }
  }

  const modalContent = (
    <Modal.Content image id="ImageContent">
      <Modal.Description id="introDescription">
        <Header id="IntroTrainingText">{stepName[introIndex]}</Header>
        {stepContent[introIndex]}
        {renderOutro()}
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
        onClose={close}>
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

        <Modal.Actions id="ModalActions">{renderBtns()}</Modal.Actions>
      </Modal>
    </React.Fragment>
  );
}

TrainingAnimationTemplate.propTypes = {
  student: PropTypes.object,
  course: PropTypes.object,
  tasks: PropTypes.array,
  activeTask: PropTypes.object
};
