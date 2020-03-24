import React, { useState, useContext, useRef, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import Swal from "sweetalert2";
import DragAnimationTemplate from "../../tasks/dragdrop/DragAnimationTemplate";
import TrainingAnimationTemplate from "../../tasks/training/TrainingAnimationTemplate";
import TagAnimationTemplate from "../../tasks/tag/TagAnimationTemplate";
import ClozeAnimationTemplate from "../../tasks/cloze/ClozeAnimationTemplate";
import MemoryAnimationTemplate from "../../tasks/memory/MemoryAnimationTemplate";
import MultiChoiceAnimationTemplate from "../../tasks/multiChoice/MultiChoiceAnimationTemplate";
import SurveyAnimationTemplate from "../../tasks/survey/SurveyAnimationTemplate";
import KeywordList from "../../tasks/KeywordList";
import { ActiveTaskContext } from "../WorkspaceContext";
import { GameContext } from "../StudentContextProvider";

import TaskProgress from "../taskProgress/TaskProgress";
import { Segment, Button, Grid, Modal } from "semantic-ui-react";

import Hyphenated from "react-hyphen";
import de from "hyphenated-de";

export default React.memo(function Workspace() {
  const {
    task,
    activeTask,
    readFinished,
    setReadFinished,
    getActiveSubpackage,
    handlePreviousTaskButtonClick,
    handleNextTaskButtonClick
  } = useContext(ActiveTaskContext);
  const { student } = useContext(GameContext);
  const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
  useEffect(() => {
    openDescriptionModal();
    checkReadFinish();
  });

  function openDescriptionModal() {
    if (student.filePrefix === "Training") {
      var tasks = student.content[0].quests.tasks;
    } else {
      var tasks = student.tasks;
    }
    let currentStudentTask = tasks.find((elem) => {
      return elem && activeTask && elem._id === activeTask._id;
    });

    if (
      currentStudentTask &&
      currentStudentTask.taskState &&
      !currentStudentTask.taskState.viewed &&
      (!currentStudentTask.video || currentStudentTask.taskState.videoWatched) &&
      !descriptionModalOpen
    ) {
      setDescriptionModalOpen(true);

      Swal.fire({
        position: "top-start",
        type: "info",
        title: activeTask.description,
        onClose: () => {
          setDescriptionModalOpen(false);
        }
      });

      Meteor.call("solutionHandler.viewTask", student._id, activeTask._id);
    }
  }

  function checkReadFinish() {
    if (student.tasks[0] && readFinished !== student.tasks[0].taskState.readFinished) {
      setReadFinished(student.tasks[0].taskState.readFinished);
    }
  }

  function checkPackageProgress() {
    var check = student.solvedTraining.filter((elem) => {
      return elem.package == student.currentPackage[0].name;
    });

    return check.length >= 2;
  }

  function taskSwitch() {
    if (activeTask) {
      switch (activeTask.filePrefix) {
        case "Drag":
          return <DragAnimationTemplate {...taskProps} />;
        case "Tag":
          return <TagAnimationTemplate finishedKeywords={finishedKeywords} />;
        case "Cloze":
          return <ClozeAnimationTemplate />;
        case "Memory":
          return <MemoryAnimationTemplate />;
        case "Survey":
          return <SurveyAnimationTemplate />;
        case "MultiChoice":
          return <MultiChoiceAnimationTemplate />;
        case "Training":
          return <TrainingAnimationTemplate activeTask={activeTask} />;
      }
      // } else {
      //   Swal.fire({
      //     position: "top-end",
      //     type: "success",
      //     title: "🎉 Du hast das Paket Motivation abgeschlossen. 🎉",
      //     timer: 2000
      //   });
    }
  }

  function renderNavigationButtons() {
    return (
      <Grid id="workspaceGrid" columns={2}>
        <Grid.Row id="renderNavigationButtons">
          <Grid.Column>
            <Button
              id="prevTaskBtn"
              content="Vorherige Aufgabe"
              icon="left arrow"
              labelPosition="left"
              onClick={() => handlePreviousTaskButtonClick(student)}
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              id="nextTaskBtn"
              content="Nächste Aufgabe"
              icon="right arrow"
              labelPosition="right"
              onClick={() => handleNextTaskButtonClick(student)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  function renderDescription() {
    if (!task) return;
    return (
      <Segment id="workspaceDescription">
        <Hyphenated language={de}>{task.description}</Hyphenated>
        {task.hint ? <p style={{ fontWeight: "bold" }}>{task.hint}</p> : null}
      </Segment>
    );
  }
  function renderWorkspaceGrid() {
    return (
      <React.Fragment>
        <Grid id="workspaceGrid">
          <Grid.Column
            id="workspaceGridMobile"
            width={4}
            style={{
              padding: "0rem"
            }}>
            {renderDescription()}
            {renderKeywordList()}
          </Grid.Column>
          <Grid.Column width={8} id="workspaceGridMobile">
            <div className="workspace__container">{taskSwitch()}</div>
          </Grid.Column>
          {activeTask ? <TaskProgress /> : null}
        </Grid>
        {renderNavigationButtons()}
      </React.Fragment>
    );
  }

  function renderKeywordList() {
    if (activeTask && activeTask.type === "tag") {
      return (
        <KeywordList
          handleClick={handleKWContinue.bind(this)}
          keywords={activeTask.content[0].keywords}
          finishedKeywords={finishedKeywords}
        />
      );
    }
  }
  return <div id="workspace_div">{renderWorkspaceGrid()}</div>;
});

// Workspace.propTypes = {
//   student: PropTypes.object,
//   course: PropTypes.object,
//   tasks: PropTypes.array,
//   activeTask: PropTypes.object
// };
