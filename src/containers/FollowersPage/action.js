export const ADD_FOLLOWER = "ADD_TWEET";
export const LIST_FOLLOWER = "LIST_FOLLOWER";

export function addFollower(follower) {
  return {
    type: ADD_FOLLOWER,
    follower
  };
}

export function listTweet(follower) {
  return {
    type: LIST_FOLLOWER,
    follower
  };
}
