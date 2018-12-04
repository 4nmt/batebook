import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "reactstrap";

import Tweetbox from "./Tweetbox/Tweetbox";
import TweetItemList from "./TweetItemList/TweetItemList";
import TweetModal from "./TweetModal/TweetModal";
import ShareModal from "./ShareModal/ShareModal";

import "./Tweet.scss";

class Tweet extends React.Component {
  state = {
    isCommentDisplay: false,
    isLike: false
  };

  componentDidMount() {
    const { thumb, name } = this.props.account;
    const isLike = this.props.likeList.some(
      obj => obj.thumb === thumb && obj.name === name
    );

    this.setState({ isLike: isLike });
  }

  OnOffCommentBox = () => {
    this.setState(prevstate => {
      return {
        isCommentDisplay: !prevstate.isCommentDisplay
      };
    });
  };

  like = (addLike, account, id) => {
    this.setState(prevstate => {
      addLike(id, account.thumb, account.name, !prevstate.isLike);
      return {
        isLike: !prevstate.isLike
      };
    });
  };

  render() {
    const {
      title,
      thumb,
      description,
      likeNumber,
      likeList,
      commentList,
      addComment,
      addLike,
      account,
      id
    } = this.props;

    return (
      <Card>
        <div className="tweet">
          <Row>
            <Col sm="2">
              <div className="tweet__image">
                <img src={thumb} alt="Generic placeholder" />
              </div>
            </Col>
            <Col sm="10" className="tweet__content">
              <h5> {title}</h5>
              {description}
              <div className="d-flex flex-row bd-highlight ">
                <div
                  className={`p-2 bd-highlight tweet__catalog ${
                    this.state.isLike ? "is_active " : ""
                  }}`}
                  onClick={() => this.like(addLike, account, id)}
                >
                  <i className="fas fa-star" /> {likeList.length}
                </div>
                <div
                  className={`p-2 bd-highlight tweet__catalog ${
                    this.state.isCommentDisplay ? "is_active " : ""
                  }}`}
                  onClick={this.OnOffCommentBox}
                >
                  <i className="fas fa-comment" /> {commentList.length}
                </div>
                <ShareModal
                  thumb={thumb}
                  title={title}
                  description={description}
                />
                <div className="p-2 bd-highlight ml-auto tweet__catalog">
                  <TweetModal
                    buttonLabel={`${likeList.length} like`}
                    likeList={likeList}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div
          className={
            this.state.isCommentDisplay
              ? "tweet__comment__on"
              : "tweet__comment__off"
          }
        >
          <hr />
          <Tweetbox addComment={addComment} id={id} account={account} />
          <hr />
          <TweetItemList commentList={commentList} />
        </div>
      </Card>
    );
  }
}

export default Tweet;
