import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../../components/Login";
import {loginAccount} from "./action"


const mapDispatchToProps = dispatch => ({
  loginAccount: secretKey => dispatch(loginAccount(secretKey))
});


export default connect(
  null,
  mapDispatchToProps
)(Login);
