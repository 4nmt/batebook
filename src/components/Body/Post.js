import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "reactstrap";

import Tweetbox from "../../components/Tweet/Tweetbox/Tweetbox";
import TweetItemList from "../../components/Tweet/TweetItemList/TweetItemList";

class Post extends React.Component {
  render() {
    return (
      <Card>
        <Row>
          <Col sm="2">
            <img
              className="img_post"
              src="https://placehold.it/64x64"
              alt="Generic placeholder"
            />
          </Col>
          <Col sm="10">
            <h5> Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <div className="d-flex flex-row bd-highlight mb-3">
              <Link to="/tweets">
                <div className="p-2 bd-highlight catalog_align">
                  <i class="fas fa-share" />
                </div>
              </Link>
              <Link to="/following">
                <div className="p-2 bd-highlight catalog_align">
                  <i class="fas fa-retweet" />
                </div>
              </Link>
              <Link to="/followers">
                <div className="p-2 bd-highlight catalog_align">
                  <i class="fas fa-star" />
                </div>
              </Link>
              <Link to="/followers">
                <div className="p-2 bd-highlight catalog_align">
                  <i class="fas fa-ellipsis-h" />
                </div>
              </Link>
            </div>
          </Col>
        </Row>
        <div className="toogle">
          <Tweetbox />
          <TweetItemList />
        </div>
      </Card>
    );
  }
}

export default Post;
