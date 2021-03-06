import React, { Component } from "react";
import { connect } from "react-redux";

import MainLayout from "../../components/Layout/MainLayout";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import FollowCard from "../../components/FollowCard/FollowCard";
import { refreshAccount } from "../LoginPage/action";

import { Container, Row, Col, Card } from "reactstrap";

class FollowersPage extends Component {
  componentDidMount(){
    const {refreshAccount} = this.props
    refreshAccount(sessionStorage.getItem('key'))
  }
  render() {
    console.log(this.props);

    return (
      <MainLayout {...this.props.account}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...this.props.account} />
          </Col>
          <Col sm="9">
            <div className="d-flex flex-wrap bd-highlight mb-3 ">
              {this.props.followers.map(obj => {
                return <FollowCard {...obj} />;
              })}
            </div>
          </Col>
        </Row>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  refreshAccount: secretKey => dispatch(refreshAccount(secretKey))  
});

const mapStateToProps = state => ({
  account: state.account,
  followers: state.followers
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowersPage);
