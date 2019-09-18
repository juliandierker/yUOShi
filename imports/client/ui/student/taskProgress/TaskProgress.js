import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// This component renders the overview of the progress of the current Trainingspackage.

class TaskProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subPackages: [],
      //TODO get init activeStep
      activeStep: this.getInitStep(),
      steps: []
    };
  }
  getInitStep() {
    console.log(this.props);
    var stepId = null;
    const currentPackage = this.props.currentPackage;
    const trainings = this.props.trainings[0][currentPackage.name];
    if (!this.props.currentTask) {
      return 0;
    } else {
      var cStr = this.props.currentTask.parentId;
      console.log(this.props.currentTask.parentId);
      stepId = cStr.slice(cStr.length - 1, cStr.length);
      return parseInt(stepId);
    }
  }
  getSteps() {
    var stepArr = [];
    const currentPackage = this.props.currentPackage;
    const trainings = this.props.trainings[0][currentPackage.name];
    stepArr.push(trainings[0].title);
    this.state.subPackages[0].map((subPackage, index) => {
      stepArr.push(subPackage.title);
    });
    stepArr.push(trainings[1].title);
    return stepArr;
  }
  renderStepper() {
    var classes = makeStyles(theme => ({
      root: {
        width: "90%"
      },
      button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1)
      },
      actionsContainer: {
        marginBottom: theme.spacing(2)
      },
      resetContainer: {
        padding: theme.spacing(3)
      }
    }));
    const activeStep = this.state.activeStep;
    const steps = this.getSteps();
    function handleNext() {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
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

  componentWillMount() {
    this.generateSubPackages();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentTask && this.props.currentTask)
      this.checkProgress(prevProps);

    if (!prevProps.currentTask && this.props.currentTask) this.getInitStep();
  }
  checkProgress(prevProps) {
    const prevTask = prevProps.currentTask;
    const currentTask = this.props.currentTask;
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
      console.log(stepId);
      console.log(prevId);
      if (stepId > prevId) {
        this.setState({ activeStep: this.state.activeStep + 1 });
      } else if (stepId < prevId && prevId != 0) {
        this.setState({ activeStep: this.state.activeStep - 1 });
      }
    }
  }
  generateSubPackages() {
    let newSubPackages = [];
    this.props.currentPackage.content.map(subPackage => {
      let sp = {
        title: subPackage.title,
        id: this.props.currentPackage.name + subPackage.sequenceId,
        sequenceId: subPackage.sequenceId,
        tasks: []
      };

      // Add tasks to tasks array
      subPackage.tasks.map(task => {
        sp.tasks.push({
          name: task.title,
          parentId: task.parentId,
          sequenceId: task.sequenceId,
          description: task.description
        });
      });

      // Add trainings to tasks array
      this.props.trainings.map(training => {
        training.Motivation.map(mot => {
          if (mot.parentId == sp.id) {
            sp.tasks.push({
              name: mot.title,
              parentId: mot.parentId,
              sequenceId: mot.sequenceId,
              description: mot.content
            });
          }
        });
        training.Identität.map(ide => {
          if (ide.parentId == sp.id) {
            sp.tasks.push({
              name: ide.title,
              parentId: ide.parentId,
              sequenceId: ide.sequenceId,
              description: ide.content
            });
          }
        });
      });
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
    this.setState({ subPackages: [newSubPackages] });
  }

  renderSubPackage(sub, complete) {
    const icon =
      this.props.activeSubpackage &&
      sub.sequenceId < this.props.activeSubpackage.sequenceId ? (
        <Icon size="large" name={"check"} style={{ color: "green" }} />
      ) : (
        <Icon size="large" name={"student"} />
      );
    let cnt = 0;
    return (
      <div>
        <Step.Content>
          <div
            style={{
              display: "flex",
              lineHeight: "normal",
              alignItems: "center"
            }}
          >
            {icon}
            <Step.Title>{sub.title}</Step.Title>
          </div>
          <Step.Description>
            {sub.tasks.map(task => {
              cnt++;
              if (
                this.props.student.tasks[0] &&
                (complete ||
                  task.sequenceId < this.props.student.tasks[0].sequenceId)
              ) {
                return this.renderTask(
                  task,
                  "check",
                  "taskProgress_task_" + cnt
                );
              } else {
                return this.renderTask(
                  task,
                  "circle",
                  "taskProgress_task_" + cnt
                );
              }
            })}
          </Step.Description>
        </Step.Content>
      </div>
    );
  }

  renderSubPackages() {
    return this.state.subPackages[0].map(p => {
      if (this.props.activeSubpackage) {
        let completed = false;
        let active = false;
        if (p.sequenceId < this.props.activeSubpackage.sequenceId) {
          completed = true;
        } else if (p.sequenceId == this.props.activeSubpackage.sequenceId) {
          active = true;
        }
        return (
          <Step
            completed={completed}
            active={active}
            key={this.props.currentPackage._id + "" + p.sequenceId}
          >
            {this.renderSubPackage(p, completed)}
          </Step>
        );
      }
    });
  }

  render() {
    return <div> {this.renderStepper()} </div>;
  }
}

export default TaskProgress;
