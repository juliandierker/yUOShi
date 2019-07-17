import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../../Loading";
import { Button, Card, Image } from "semantic-ui-react";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

import StudentTopMenu from "../StudentTopMenu";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default class Gameoverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: null,
      trainings: null,
      packages: null,
      currentSubPackageIndex: 0
    };
  }
  componentDidMount() {
    var tasks = this.props.tasks;
    var packages = this.props.packages;

    let currentTask = this.props.student.tasks;
    let regex = "\\d+";
    if (currentTask && currentTask.parentId) {
      let currentSubPackageIndex = currentTask.parentId.match(regex);
      this.setState({ currentSubPackageIndex: currentSubPackageIndex });
    }

    if (!this.state.tasks) {
      this.setState({ tasks, trainings: this.props.trainings, packages });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.tasks && !prevProps.tasks && !this.state.tasks) {
      var tasks = this.props.tasks;
      this.setState({ tasks });
    }
  }
  handleGetTask(task) {
    if (this.props.student.tasks.length == 0) {
      Meteor.call("students.getTasks", task, this.props.student._id);
      this.props.history.push("/student/workspace");
    } else {
      // open popup
      MySwal.fire({
        title: (
          <p style={{ color: "#000000" }}>
            Du hast bereits eine aktive Aufgabe
          </p>
        ),
        text:
          "Deine zur Zeit aktive aufgabe findest du unter dem Reiter Arbeitsfläche",
        type: "info",
        showCancelButton: true,
        cancelButtonColor: "#3085D6",
        cancelButtonText: "Okay",
        confirmButtonText: "Gehe zu Arbeitsfläche"
      }).then(result => {
        if (result.value) {
          this.props.history.push("/student/workspace");
        }
      });
    }
  }
  handleGetPackage(pack) {
    const student = this.props.student;
    if (student.currentPackage.length > 0) {
      this.props.history.push("/student/workspace");
    } else {
      console.log("else");
      Meteor.call("students.getPackage", pack, student._id, (err, res) => {
        if (res) {
          this.props.history.push("/student/workspace");
        }
      });
    }
  }

  renderTracks() {
    if (this.state.packages) {
      return (
        <Card.Group>
          {this.state.packages.map((pack, index) => {
            return (
              <Card key={pack._id}>
                <Image
                  style={{ margin: "10px" }}
                  src={"/package/" + pack.name + "/" + pack.name + ".jpg"}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>{pack.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">
                      {"Aufgaben " +
                        pack.content[this.state.currentSubPackageIndex].tasks
                          .length}
                    </span>
                    <span className="date">
                      {"Inhalte " + pack.trainings.length}
                    </span>
                  </Card.Meta>
                  <Card.Description>{pack.description}</Card.Description>
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
            );
          })}
        </Card.Group>
      );
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
