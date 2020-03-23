import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Responsive, Modal, Icon, Button as Btn } from "semantic-ui-react";
import { usePrevious } from "../../../shared/customHooks";
import { GameContext } from "../StudentContextProvider";
import { ActiveTaskContext } from "../WorkspaceContext";

// This component renders the overview of the progress of the current Trainingspackage.

export default function TaskProgress() {
  const { student } = useContext(GameContext);
  const { getActiveSubpackage, currentTask } = useContext(ActiveTaskContext);
  const prevTask = usePrevious(currentTask);

  const currentPackage = student.currentPackage;
  const subPackages = getActiveSubpackage();
  console.log(getActiveSubpackage);
  console.log(subPackages);
  const [activeStep, setActiveStep] = useState(getInitStep());
  const [steps, setSteps] = useState([]);

  console.log(currentTask);
  useEffect(() => {
    generateSubPackages();
  });

  useEffect(() => {
    setSteps(getSteps());
    if (currentTask) checkProgress();

    if (!prevTask && currentTask) getInitStep();
  });
  function getInitStep() {
    if (currentTask) {
      return 1;
    } else if (prevTask) {
      var cStr = prevTask.parentId;
      var stepId = cStr.slice(cStr.length - 1, cStr.length);
      return parseInt(stepId);
    } else {
      return parseInt(0);
    }
  }
  function getSteps() {
    var stepArr = [];
    subPackages[0].map((subPackage, index) => {
      stepArr.push(subPackage.title);
    });

    return stepArr;
  }
  function renderStepper() {
    var classes = makeStyles((theme) => ({
      root: {
        color: "white",
        width: "90%"
      },
      button: {
        color: "white",
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1)
      },
      actionsContainer: {
        color: "white",
        marginBottom: theme.spacing(2)
      },
      resetContainer: {
        color: "white",
        padding: theme.spacing(3)
      }
    }));
    function handleNext() {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    function handleBack() {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    function handleReset() {
      setActiveStep(0);
    }

    return (
      <div id="workspaceStepper" className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography />
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }

  function checkProgress() {
    var stepId = null;
    var prevId = null;
    if (
      currentTask.sequenceId != prevTask.sequenceId &&
      currentTask.parentId &&
      prevTask.parentId != currentTask.parentId
    ) {
      var cStr = currentTask.parentId;
      var pStr = prevTask.parentId;
      stepId = cStr.slice(cStr.length - 1, cStr.length);
      prevId = pStr.slice(pStr.length - 1, pStr.length);
      if (stepId > prevId) {
        setActiveStep(activeStep + 1);
      } else if (stepId < prevId && prevId != 0) {
        setActiveStep(activeStep - 1);
      }
    }
  }
  function generateSubPackages() {
    let newSubPackages = [];
    currentPackage.content.map((subPackage) => {
      let sp = {
        title: subPackage.title,
        id: currentPackage.name + subPackage.sequenceId,
        sequenceId: subPackage.sequenceId,
        tasks: []
      };

      // Add tasks to tasks array
      subPackage.tasks.map((task) => {
        sp.tasks.push({
          name: task.title,
          parentId: task.parentId,
          sequenceId: task.sequenceId,
          description: task.description
        });
      });

      // Add trainings to tasks array
      // trainings.map((training) => {
      //   training.Motivation.map((mot) => {
      //     if (mot.parentId == sp.id) {
      //       sp.tasks.push({
      //         name: mot.title,
      //         parentId: mot.parentId,
      //         sequenceId: mot.sequenceId,
      //         description: mot.content
      //       });
      //     }
      //   });
      //   training.Identität.map((ide) => {
      //     if (ide.parentId == sp.id) {
      //       sp.tasks.push({
      //         name: ide.title,
      //         parentId: ide.parentId,
      //         sequenceId: ide.sequenceId,
      //         description: ide.content
      //       });
      //     }
      //   });
      // });
      // Sort tasks by sequenceId
      sp.tasks.sort((a, b) => {
        if (a.sequenceId < b.sequenceId) {
          return -1;
        } else if (a.sequenceId > b.sequenceId) {
          return 1;
        } else {
          return 0;
        }
      });
      newSubPackages.push(sp);
    });
  }

  function renderSubPackage(sub, complete) {
    const icon =
      activeSubpackage && sub.sequenceId < activeSubpackage.sequenceId ? (
        <Icon size="large" name={"check"} style={{ color: "green" }} />
      ) : (
        <Icon size="large" name={"student"} />
      );
    let cnt = 0;
    return (
      <React.Fragment>
        <Step.Content>
          <div
            style={{
              display: "flex",
              lineHeight: "normal",
              alignItems: "center"
            }}>
            {icon}
            <Step.Title>{sub.title}</Step.Title>
          </div>
          <Step.Description>
            {sub.tasks.map((task) => {
              cnt++;
              if (student.tasks[0] && (complete || task.sequenceId < student.tasks[0].sequenceId)) {
                return renderTask(task, "check", "taskProgress_task_" + cnt);
              } else {
                return renderTask(task, "circle", "taskProgress_task_" + cnt);
              }
            })}
          </Step.Description>
        </Step.Content>
      </React.Fragment>
    );
  }

  function renderSubPackages() {
    return subPackages[0].map((p) => {
      if (activeSubpackage) {
        let completed = false;
        let active = false;
        if (p.sequenceId < activeSubpackage.sequenceId) {
          completed = true;
        } else if (p.sequenceId == activeSubpackage.sequenceId) {
          active = true;
        }
        return (
          <Step completed={completed} active={active} key={currentPackage._id + "" + p.sequenceId}>
            {renderSubPackage(p, completed)}
          </Step>
        );
      }
    });
  }

  return (
    <React.Fragment>
      <Responsive {...Responsive.onlyMobile}>
        <Modal
          closeOnDocumentClick={true}
          closeIcon={<Icon id="stepperModalCloseIcon" name="close" />}
          trigger={
            <Btn id="stepperModalIcon" primary>
              Fortschritt
            </Btn>
          }
          basic>
          <Modal.Content id="stepperModal">{renderStepper()}</Modal.Content>
        </Modal>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>{renderStepper()}</Responsive>
    </React.Fragment>
  );
}
