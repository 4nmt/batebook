import { LIST_TWEET, ADD_TWEET } from "./action";

const initState = [
  {
    name: "Jane Doe",
    subName: "@JaneDoe_",
    thumb: "https://placehold.it/64x64",
    content:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo"
  },
  {
    name: "Jane Doe",
    subName: "@JaneDoe_",
    thumb: "https://placehold.it/64x64",
    content:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo"
  }
];

function following(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default following;
