import React, { Component } from "react";
import { Icon, Step } from "semantic-ui-react";

// This component renders the overview of the progress of the current Trainingspackage.

class TaskProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subPackages: []
    };
  }
  renderTask(task, iconName, k) {
    return (
      <div key={k}>
        <Icon size="tiny" name={iconName} />
        {task.name}
      </div>
    );
  }

  componentWillMount() {
    this.generateSubPackages();
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
