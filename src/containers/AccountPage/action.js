import { updateAllInfoAPI } from '../../api/';
export const CHANGE_ACCOUNT = 'CHANGE_ACCOUNT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const updateAccount = account => ({
  type: CHANGE_ACCOUNT,
  account
});


export const fetchAccount = account => {
  return async dispatch => {
    try {
      console.log(account);
  const data = await updateAllInfoAPI(account);

      // dispatch(updateAccount(account));
    } catch (e) {
      throw e;
    }
  };
};
