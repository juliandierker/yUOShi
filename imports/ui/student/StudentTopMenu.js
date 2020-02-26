import React, { useContext, useState } from "react";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Button } from "semantic-ui-react";

import { GameContext } from "./StudentContextProvider";

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

export default function StudentTopMenu({ student, activeTutorial }) {
  const { setPage } = useContext(GameContext);
  const [activeItem, setActiveItem] = useState(null);
  const [classHover, setClassHover] = useState(null);
  const [dropdownActive, setdropDownActive] = useState(false);
  const [visible, setVisible] = useState(false);

  function hoverOnClass(id) {
    if (document.getElementsByClassName(id + "Marker").length > 0) {
      var markers = document.getElementsByClassName(id + "Marker");
      var text = document.getElementById(id + "Text");
      var box = document.getElementById(id + "Rect");
      if (!classHover) {
        setClassHover(true);
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
      if (classHover) {
        setClassHover(false);
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
  function handleMenuItemClick(e, { name, content }) {
    setVisible(!visible);

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
      }
      setPage("classroom");
    }
    setActiveItem(content);
    console.log(content);
    if (content === "Lehrendenzimmer") {
      setPage("teacherRoom");
    }
    if (content === "Mein Büro") {
      setPage("office");
    }
    if (content === "Schulübersicht") {
      setPage("schoolOverview");
    }
    if (content === "Klassenzimmer") {
      setPage("classroom");
    }
  }
  function getCredits() {
    return student ? student.credits : 0;
  }
  function getLevel() {
    return student ? student.level : 0;
  }
  function returnUser() {
    return Meteor.user() ? Meteor.user().username : "";
  }

  const dropdownTrigger = (
    <span>
      <Image avatar src={"https://via.placeholder.com/50"} />
      {returnUser()}
    </span>
  );

  const element = <FontAwesomeIcon icon={faMailBulk} />;

  return (
    <React.Fragment>
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
            onClick={() => setdropDownActive(!dropdownActive)}
            open={dropdownActive}
            fluid
            item
            icon={dropdownActive ? "close" : "bars"}>
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
                onClick={handleMenuItemClick}
                onMouseEnter={() => hoverOnClass("classroom")}
                onMouseLeave={() => hoverOffClass("classroom")}>
                Klassenzimmer
              </Dropdown.Item>
              <Dropdown.Item fluid active={activeItem === "overview"} onClick={handleMenuItemClick}>
                Lehrendenzimmer
              </Dropdown.Item>

              <Dropdown.Item fluid active={activeItem === "overview"} onClick={handleMenuItemClick}>
                Mein Büro
              </Dropdown.Item>
              <Dropdown.Item icon="certificate" />
              <Dropdown.Item icon="euro sign" name={" " + getCredits()} />
              <Dropdown.Item icon="play" name={"" + getLevel()} />

              <Dropdown.Item fluid>
                <Icon name="user" />
                Profil
              </Dropdown.Item>
              {activeTutorial && activeTutorial.current && (
                <Dropdown.Item className="border__left__menu__item">
                  <Button
                    id="skipTutorial"
                    icon
                    className="current__blue__color help__button__overwrite"
                    disabled={state.pause}
                    onClick={() => Meteor.call("pupils.completeTutorial", state.activeTutorial)}>
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
            content="Schulübersicht"
            active={activeItem === "schoolview"}
            onClick={handleMenuItemClick}
          />
          <Menu.Item
            id="classMenuItem"
            style={{
              color: "white"
            }}
            content="Klassenzimmer"
            active={activeItem === "freegame"}
            onClick={handleMenuItemClick}
            onMouseEnter={() => hoverOnClass("classroom")}
            onMouseLeave={() => hoverOffClass("classroom")}
          />
          <Menu.Item
            content="Lehrendenzimmer"
            style={{
              color: "white"
            }}
            active={activeItem === "overview"}
            onClick={handleMenuItemClick}
          />
          <Menu.Item
            content="Mein Büro"
            style={{
              color: "white"
            }}
            active={activeItem === "overview"}
            onClick={handleMenuItemClick}
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
              content={" " + getCredits()}
            />
            {activeTutorial && activeTutorial.current && (
              <Menu.Item className="border__left__menu__item">
                <Button
                  id="skipTutorial"
                  icon
                  className="current__blue__color help__button__overwrite"
                  onClick={() => Meteor.call("students.completeTutorial", activeTutorial)}>
                  {"Überspringen"}
                </Button>
              </Menu.Item>
            )}
            <Menu.Item
              style={{
                color: "white"
              }}
              icon="play"
              name={"" + getLevel()}
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
