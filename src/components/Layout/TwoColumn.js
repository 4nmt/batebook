import React, { Component } from "react";
import Navbar from "../Topbar/Topbar";
import Header from "../Header/Header";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { Container, Row, Col, Card } from "reactstrap";

const TwoColumn = props => {
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

export default TwoColumn;
