import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoCatalogLayout from '../../components/Layout/NoCatalogLayout';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import Tweet from '../../components/Tweet/Tweet';

import { addComment, addLike } from './action';
import { loginAccount } from '../LoginPage/action';
import { fetchPostsSrv, uploadPostsSrv } from './action';

import Tweetbox from '../../components/Tweet/Tweetbox/Tweetbox';

class HomePage extends Component {
  componentDidMount() {
    const { loginAccount } = this.props;
    loginAccount(sessionStorage.getItem('key'));
  }

  componentDidUpdate(props) {
    const { fetchPostsSrv, account, tweets } = this.props;
    console.log(this.props);
    console.log(props);

    if (tweets !== props.tweets) {
      fetchPostsSrv(account.followings);
    }
  }

  render() {
    console.log(this.props);
    const {account ,uploadPostsSrv } = this.props
    return (
      <NoCatalogLayout {...account}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...account} />
          </Col>
          <Col sm="6">
            <Card>
              <CardTitle>
                {' '}
                <Tweetbox uploadPostsSrv={uploadPostsSrv} />
              </CardTitle>
              {this.props.tweets.map((obj, i) => {
                return (
                  <Tweet
                    {...obj}
                    account={{ ...account }}
                    addComment={this.props.addComment}
                    addLike={this.props.addLike}
                    id={i}
                  />
                );
              })}
            </Card>
          </Col>
          <Col sm="3" />
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
  uploadPostsSrv: text => dispatch(uploadPostsSrv(text))
});

const mapStateToProps = state => ({
  account: state.account,
  tweets: state.tweets
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
