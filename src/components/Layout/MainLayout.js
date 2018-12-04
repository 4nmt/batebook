import React, { Component } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Header from "../../components/Header/Header";
import { Container } from "reactstrap";

const MainLayout = props => {
  return (
    <React.Fragment>
      <Topbar name={props.name} thumb={props.thumb} />
      <Header banner={props.banner} avatar={props.thumb} />
      <Container style={{ marginTop: "20px" }}>{props.children}</Container>
    </React.Fragment>
  );
};

export default MainLayout;
