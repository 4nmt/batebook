import { combineReducers } from "redux";

import account from "../containers/AccountPage/reducer";
import tweets from "../containers/TweetPage/reducer";
import followers from "../containers/FollowersPage/reducer";
import following from "../containers/FollowingPage/reducer";

const rootReducer = combineReducers({
  account,
  tweets,
  followers,
  following
});

export default rootReducer;
