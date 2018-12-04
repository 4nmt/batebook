import React, { Component } from "react";
import { connect } from "react-redux";
import MainLayout from "../../components/Layout/MainLayout";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import { Row, Col } from "reactstrap";
import Tweet from "../../components/Tweet/Tweet";

import { addComment, addLike } from "./action";

class TweetPage extends Component {
  render() {
    return (
      <MainLayout {...this.props.account}>
        <Row>
          <Col sm="3">
            <ProfileInfo {...this.props.account} />
          </Col>
          <Col sm="6">
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
  }
});

const mapStateToProps = state => ({
  account: state.account,
  tweets: state.tweets
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetPage);
