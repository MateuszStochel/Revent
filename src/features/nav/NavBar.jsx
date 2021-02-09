import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignInMenu from "./SignInMenu";
import SignOutMenu from "./SignOutMenu";

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const { authenticated } = useSelector((state) => state.auth);

  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item exact as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "12px" }}
          />
          Re-vents
        </Menu.Item>
        <Menu.Item name="Events" as={NavLink} to="/Events" />
        {authenticated && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {authenticated ? <SignInMenu /> : <SignOutMenu />}
      </Container>
    </Menu>
  );
};

export default NavBar;
