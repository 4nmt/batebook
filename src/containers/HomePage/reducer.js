import { FETCH_NEWFEEDS, ADD_TWEET, ADD_COMMENT, ADD_LIKE } from "./action";
import _ from "lodash"
import {convertNewFeeds} from "../../ultis"

const initState = [
 
];

function newFeeds(state = initState, action) {
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
    case FETCH_NEWFEEDS:
      const feeds = _.flattenDeep(action.posts)
      const newFeeds = convertNewFeeds(feeds).filter(f => f.operation)
      console.log(newFeeds);
      
      return [...newFeeds];
    default:
      return state;
  }
}

export default newFeeds;
