import React, { useContext, useState } from "react";

import { Button } from "semantic-ui-react";

import { GameContext } from "./StudentContextProvider";

import { Dropdown, Menu, Image, Icon } from "semantic-ui-react";

export default function StudentTopMenu({ activeTutorial }) {
  const { setPage } = useContext(GameContext);
  const [activeItem, setActiveItem] = useState(null);
  const [classHover, setClassHover] = useState(null);
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
    if (content === "TestWorkspace") {
      setPage("testWorkspace");
    }
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

  function returnUser() {
    return Meteor.user() ? Meteor.user().username : "";
  }

  const dropdownTrigger = (
    <span>
      <Image avatar src={"https://via.placeholder.com/50"} />
      {returnUser()}
    </span>
  );

  return (
    <React.Fragment>
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
          <Dropdown
            color="white"
            trigger={dropdownTrigger}
            style={{ minWidth: "120px", color: "white" }}
            item
            simple>
            <Dropdown.Menu style={{ marginTop: "0px" }}>
              <Dropdown.Item color="white" icon="user" text="Profil" />
              <Dropdown.Item
                icon="power"
                text="Ausloggen"
                active={activeItem === "overview"}
                onClick={() => Meteor.logout(() => { })}
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
}
