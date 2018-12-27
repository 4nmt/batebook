import { getPostListAPI, getInteractListAPI } from '../../api/';
export const ADD_TWEET = 'ADD_TWEET';
export const LIST_TWEET = 'LIST_TWEET';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_LIKE = 'ADD_LIKE';

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = posts => ({
  type: FETCH_POSTS,
  posts
});

export const fetchPostsSrv = posts => {
  return async dispatch => {
    try {
      
      let postList = posts.map(async address => {
        const data = await getPostListAPI(address);
        const {
          info: { name, picture }
        } = data;
        return { name, picture };
      });
      postList = await Promise.all(postList);

      dispatch(fetchPosts(postList));
    } catch (e) {
      throw e;
    }
  };
};

export const fetchInteractSrv = publicKey => {
  return async dispatch => {
    try {
      let res = await getInteractListAPI(publicKey)
      let postList = await Promise.all(res);
      
      console.log(postList.filter(f => Boolean(f)));
        
      dispatch(fetchPosts(postList.filter(f => Boolean(f))));
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
