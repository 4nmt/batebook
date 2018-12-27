import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';
import './Account.scss';
import {
  withRouter
} from "react-router-dom";
 class Account extends React.Component {
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

  logout() {
    console.log(this.props);
    const {history} = this.props
    // Remove all saved data from sessionStorage
    sessionStorage.clear();
    history.push('/')    
  }

  render() {
    const {thumb,name ,address} = this.props
  
    return (
      <Dropdown
        className="account"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle caret>
          <img className="account__img" src={`data:image/png;base64,${thumb}`} alt="avatar" />
          {name}
        </DropdownToggle>
        <DropdownMenu>
          <Link to={`/${address}/tweets`}>
            <DropdownItem>Account</DropdownItem>
          </Link>
          <Link to={`/settings`}>
            <DropdownItem>Settings</DropdownItem>
          </Link>
          <Link to={`/payments`}>
            <DropdownItem>Payment</DropdownItem>
          </Link>
          <Link to={`/create`}>
            <DropdownItem>Create Account</DropdownItem>
          </Link>
          <DropdownItem onClick={() => this.logout()}>Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
export default withRouter(Account)