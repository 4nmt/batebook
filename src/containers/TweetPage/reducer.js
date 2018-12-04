import { LIST_TWEET, ADD_TWEET, ADD_COMMENT, ADD_LIKE } from "./action";

const initState = [
  {
    title: "anonymous",
    thumb:
      "https://i2.wp.com/futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png?fit=720%2C720",
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus",
    likeNumber: "2001",
    shareNumber: "1.2M",
    commentNumber: "1111",

    isLike: false,

    likeList: [
      {
        thumb: "https://placehold.it/64x64",
        name: "Peter Paker"
      },
      {
        thumb:
          "https://i2.wp.com/futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png?fit=720%2C720",
        name: "Iron man"
      }
    ],

    commentList: [
      {
        thumb: "https://placehold.it/64x64",
        content:
          "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo"
      },
      {
        thumb: "https://placehold.it/64x64",
        content:
          "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo"
      }
    ]
  },
  {
    title: "anonymous",
    thumb:
      "https://i2.wp.com/futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png?fit=720%2C720",
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus",
    likeNumber: "2001",
    shareNumber: "1.2M",
    commentNumber: "1111",

    isLike: false,

    likeList: [
      {
        thumb: "https://placehold.it/64x64",
        name: "Peter Paker"
      },
      {
        thumb: "https://placehold.it/64x64",
        name: "Iron man"
      }
    ],

    commentList: [
      {
        thumb: "https://placehold.it/64x64",
        content:
          "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo"
      },
      {
        thumb: "https://placehold.it/64x64",
        content:
          "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo"
      }
    ]
  }
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
    case ADD_TWEET:
      return { ...state, ...action.tweet };
    case LIST_TWEET:
      return { ...state, ...action.tweet };
    default:
      return state;
  }
}

export default tweets;
