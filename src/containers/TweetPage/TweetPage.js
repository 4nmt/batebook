import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainLayout from '../../components/Layout/MainLayout';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { Row, Col } from 'reactstrap';
import Tweet from '../../components/Tweet/Tweet';

import { addComment, addLike, fetchInteractSrv } from './action';
import { refreshAccount } from '../LoginPage/action';
import ReactLoading from 'react-loading';

class TweetPage extends Component {
  componentDidMount() {
    console.log('dadad');

    const {
      refreshAccount,
      fetchInteractSrv,
      match: { params }
    } = this.props;
    refreshAccount(params.id);
    fetchInteractSrv(params.id);
  }

  componentDidUpdate(props) {
    const {
      tweets: t,
      match: {
        params: { id }
      }
    } = props;
    const {
      account,
      tweets,
      match: {
        params: { id: i }
      },
      refreshAccount,
      fetchInteractSrv
    } = this.props;
    if (id !== i) {
      refreshAccount(i);
      fetchInteractSrv(i);
    }
  }

  render() {
    const { account, tweets, addComment, addLike, followings } = this.props;
    return (
      <MainLayout {...account} tweetSize={tweets.length} followSize={account.followings.length}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...account} />
          </Col>
          <Col sm="6">
            {tweets.length === 0 ? (
              <div style={{ margin: 'auto', width: 'fit-content' }}>
                <ReactLoading
                  type="bubbles"
                  color="blue"
                  height={100}
                  width={100}
                />
              </div>
            ) : (
              tweets.map((obj, i) => {
                return (
                  <Tweet
                    {...obj}
                    account={{ ...account }}
                    addComment={addComment}
                    addLike={addLike}
                    tweets={addLike}
                    id={i}
                  />
                );
              })
            )}
          </Col>
          <Col sm="3" />
        </Row>
      </MainLayout>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (id, thumb, content) => {
    dispatch(addComment(id, { thumb, content }));
  },
  addLike: (id_tweet, thumb, name, isLike) => {
    dispatch(addLike(id_tweet, { thumb, name }, isLike));
  },
  refreshAccount: secretKey => dispatch(refreshAccount(secretKey)),
  fetchInteractSrv: publicKey => dispatch(fetchInteractSrv(publicKey))
});

const mapStateToProps = state => ({
  account: state.account,
  tweets: state.tweets,
  followings: state.followings
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetPage);
