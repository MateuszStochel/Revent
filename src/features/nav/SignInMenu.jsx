import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

const SignInMenu = ({ signOut }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="bob">
        <Dropdown.Menu>
          <Dropdown.Item
            as={NavLink}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My profile" icon="user" />
          <Dropdown.Item onClick={signOut} text="Sign out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignInMenu;