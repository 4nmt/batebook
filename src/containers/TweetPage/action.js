export const ADD_TWEET = "ADD_TWEET";
export const LIST_TWEET = "LIST_TWEET";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_LIKE = "ADD_LIKE";

export function addComment(id, comment) {
  return {
    type: ADD_COMMENT,
    id,
    comment
  };
}

export function addLike(id, like, isLike) {
  return {
    type: ADD_LIKE,
    id,
    like,
    isLike
  };
}

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}

export function listTweet(tweet) {
  return {
    type: LIST_TWEET,
    tweet
  };
}
