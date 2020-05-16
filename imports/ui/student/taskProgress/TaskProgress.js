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

export default function TaskProgress() {
  const { getActiveSubpackage, currentTask } = useContext(ActiveTaskContext);
  const prevTask = usePrevious(currentTask);

  const [currentPackage, setCurrentPackage] = useState(false);
  const [activeStep, setActiveStep] = useState(getInitStep());
  const [subPackages, setSubPackages] = useState(generateSubPackages());

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
    subPackages.map((subPackage) => {
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
    const steps = getSteps();
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
