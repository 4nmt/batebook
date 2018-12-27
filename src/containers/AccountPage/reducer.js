import { CHANGE_ACCOUNT } from './action';
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../LoginPage/action';

const initState = {
  address: '',
  banner: 'https://pbs.twimg.com/profile_banners/166739404/1520706832/1500x500',
  name: 'anonymous',
      followings: [],
};

function changeAccount(state = initState, action) {
  switch (action.type) {
    case CHANGE_ACCOUNT:
      return { ...state, ...action.account };
    case LOGIN_SUCCESS:
      return { ...state, ...action.account };
    case LOGIN_FAILED:
      return { };
    default:
      return state;
  }
}

export default changeAccount;
