import React, { Component } from 'react';
import { NavbarBrand, Navbar, Nav, NavItem, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { Keypair } from 'stellar-base';
import Account from './Account/Account';
import { getAccountAPI } from '../../api';
import { refreshAccount } from "../LoginPage/action";

class Topbar extends Component {
  state = {
    address: '',
    name: '',
    picture: ''
  };

  componentDidMount() {
    const secretKey = sessionStorage.getItem('key');
    const keyPair = Keypair.fromSecret(secretKey);
    const publicKey = keyPair.publicKey();
    this.loadAccount(publicKey)
  }

  loadAccount = async publicKey => {
    const data = await getAccountAPI(publicKey);
    const {
      address,
      info: { name, picture }
    } = data;
    this.setState({
      address,
      name,
      picture
    });
  };

  render() {
    const { picture, name, address,refreshAccount } = this.state;
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <h3>iSocial</h3>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Account refreshAccount={refreshAccount} address={address} name={name} thumb={picture} />
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  refreshAccount: publicKey => dispatch(refreshAccount(publicKey))
});


const mapStateToProps = state => ({
  account: state.account
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topbar);