import { getPostListAPI, uploadPostAPI, getInteractListAPI } from '../../api/';

export const ADD_TWEET = 'ADD_TWEET';
export const LIST_TWEET = 'LIST_TWEET';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_LIKE = 'ADD_LIKE';

export const FETCH_NEWFEEDS = 'FETCH_NEWFEEDS';
export const UPLOAD_POST = 'UPLOAD_POST';

export const fetchNewFeeds = posts => ({
  type: FETCH_NEWFEEDS,
  posts
});

export const uploadPostsSrv = text => {
  return async dispatch => {
    try {
      const data = await uploadPostAPI(text);
      console.log(data);
    } catch (e) {
      throw e;
    }
  };
};

export const fetchPostsSrv = followings => {
  return async dispatch => {
    try {
      console.log(followings);

      let postList = followings.map(async address => {
        const data = await getPostListAPI(address);
        console.log(data);

        return {};
      });
      postList = await Promise.all(postList);

      dispatch(fetchNewFeeds(postList));
    } catch (e) {
      throw e;
    }
  };
};

export const fetchInteractSrv = followings => {
  return async dispatch => {
    try {
      let postList = followings.map(async address => {
        const data = await getInteractListAPI(address);
        return await Promise.all(data);
      });
      
      postList = await Promise.all(postList);
      postList = postList.map(post => post.filter(f => Boolean(f)))
      console.log(postList);

      dispatch(fetchNewFeeds(postList));
    } catch (e) {
      throw e;
    }
  };
};
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
