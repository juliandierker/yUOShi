import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tracker } from "meteor/tracker";
import Loading from "../Loading";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

export default class TeacherTopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: null,
      teacher: null,
      activeItem: false
    };
  }
  handleMenuClick(item) {
    console.log(item);
  }

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
                  <Dropdown.Item>yUOShi</Dropdown.Item>
                  <Dropdown.Item>yUOShi</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>yUOShi</Dropdown.Item>
              <Dropdown.Item>yUOShi...</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            name="yUOShi"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="yUOShi"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="yUOShi"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

TeacherTopMenu.propTypes = {
  courses: PropTypes.array,
  teacher: PropTypes.object
};
