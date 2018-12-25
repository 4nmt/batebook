import { FETCH_FOLLOWINGS } from "./action";
import _ from "lodash"
const initState = [
//   {
//     name: "Jane Doe",
//     picture: "https://placehold.it/64x64",
//     content:
//       "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo"
//   },
//   {
//     name: "Jane Doe",
//     picture: "https://placehold.it/64x64",
//     content:
//       "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo"
//   }
];

function following(state = initState, action) {
  switch (action.type) {
    case FETCH_FOLLOWINGS:
      return [...state, ...action.followings]
    default:
      return state;
  }
}

export default following;
