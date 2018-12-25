import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainLayout from '../../components/Layout/MainLayout';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import FollowCard from '../../components/FollowCard/FollowCard';
import { refreshAccount } from '../LoginPage/action';
import { fetchFollowings, fetchFollowingsSrv } from './action';

import { Row, Col } from 'reactstrap';

class FollowersPage extends Component {
  static getDerivedStateFromProps(props) {
    // const { account,refreshAccount } = props;
    // console.log(props);

    // if (account.address === '') {
    //   refreshAccount(sessionStorage.getItem('key'));
    // }
  }
  componentDidUpdate(props){
    const { account, fetchFollowingsSrv, followings } = this.props;
    console.log(props);
    console.log(this.props);
   
    if (account.followings.length !== followings.length) {
      fetchFollowingsSrv(account.followings);
    }
  }

  componentDidMount() {
    const { refreshAccount } = this.props;
    refreshAccount(sessionStorage.getItem('key'));
  }

  render() {
    const { followings } = this.props;
    console.log(followings);
    return (
      <MainLayout {...this.props.account}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...this.props.account} />
          </Col>
          <Col sm="9">
            <div className="d-flex flex-wrap bd-highlight mb-3 ">
              {followings.map(obj => {
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
  refreshAccount: secretKey => dispatch(refreshAccount(secretKey)),
  fetchFollowingsSrv: followings => dispatch(fetchFollowingsSrv(followings))
});

const mapStateToProps = state => ({
  account: state.account,
  followings: state.following
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowersPage);
