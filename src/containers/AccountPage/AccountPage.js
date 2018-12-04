import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "../../components/Layout/MainLayout";

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import { Row, Col } from "reactstrap";
import { changeAccount } from "./action";
import { ChangeAccount } from "./ChangeAccount";

class AccountPage extends Component {
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
              changeAccount={this.props.changeAccount}
            />
          </Col>
        </Row>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeAccount: (name, birthday) => dispatch(changeAccount({ name, birthday }))
});

const mapStateToProps = state => ({
  account: state.account
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);
