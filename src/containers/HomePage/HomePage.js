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
import { fetchPostsSrv } from './action';

import Tweetbox from '../../components/Tweet/Tweetbox/Tweetbox';

class HomePage extends Component {
  componentDidMount() {
    const { loginAccount } = this.props;
    loginAccount(sessionStorage.getItem('key'));
  }

  componentDidUpdate(props) {
    const { fetchPostsSrv, account,tweets } = this.props;
    console.log(this.props);
    console.log(props);

    if(tweets !== props.tweets){
      fetchPostsSrv(account.followings)
    }
  }

  render() {
    console.log(this.props);
    
    return (
      <NoCatalogLayout {...this.props.account}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...this.props.account} />
          </Col>
          <Col sm="6">
            <Card>
              <CardTitle>
                {' '}
                <Tweetbox />
              </CardTitle>
              {this.props.tweets.map((obj, i) => {
                return (
                  <Tweet
                    {...obj}
                    account={{ ...this.props.account }}
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
  fetchPostsSrv: followings => dispatch(fetchPostsSrv(followings))
});

const mapStateToProps = state => ({
  account: state.account,
  tweets: state.tweets
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
