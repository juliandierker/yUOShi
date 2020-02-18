import React, { useContext, useState, useEffect, useRef } from "react";

export const NavBarMobile = ({ children, leftItems, onPusherClick, onToggle, visible }) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher dimmed={visible} onClick={onPusherClick} style={{ minHeight: "100vh" }}>
      <Menu id="page__header" fixed="top" inverted>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export const NavBarDesktop = ({ leftItems }) => (
  <Menu id="page__header" fixed="top">
    <Menu.Item />
    {_.map(leftItems, (item) => (
      <Menu.Item {...item} />
    ))}
  </Menu>
);

export const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

export default function Navbar(props) {
  const [visible, setVisible] = useState(false);
  const { children, leftItems } = props;

  return (
    <React.Fragment>
      <Responsive {...Responsive.onlyMobile}>
        <NavBarMobile
          leftItems={leftItems}
          onPusherClick={() => setVisible(!visible)}
          onToggle={() => setVisible(!visible)}
          visible={visible}>
          <NavBarChildren>{children}</NavBarChildren>
        </NavBarMobile>
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <NavBarDesktop leftItems={leftItems} />
        <NavBarChildren>{children}</NavBarChildren>
      </Responsive>
    </React.Fragment>
  );
}
