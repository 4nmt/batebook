import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "../../components/Layout/MainLayout";

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import { Row, Col } from "reactstrap";
import { fetchAccount } from "./action";
import  ChangeAccount from "./ChangeAccount";
import { refreshAccount } from "../LoginPage/action";

class AccountPage extends Component {
  componentDidMount(){
    const {loginAccount} = this.props
    refreshAccount(sessionStorage.getItem('key'))
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
            <ChangeAccount
              {...this.props.account}
              fetchAccount={this.props.fetchAccount}
            />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchAccount: (name,picture) => dispatch(fetchAccount({name,picture})),
  refreshAccount: secretKey => dispatch(refreshAccount(secretKey))
});


const mapStateToProps = state => ({
  account: state.account
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);
