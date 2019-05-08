import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../Loading";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

export default class StudentTopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null,
      teacher: null,
      activeItem: false
    };
  }
  updateMenuButton() {}
  handleMenuItemClick = (e, { name }) => {
    this.updateMenuButton();
    this.setState({ visible: !this.state.visible });
    console.log(name);
    if (name === "Freies Spiel") {
      this.props.history.push("/student/game");
    }
    if (name === "Kursübersicht") {
      this.props.history.push("/student/overview");
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu secondary>
          <Dropdown item icon="bars" simple>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Icon name="dropdown" />
                <span className="text">New</span>

                <Dropdown.Menu>
                  <Dropdown.Item>Freies Spiel</Dropdown.Item>
                  <Dropdown.Item>yUOShi</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>yUOShi</Dropdown.Item>
              <Dropdown.Item>yUOShi...</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item name="Name">
            <h3> Testname </h3>
          </Menu.Item>
          <Menu.Item name="Points">
            <h3> 1200 </h3>
          </Menu.Item>
          <Menu.Item name="Experience">
            <h3> 53 </h3>
          </Menu.Item>

          <Menu.Item
            position="right"
            name="Freies Spiel"
            active={activeItem === "freegame"}
            onClick={this.handleMenuItemClick}
          />
          <Menu.Item
            position="right"
            name="Kursübersicht"
            active={activeItem === "overview"}
            onClick={this.handleMenuItemClick}
          />

          <Menu.Menu position="right">
            <Menu.Item
              icon="power off"
              active={activeItem === "logout"}
              onClick={() => Meteor.logout()}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

StudentTopMenu.propTypes = {
  courses: PropTypes.array,
  teacher: PropTypes.object
};
