import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import FollowingPage from "./containers/FollowingPage/FollowingPage";
import FollowersPage from "./containers/FollowersPage/FollowersPage";
import AccountPage from "./containers/AccountPage/AccountPage";
import TweetPage from "./containers/TweetPage/TweetPage";
import LoginPage from "./containers/LoginPage/LoginPage";
import PrivateRoute from "./components/PrivateRoute/"
import history from "./ultis//history"

const App = () => (
  <Router  history={history}>
    <>
      <PrivateRoute path="/" exact component={TweetPage} />
      <Route path="/login"  component={LoginPage} />
      <Route path="/following" component={FollowingPage} />
      <Route path="/followers" component={FollowersPage} />
      <Route path="/account" component={AccountPage} />
    </>
  </Router>
);

export default App;
