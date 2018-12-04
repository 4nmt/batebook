import React from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

import Account from "./Account/Account";

const Topbar = ({ name, thumb }) => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">
          <h3>BateBook</h3>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Account name={name} thumb={thumb} />
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;
