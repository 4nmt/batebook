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

import Account from "../Account/Account";

export default class Topbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">BateBook</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Account name="Emma WatSon" thumb="" />
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
