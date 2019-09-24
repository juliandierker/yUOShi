import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
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
  hoverOnClass(id) {
    if (document.getElementsByClassName(id + "Marker").length > 0) {
      var markers = document.getElementsByClassName(id + "Marker");
      var text = document.getElementById(id + "Text");
      var box = document.getElementById(id + "Rect");
      if (!this.state.classHover) {
        this.setState({ classHover: true });
        var menu = document.getElementById("classMenuItem");
        for (var i in markers) {
          if (markers[i].style) {
            markers[i].style.fill = "rgb(4, 216, 76)";
          }
        }
        menu.className = "active item";
        text.style.visibility = "visible";
        box.style.visibility = "visible";
      }
    }
  }
  hoverOffClass(id) {
    if (document.getElementsByClassName(id + "Marker").length > 0) {
      var markers = document.getElementsByClassName(id + "Marker");
      var text = document.getElementById(id + "Text");
      var box = document.getElementById(id + "Rect");
      if (this.state.classHover) {
        this.setState({ classHover: false });
        for (var i in markers) {
          if (markers[i].style) {
            markers[i].style.fill = "#5BA23A";
          }
        }
        var menu = document.getElementById("classMenuItem");
        menu.className = "item";

        text.style.visibility = "hidden";
        box.style.visibility = "hidden";
      }
    }
  }
  handleMenuItemClick = (e, { name }) => {
    this.updateMenuButton();
    this.setState({ visible: !this.state.visible });
    this.props.history.push("/student/classroom");

    if (name === "Klassenzimmer") {
      var id = "classroom";
      if (document.getElementsByClassName("classroomMarker").length > 0) {
        var markers = document.getElementsByClassName(id + "Marker");
        var text = document.getElementById(id + "Text");
        var box = document.getElementById(id + "Rect");
        for (var i in markers) {
          if (markers[i].style) {
            markers[i].style.fill = "rgb(4, 216, 76)";
          }
        }

        text.style.visibility = "visible";
        box.style.visibility = "visible";
        var that = this;
        setTimeout(function() {
          that.props.history.push("/student/classroom");
        }, 1500);
      }
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
    const element = <FontAwesomeIcon icon={faMailBulk} />;

    return (
      <React.Fragment>
        <Menu
          secondary
          fixed="top"
          style={{
            justifyContent: "center",
            backgroundColor: "#6A96E2",
            width: "100%",
            height: "5%"
          }}
        >
          <Menu.Item
            id="classMenuItem"
            style={{
              color: "white"
            }}
            name="Klassenzimmer"
            active={activeItem === "freegame"}
            onClick={this.handleMenuItemClick}
            onMouseEnter={() => this.hoverOnClass("classroom")}
            onMouseLeave={() => this.hoverOffClass("classroom")}
          />
          <Menu.Item
            name="Lehrendenzimmer"
            style={{
              color: "white"
            }}
            active={activeItem === "overview"}
            onClick={this.handleMenuItemClick}
          />
          <Menu.Item
            name="Mein Büro"
            style={{
              color: "white"
            }}
            active={activeItem === "overview"}
            onClick={this.handleMenuItemClick}
          />
          {/* Start Badges*/}
          <Menu.Item
            style={{
              paddingTop: "3px",
              paddingBottom: "0px",
              margin: "0px"
            }}
          >
            <Menu.Item
              style={{
                color: "white"
              }}
              icon="certificate"
            />
            {/* End Badges*/}
            <Menu.Item
              style={{
                color: "white"
              }}
              icon="euro sign"
              name={" " + this.getCredits()}
            />
            <Menu.Item
              style={{
                color: "white"
              }}
              icon="play"
              name={"" + this.getLevel()}
            />{" "}
            {/* Level */}
            <Dropdown
              color="white"
              trigger={dropdownTrigger}
              style={{ minWidth: "120px", color: "white" }}
              item
              simple
            >
              <Dropdown.Menu style={{ marginTop: "0px" }}>
                <Dropdown.Item color="white" icon="user" text="Profil" />
                <Dropdown.Item
                  icon="power off"
                  text="Ausloggen"
                  active={activeItem === "overview"}
                  onClick={() => Meteor.logout(() => {})}
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
