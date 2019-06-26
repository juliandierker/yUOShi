import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";

// This component renders the overview of the progress of the current Trainingspackage.

// Step completed | active | disabled
// Find icons here: https://react.semantic-ui.com/elements/icon/
class TaskProgress extends Component {
  state = {};

  renderStepContent(task) {
    return (
      <div>
        <Icon name="student" />
        <Step.Content>
          <Step.Title>{task.taskId}</Step.Title>
          <Step.Description>{task.description}</Step.Description>
        </Step.Content>
      </div>
    );
  }

  renderCompleteTasks() {
    return this.props.completedTasks.map(task => (
      <Step key={task._id} completed>
        {this.renderStepContent(task)}
      </Step>
    ));
  }

  renderActiveTask() {
    const task = this.props.activeTask;
    if (task == undefined) return;
    return (
      <Step key={task._id} active>
        {this.renderStepContent(task)}
      </Step>
    );
  }

  renderIncompleteTasks() {
    return this.props.incompleteTasks.map(task => (
      <Step key={task._id} disabled>
        {this.renderStepContent(task)}
      </Step>
    ));
  }

  render() {
    return (
      <div style={{ height: "100%", width: "250px" }}>
        <Step.Group fluid vertical>
          {this.renderCompleteTasks()}
          {this.renderActiveTask()}
          {this.renderIncompleteTasks()}
        </Step.Group>
      </div>
    );
  }
}

export default TaskProgress;
