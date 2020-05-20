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
export default function TaskProgress(props) {
  const { packagesLoading, task, packageTasks } = props;
  const [activeStep, setActiveStep] = useState(getActiveStep());
  const prevTask = usePrevious(task);
  useEffect(() => {
    if (prevTask && prevTask.title != task.title) {
      setActiveStep(getActiveStep());
    }
  }, []);

  function getActiveStep() {
    for (var i = 0; i < packageTasks.length; i++) {
      if (task.title === packageTasks[i].title) return i;
    }
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
    const steps = packageTasks;

    function handleNext() {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    function handleBack() {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    function handleReset() {
      setActiveStep(0);
    }
    console.log(activeStep);
    return (
      <div id="workspaceStepper" className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.title}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography />
            <Button onClick={() => handleReset()} className={classes.button}>
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
