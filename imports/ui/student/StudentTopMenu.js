import React, { useContext, useState, useEffect, useRef } from "react";

import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Button } from "semantic-ui-react";

import { Navbar } from "./menus/Navbar.js";

import _ from "lodash";
import {
  Dropdown,
  Icon,
  Menu,
  Segment,
  MenuItem,
  Image,
  Sidebar,
  Responsive
} from "semantic-ui-react";

const leftItems = [
  { as: "a", content: "Lehrendenzimmer", key: "lehrendenzimmer" },
  { as: "a", content: "Klassenzimmer", key: "klassenzimmer" },
  { as: "a", content: "Mein Büro", key: "mein büro" },
  { as: "a", icon: "certificate", key: "certificate" },
  { as: "a", icon: "euro sign", key: "euro sign" },
  { as: "a", icon: "play", key: "play" },
  { as: "a", content: "Level 1", key: "level" },
  { as: "a", icon: "user", text: "profile", key: "user" }
];
const App = () => <Navbar leftItems={leftItems} />;

export default function StudentTopMenu({ student }) {

  const [dropDownActive, setDropDownActive] = useState(false);

  // this.setState({ dropDown: !dropDown });
  const prevStudent = usePrevious(student);

  useEffect({
    if (!student) {
      return
    }

    if (student.tutorials.length < )
  }, [student])

  function componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.student &&
      prevProps.student.tutorials.length < this.props.student.tutorials.length
    ) {
      if (this.state.activeTutorial) {
        this.setState({ activeTutorial: false });
      }
    }
    if (prevState.student == null && this.props.student != null) {
      this.setState({ student: this.props.student });
    }
    if (prevProps.student != null) {
      if (prevProps.student.credits != this.props.student.credits) {
        this.setState({ student: this.props.student });
      }
    }
  }
  function hoverOnClass(id) {
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
  function hoverOffClass(id) {
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
      }
      this.props.history.push("/student/classroom");
    }
    if (name === "Lehrendenzimmer") {
      this.props.history.push("/student/teacherRoom");
    }
    if (name === "Mein Büro") {
      this.props.history.push("/student/office");
    }
    if (name === "Schulübersicht") {
      this.props.history.push("/student/game");
    }
  };
  function getCredits() {
    return this.state.student ? this.state.student.credits : 0;
  }
  function getLevel() {
    return this.state.student ? this.state.student.level : 0;
  }
  function returnUser() {
    return Meteor.user() ? Meteor.user().username : "";
  }

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
      <Responsive {...Responsive.onlyMobile}>
        <Menu
          id="page__header"
          attached="top"
          style={{
            backgroundColor: "#6A96E2",
            width: "100%",
            height: "5%"
          }}>
          <Dropdown
            onClick={() => this.handleDropdownClick()}
            open={this.state.dropDown}
            fluid
            item
            icon={this.state.dropDown ? "close" : "bars"}>
            <Dropdown.Menu
              fluid
              style={{
                backgroundColor: "rgba(106, 150, 226, 0.9)",
                Color: "white!important",
                height: "100vH"
              }}>
              <Dropdown.Item
                fluid
                active={activeItem === "freegame"}
                onClick={this.handleMenuItemClick}
                onMouseEnter={() => this.hoverOnClass("classroom")}
                onMouseLeave={() => this.hoverOffClass("classroom")}>
                Klassenzimmer
              </Dropdown.Item>
              <Dropdown.Item
                fluid
                active={activeItem === "overview"}
                onClick={this.handleMenuItemClick}>
                Lehrendenzimmer
              </Dropdown.Item>
              <Dropdown.Item
                fluid
                active={activeItem === "overview"}
                onClick={this.handleMenuItemClick}>
                Mein Büro
              </Dropdown.Item>
              <Dropdown.Item icon="certificate" />
              <Dropdown.Item icon="euro sign" name={" " + this.getCredits()} />
              <Dropdown.Item icon="play" name={"" + this.getLevel()} />

              <Dropdown.Item fluid>
                <Icon name="user" />
                Profil
              </Dropdown.Item>
              <Dropdown.Item
                fluid
                active={activeItem === "overview"}
                onClick={() => Meteor.logout(() => {})}>
                {this.state.activeTutorial && this.state.activeTutorial.current && (
                  <Dropdown.Item className="border__left__menu__item">
                    <Button
                      id="skipTutorial"
                      icon
                      className="current__blue__color help__button__overwrite"
                      onClick={() =>
                        Meteor.call("students.completeTutorial", this.state.activeTutorial)
                      }>
                      {"Überspringen"}
                    </Button>
                  </Dropdown.Item>
                )}
                <Icon name="power off" />
                Ausloggen
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Menu
          id="page__header"
          attached="top"
          style={{
            backgroundColor: "#6A96E2",
            width: "100%",
            height: "5%"
          }}>
          <Dropdown
            onClick={() => this.handleDropdownClick()}
            open={this.state.dropDown}
            fluid
            item
            icon={this.state.dropDown ? "close" : "bars"}>
            <Dropdown.Menu
              fluid
              style={{
                backgroundColor: "rgba(106, 150, 226, 0.9)",
                Color: "white!important",
                height: "100vH",
                paddingTop: "2rem"
              }}>
              <Dropdown.Item
                fluid
                active={activeItem === "freegame"}
                onClick={this.handleMenuItemClick}
                onMouseEnter={() => this.hoverOnClass("classroom")}
                onMouseLeave={() => this.hoverOffClass("classroom")}>
                Klassenzimmer
              </Dropdown.Item>
              <Dropdown.Item
                fluid
                active={activeItem === "overview"}
                onClick={this.handleMenuItemClick}>
                Lehrendenzimmer
              </Dropdown.Item>
              <Dropdown.Item
                fluid
                active={activeItem === "overview"}
                onClick={this.handleMenuItemClick}>
                Mein Büro
              </Dropdown.Item>
              <Dropdown.Item icon="certificate" />
              <Dropdown.Item icon="euro sign" name={" " + this.getCredits()} />
              <Dropdown.Item icon="play" name={"" + this.getLevel()} />

              <Dropdown.Item fluid>
                <Icon name="user" />
                Profil
              </Dropdown.Item>
              {this.state.activeTutorial && this.state.activeTutorial.current && (
                <Dropdown.Item className="border__left__menu__item">
                  <Button
                    id="skipTutorial"
                    icon
                    className="current__blue__color help__button__overwrite"
                    disabled={this.state.pause}
                    onClick={() =>
                      Meteor.call("pupils.completeTutorial", this.state.activeTutorial)
                    }>
                    {"Überspringen"}
                  </Button>
                </Dropdown.Item>
              )}
              <Dropdown.Item
                fluid
                active={activeItem === "overview"}
                onClick={() => Meteor.logout(() => {})}>
                <Icon name="power off" />
                Ausloggen
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Responsive>
      <Responsive as={Segment} {...Responsive.onlyComputer}>
        {/* desktop */}
        <Menu
          id="page__header"
          secondary
          fixed="top"
          style={{
            justifyContent: "center",
            backgroundColor: "#6A96E2",
            width: "100%",
            height: "5%"
          }}>
          <Menu.Item
            id="classMenuItem"
            style={{
              color: "white"
            }}
            name="Schulübersicht"
            active={activeItem === "schoolview"}
            onClick={this.handleMenuItemClick}
          />
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
            }}>
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
            {this.state.activeTutorial && this.state.activeTutorial.current && (
              <Menu.Item className="border__left__menu__item">
                <Button
                  id="skipTutorial"
                  icon
                  className="current__blue__color help__button__overwrite"
                  onClick={() =>
                    Meteor.call("students.completeTutorial", this.state.activeTutorial)
                  }>
                  {"Überspringen"}
                </Button>
              </Menu.Item>
            )}
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
              simple>
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
      </Responsive>
    </React.Fragment>
  );
}
