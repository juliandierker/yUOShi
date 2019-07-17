import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../Loading";
import {
  Dropdown,
  Icon,
  Menu,
  Segment,
  MenuItem,
  Image
} from "semantic-ui-react";

export default class StudentTopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null,
      teacher: null,
      activeItem: false,
      student: null
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.student == null && this.props.student != null) {
      this.setState({ student: this.props.student });
    }
    if (prevProps.student != null) {
      if (prevProps.student.credits != this.props.student.credits) {
        this.setState({ student: this.props.student });
      }
    }
  }
  updateMenuButton() {}
  handleMenuItemClick = (e, { name }) => {
    this.updateMenuButton();
    this.setState({ visible: !this.state.visible });
    if (name === "Freies Spiel") {
      this.props.history.push("/student/game");
    }
    if (name === "Kursübersicht") {
      this.props.history.push("/student/overview");
    }
    if (name === "Arbeitsfläche") {
      this.props.history.push("/student/workspace");
    }
  };
  getCredits() {
    return this.state.student ? this.state.student.credits : 0;
  }
  getLevel() {
    return this.state.student ? this.state.student.level : 0;
  }
  returnUser() {
    return Meteor.user() ? Meteor.user().username : "";
  }
  render() {
    const dropdownTrigger = (
      <span>
        <Image avatar src={"https://via.placeholder.com/50"} />
        {this.returnUser()}
      </span>
    );

    const { activeItem } = this.state;
    return (
      <React.Fragment>
        <Menu
          secondary
          style={{
            paddingLeft: "20px",
            width: "100%",
            height: "30px"
          }}
        >
          <Menu.Item
            position="left"
            name="Klassenzimmer"
            active={activeItem === "freegame"}
            onClick={this.handleMenuItemClick}
          />
          <Menu.Item
            position="left"
            name="Lehrendenzimmer"
            active={activeItem === "overview"}
            onClick={this.handleMenuItemClick}
          />
          <Menu.Item
            position="left"
            name="Mein Büro"
            active={activeItem === "overview"}
            onClick={this.handleMenuItemClick}
          />
          {/* Start Badges*/}
          <Menu.Item
            style={{
              backgroundColor: "#eeeeee",
              paddingTop: "3px",
              paddingBottom: "0px",
              margin: "0px"
            }}
          >
            <Menu.Item position="right" icon="certificate" />
            {/* End Badges*/}
            <Menu.Item icon="euro sign" name={" " + this.getCredits()} />
            <Menu.Item icon="play" name={"" + this.getLevel()} /> {/* Level */}
            <Dropdown
              trigger={dropdownTrigger}
              style={{ minWidth: "120px" }}
              item
              simple
            >
              <Dropdown.Menu style={{ marginTop: "0px" }}>
                <Dropdown.Item icon="user" text="Profil" />
                <Dropdown.Item
                  icon="power off"
                  text="Ausloggen"
                  active={activeItem === "overview"}
                  onClick={() =>
                    Meteor.logout(() => {
                      //TODO: logout is not reactive
                    })
                  }
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

StudentTopMenu.propTypes = {
  courses: PropTypes.array,
  teacher: PropTypes.object
};
