import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoCatalogLayout from '../../components/Layout/NoCatalogLayout';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import { Row, Col, Card, CardTitle } from 'reactstrap';
import Tweet from '../../components/Tweet/Tweet';
import { Keypair } from 'stellar-base';
import { addComment, addLike } from './action';
import { loginAccount } from '../LoginPage/action';
import { fetchPostsSrv, uploadPostsSrv } from './action';
import { fetchInteractSrv } from './action';
import Tweetbox from '../../components/Tweet/Tweetbox/Tweetbox';
import ReactLoading from 'react-loading';
class HomePage extends Component {
  componentDidMount() {
    const { loginAccount, fetchInteractSrv, account } = this.props;
    const secretKey = sessionStorage.getItem('key');
    loginAccount(secretKey);
    if (account.address) {
      fetchInteractSrv(account.followings);
    }
    console.log(this.props);
  }

  componentWillReceiveProps(props) {
    const { account } = this.props;
    const { account: acc, fetchInteractSrv } = props;

    if (account.address !== acc.address) {
      fetchInteractSrv(acc.followings);
    }
  }

  componentDidUpdate(props) {
    const {
      fetchPostsSrv,
      account: { followings },
      newFeeds
    } = this.props;
    // console.log(this.props);
    // console.log(props);

    // if (newFeeds !== props.newFeeds) {
    //   fetchInteractSrv(followings);
    // }
  }

  render() {
    const { account, uploadPostsSrv, newFeeds } = this.props;
    console.log(this.props);
    let feeds = newFeeds.filter((f,i) => i < 30)
    console.log(feeds);
    
    return (
      <NoCatalogLayout {...account}>
        <Row>
          <Col sm="4">
            <ProfileInfo {...account} />
          </Col>
          <Col sm="5">
            {newFeeds.length === 0 ? (
              <div style={{ margin: 'auto', width: 'fit-content' }}>
                <ReactLoading
                  type="bubbles"
                  color="blue"
                  height={100}
                  width={100}
                />
              </div>
            ) : (
              <Card>
                <CardTitle>
                  {' '}
                  <Tweetbox uploadPostsSrv={uploadPostsSrv} />
                </CardTitle>
                {newFeeds.map((obj, i) => {
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
                })}
              </Card>
            )}
          </Col>
          <Col sm="2" />
        </Row>
      </NoCatalogLayout>
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
  loginAccount: secretKey => dispatch(loginAccount(secretKey)),
  fetchPostsSrv: followings => dispatch(fetchPostsSrv(followings)),
  uploadPostsSrv: text => dispatch(uploadPostsSrv(text)),
  fetchInteractSrv: followings => dispatch(fetchInteractSrv(followings))
});

const mapStateToProps = state => ({
  account: state.account,
  newFeeds: state.newFeeds
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
