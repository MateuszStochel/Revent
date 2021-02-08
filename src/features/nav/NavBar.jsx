import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignInMenu from "./SignInMenu";
import SignOutMenu from "./SignOutMenu";

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  function handleSignOut() {
    setAuthenticated(false);
    history.push("/");
  }
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
            <Button
              onClick={() => setFormOpen(true)}
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
        )}
        {authenticated ? (
          <SignInMenu signOut={handleSignOut} />
        ) : (
          <SignOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
