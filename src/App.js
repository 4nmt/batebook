import React from "react";
import { Router,Switch, Route } from "react-router-dom";
import FollowingPage from "./containers/FollowingPage/FollowingPage";
import AccountPage from "./containers/AccountPage/AccountPage";
import TweetPage from "./containers/TweetPage/TweetPage";
import HomePage from "./containers/HomePage/HomePage";
import LoginPage from "./containers/LoginPage/LoginPage";
import PaymentPage from "./containers/PaymentPage/PaymentPage";
import CreateAccountPage from "./containers/CreateAccountPage/CreateAccountPage";
import PrivateRoute from "./components/PrivateRoute/"
import history from "./ultis//history"

const App = () => (
  <Router  history={history}>
    <Switch>
      <PrivateRoute path="/" exact component={HomePage} />
      <Route path="/login"  component={LoginPage} />
      <Route path="/:id/tweets" exact component={TweetPage} />
      <Route path="/:id/followings" component={FollowingPage} />
      <Route path="/settings" exact component={AccountPage} />
      <Route path="/payments" exact component={PaymentPage} />
      <Route path="/create" exact component={CreateAccountPage} />

      </Switch>
  </Router>
);

export default App;
