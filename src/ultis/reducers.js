import { combineReducers } from "redux";

import account from "../containers/AccountPage/reducer";
import tweets from "../containers/TweetPage/reducer";
import followers from "../containers/FollowersPage/reducer";
import following from "../containers/FollowingPage/reducer";
import newFeeds from "../containers/HomePage/reducer";

const rootReducer = combineReducers({
  account,
  newFeeds,
  tweets,
  followers,
  following
});

export default rootReducer;
