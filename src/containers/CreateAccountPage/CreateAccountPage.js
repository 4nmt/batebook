import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainLayout from '../../components/Layout/MainLayout';

import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { Row, Col } from 'reactstrap';
import { createAccount } from './action';
import CreateAcc from './CreateAccount';
import { refreshAccount } from '../LoginPage/action';
import { Keypair } from 'stellar-base';

class CreateAccountPage extends Component {
  componentDidMount() {
    const { refreshAccount } = this.props;
    const secretKey = sessionStorage.getItem('key');
    const keyPair = Keypair.fromSecret(secretKey);
    const publicKey = keyPair.publicKey();
    refreshAccount(publicKey);
  }

  render() {
    return (
      <MainLayout {...this.props.account}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...this.props.account} />
          </Col>
          <Col sm="9">
            {' '}
            <CreateAcc
              {...this.props.account}
              createAccount={this.props.createAccount}
            />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  createAccount: (address) =>
    dispatch(createAccount({ address })),
  refreshAccount: publicKey => dispatch(refreshAccount(publicKey))
});

const mapStateToProps = state => ({
  account: state.account
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccountPage);
