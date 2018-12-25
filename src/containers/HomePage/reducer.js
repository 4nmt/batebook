import { FETCH_POSTS, ADD_TWEET, ADD_COMMENT, ADD_LIKE } from "./action";

const initState = [
 
];

function tweets(state = initState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state.map((obj, i) => {
        if (action.id === i) {
          obj.commentList = [...obj.commentList, action.comment];
        }
        return obj;
      });
    case ADD_LIKE:
      return state.map((obj, i) => {
        if (action.id === i) {
          if (action.isLike) obj.likeList = [...obj.likeList, action.like];
          else {
            obj.likeList = obj.likeList.filter((like, i) => {
              return (
                like.name !== action.like.name ||
                like.thumb !== action.like.thumb
              );
            });
          }
        }
        return obj;
      });
    case FETCH_POSTS:
      return [ ...state, ...action.posts ];
   
    default:
      return state;
  }
}

export default tweets;
