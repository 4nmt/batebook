import { LIST_FOLLOWER, ADD_FOLLOWER } from "./action";

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
  },
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
  },
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

function followers(state = initState, action) {
  switch (action.type) {
    case ADD_FOLLOWER:
      return { ...state, ...action.tweet };
    default:
      return state;
  }
}

export default followers;
