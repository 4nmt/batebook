import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FollowingPage from "./containers/FollowingPage/FollowingPage";
import FollowersPage from "./containers/FollowersPage/FollowersPage";
import AccountPage from "./containers/AccountPage/AccountPage";
import TweetPage from "./containers/TweetPage/TweetPage";

const App = () => (
  <Router>
    <>
      <Route path="/" exact component={TweetPage} />
      <Route path="/following" component={FollowingPage} />
      <Route path="/followers" component={FollowersPage} />
      <Route path="/account" component={AccountPage} />
    </>
  </Router>
);

export default App;
