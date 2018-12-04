import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom";

import "./Account.scss";

export default class Account extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown
        className="account"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle caret>
          <img className="account__img" alt="avatar" src={this.props.thumb} />
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu>
          <Link to="/account">
            <DropdownItem>Account</DropdownItem>
          </Link>
          <DropdownItem>Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
