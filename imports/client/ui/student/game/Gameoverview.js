import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../../Loading";
import { Button, Card, Image } from "semantic-ui-react";

import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

import StudentTopMenu from "../StudentTopMenu";
export default class Gameoverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: null,
      trainings: null,
      packages: null
    };
  }
  componentDidMount() {
    var tasks = this.props.tasks;
    var packages = this.props.packages;
    if (!this.state.tasks) {
      this.setState({ tasks, trainings: this.props.trainings, packages });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.tasks && !prevProps.tasks) {
      var tasks = this.props.tasks;
      this.setState({ tasks });
    }
  }
  checkTraining() {}
  handleGetTask(task) {
    if (this.props.student.tasks.length == 0) {
      this.checkTraining();
      Meteor.call("students.getTasks", task, this.props.student._id);
      this.props.history.push("/student/workspace");
    }
  }
  handleGetPackage(pack) {
    console.log("fired");
    if (this.props.student.currentPackage.length == 0) {
      this.checkTraining();
      Meteor.call("students.getPackage", pack, this.props.student._id);
      this.props.history.push("/student/workspace");
    }
  }

  // renderTracks() {
  //   if (this.state.tasks) {
  //     return this.state.tasks.map((task, index) => {
  //       return (
  //         <Card.Group>
  //           <Card>
  //             <Image
  //               src={"/tasks/" + task.filePrefix + "/" + task.taskId + ".jpg"}
  //               wrapped
  //               ui={false}
  //             />
  //             <Card.Content>
  //               <Card.Header>{task.taskId}</Card.Header>
  //               <Card.Meta>
  //                 <span className="date">Zuweisung</span>
  //               </Card.Meta>
  //               <Card.Description>{task.description}</Card.Description>
  //             </Card.Content>
  //             <Button
  //               onClick={() => this.handleGetTask(task)}
  //               basic
  //               color="green"
  //             >
  //               Bearbeiten
  //             </Button>
  //             <Card.Content extra>
  //               <Icon name="expand arrows alternate" />
  //               {task.credits}
  //             </Card.Content>
  //           </Card>
  //         </Card.Group>
  //       );
  //     });
  //   } else {
  //     return <Loading />;
  //   }
  // }
  renderTracks() {
    if (this.state.packages) {
      return this.state.packages.map((pack, index) => {
        return (
          <Card.Group>
            <Card>
              <Image
                src={"/package/" + pack.name + "/" + pack.name + ".jpg"}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{pack.name}</Card.Header>
                <Card.Meta>
                  <span className="date">
                    {"Aufgaben " + pack.tasks.length}
                  </span>
                  <span className="date">
                    {"Inhalte " + pack.trainings.length}
                  </span>
                </Card.Meta>
                <Card.Description>
                  Hier lernt ihr etwas über Motivation
                </Card.Description>
              </Card.Content>
              <Button
                onClick={() => this.handleGetPackage(pack)}
                basic
                color="green"
              >
                Bearbeiten
              </Button>
              <Card.Content extra>
                <Icon name="expand arrows alternate" />
                {"Erfahrung " + 5000}
              </Card.Content>
            </Card>
          </Card.Group>
        );
      });
    } else {
      return <Loading />;
    }
  }
  render() {
    return <div>{this.renderTracks()}</div>;
  }
}

Gameoverview.propTypes = {
  tasks: PropTypes.array
};
