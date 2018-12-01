import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./containers/HomePage/HomePage";
import FollowingPage from "./containers/HomePage/FollowwingPage";
import FollowersPage from "./containers/HomePage/FollowersPage";
import AccountPage from "./containers/HomePage/AccountPage";

const App = () => (
  <Router>
    <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/following" component={FollowingPage} />
      <Route path="/followers" component={FollowersPage} />
      <Route path="/account" component={AccountPage} />
    </div>
  </Router>
);

export default App;
