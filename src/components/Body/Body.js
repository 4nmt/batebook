import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";

import Tweetbox from "../../components/Tweet/Tweetbox/Tweetbox";
import TweetItemList from "../../components/Tweet/TweetItemList/TweetItemList";
import ProfileInfo from "./ProfileInfo";
import Tweet from "../Tweet/Tweet";

import "./Body.scss";

class Body extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col sm="3">
            <ProfileInfo />
          </Col>
          <Col sm="6">
            <Tweet />
            <Tweet />
          </Col>
          <Col sm="3" />
        </Row>
      </Container>
    );
  }
}

export default Body;
