import React, { Component } from "react";
import { connect } from "react-redux";

import MainLayout from "../../components/Layout/MainLayout";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import FollowCard from "../../components/FollowCard/FollowCard";

import { Row, Col } from "reactstrap";

class FollowersPage extends Component {
  render() {
    return (
      <MainLayout {...this.props.account}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...this.props.account} />
          </Col>
          <Col sm="9">
            <div className="d-flex flex-row bd-highlight mb-3 ">
              {this.props.following.map(obj => {
                return <FollowCard {...obj} />;
              })}
            </div>
          </Col>
        </Row>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  account: state.account,
  following: state.following
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowersPage);
