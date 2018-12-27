import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "../../components/Layout/MainLayout";

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import { Row, Col } from "reactstrap";
import { sendPayment } from "./action";
import  Payment from "./Payment";
import { refreshAccount } from "../LoginPage/action";
import {Keypair} from "stellar-base"

class AccountPage extends Component {
  componentDidMount(){
    const {refreshAccount} = this.props
    const secretKey = sessionStorage.getItem('key')
    const keyPair = Keypair.fromSecret(secretKey);
    const publicKey = keyPair.publicKey()
    refreshAccount(publicKey)
  }
  
  render() {
    return (
      <MainLayout {...this.props.account}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...this.props.account} />
          </Col>
          <Col sm="9">
            {" "}
            <Payment
              {...this.props.account}
              sendPayment={this.props.sendPayment}
            />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  sendPayment: (address,amount) => dispatch(sendPayment({address,amount})),
  refreshAccount: publicKey => dispatch(refreshAccount(publicKey))
});


const mapStateToProps = state => ({
  account: state.account
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);
