import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";

// This component renders the overview of the progress of the current Trainingspackage.

class TaskProgress extends Component {
  renderTask(task, iconName) {
    return (
      <div>
        <Icon name={iconName} />
        {task.taskId}
      </div>
    );
  }

  renderSubPackage(sub, complete) {
    const icon =
      this.props.activeSubpackage &&
      sub.sequenceId < this.props.activeSubpackage.sequenceId ? (
        <Icon size="big" name={"check"} style={{ color: "green" }} />
      ) : (
        <Icon size="big" name={this.props.icon} />
      );

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
              if(complete || task.sequenceId < this.props.student.tasks[0].sequenceId) {
                return this.renderTask(task, "check");
              } else {
                return this.renderTask(task, this.props.icon);
              }
            })}
          </Step.Description>
        </Step.Content>
      </div>
    );
  }

  renderSubPackages() {
    return this.props.currentPackage.content.map(p => {
      if (this.props.activeSubpackage) {
        if (p.sequenceId < this.props.activeSubpackage.sequenceId) {
          return (
            <Step
              completed
              key={this.props.currentPackage._id + "" + p.sequenceId}
            >
              {this.renderSubPackage(p, true)}
            </Step>
          );
        } else if (p.sequenceId == this.props.activeSubpackage.sequenceId) {
          return (
            <Step
              active
              key={this.props.currentPackage._id + "" + p.sequenceId}
            >
              {this.renderSubPackage(p, false)}
            </Step>
          );
        } else {
          return (
            <Step key={this.props.currentPackage._id + "" + p.sequenceId}>
              {this.renderSubPackage(p, false)}
            </Step>
          );
        }
      }
    });
  }

  render() {
    return (
      <div style={{ height: "100%", minWidth: "200px" }}>
        <Step.Group fluid vertical>
          {this.renderSubPackages()}
        </Step.Group>
      </div>
    );
  }
}

export default TaskProgress;
