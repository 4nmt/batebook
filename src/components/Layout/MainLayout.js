import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../../components/Header/Header";

const MainLayout = props => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default MainLayout;
