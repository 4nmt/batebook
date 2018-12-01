import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import NumberLink from "./NumberLink";

import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="profile__container">
          <div className="profile__banner_bg">
            <img
              src="https://pbs.twimg.com/profile_banners/166739404/1520706832/1500x500"
              alt="banner"
            />
          </div>
          <Container className="relative_container">
            <div className="profile__avatar__container">
              <div className="profile__avatar ">
                <Link to="#">
                  <img
                    src="https://pbs.twimg.com/profile_images/1039929617598087169/wpthjCyB_400x400.jpg"
                    alt="avatar"
                  />
                </Link>
              </div>
            </div>
          </Container>
          <div className="profile__catelog bate_shadow">
            <Container>
              <Row>
                <Col sm="3" />
                <Col sm="6">
                  <div className="d-flex flex-row bd-highlight mb-3 ">
                    <NumberLink type="Tweets" number="1111" />
                    <NumberLink type="Following" number="2135" />
                    <NumberLink type="Followers" number="1.2M" />
                  </div>
                </Col>
                <Col sm="3" />
              </Row>
            </Container>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
