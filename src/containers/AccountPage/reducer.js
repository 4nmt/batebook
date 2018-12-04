import { CHANGE_ACCOUNT } from "./action";

const initState = {
  banner: "https://pbs.twimg.com/profile_banners/166739404/1520706832/1500x500",
  name: "anonymous",
  thumb:
    "https://i2.wp.com/futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png?fit=720%2C720",
  birthday: "99/99/999"
};

function changeAccount(state = initState, action) {
  switch (action.type) {
    case CHANGE_ACCOUNT:
      return { ...state, ...action.account };
    default:
      return state;
  }
}

export default changeAccount;
