import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../../components/Header/Header";
import ProfileInfo from "../Body/ProfileInfo";
import { Container, Row, Col, Card } from "reactstrap";

const FollowLayout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col sm="3">
            <ProfileInfo />
          </Col>
          <Col sm="9">{props.children}</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default FollowLayout;
