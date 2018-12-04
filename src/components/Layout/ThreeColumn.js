import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../../components/Header/Header";
import ProfileInfo from "../Body/ProfileInfo";
import { Container, Row, Col, Card } from "reactstrap";

const ThreeColumn = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col sm="3">
            <ProfileInfo name={props.name} birthday={props.birthday} />
          </Col>
          <Col sm="6">{props.children}</Col>
          <Col sm="3" />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ThreeColumn;
