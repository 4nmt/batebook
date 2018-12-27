import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainLayout from '../../components/Layout/MainLayout';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import FollowCard from '../../components/FollowCard/FollowCard';
import { refreshAccount } from '../LoginPage/action';
import {
  fetchFollowings,
  fetchFollowingsSrv,
  FollowingsActionSrv
} from './action';
import _ from 'lodash';
import { Row, Col } from 'reactstrap';

class FollowersPage extends Component {
  static getDerivedStateFromProps(props) {
    // const { account,refreshAccount } = props;
    // console.log(props);
    // if (account.address === '') {
    //   refreshAccount(sessionStorage.getItem('key'));
    // }
  }
  componentDidUpdate(props) {
    const { account, fetchFollowingsSrv, followings } = this.props;
    console.log(props);
    console.log(this.props);

    if (account.followings.length !== followings.length) {
      fetchFollowingsSrv(account.followings);
    }
  }

  componentDidMount() {
    const {
      refreshAccount,
      match: { params }
    } = this.props;
    console.log(this.props);

    if (params.id) refreshAccount(params.id);
    else refreshAccount(sessionStorage.getItem('key'));
  }

  Unfollowings = (address, key) => {
    const { FollowingsActionSrv } = this.props;
    let followings = sessionStorage.getItem('followings').split(',');
    let newFollowings;
    if (key === 'Follow') {
      newFollowings = [...followings, address];
    } else {
      newFollowings = followings.filter(f => f !== address);
    }
    FollowingsActionSrv(newFollowings);
  };

  render() {
    const { followings, account , tweets } = this.props;
    console.log(followings);
    return (
      <MainLayout {...account} tweetSize={tweets.length} followSize={followings.length}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...account} />
          </Col>
          <Col sm="9">
            <div className="d-flex flex-wrap bd-highlight mb-3 ">
              {followings.map(obj => {
                console.log();

                return (
                  <FollowCard
                    {...obj}
                    owner={account.address}
                    Unfollowings={(address, key) =>
                      this.Unfollowings(address, key)
                    }
                  />
                );
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
  fetchFollowingsSrv: followings => dispatch(fetchFollowingsSrv(followings)),
  FollowingsActionSrv: followings => dispatch(FollowingsActionSrv(followings))
});

const mapStateToProps = state => ({
  account: state.account,
  followings: state.following,
  tweets: state.tweets
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowersPage);
