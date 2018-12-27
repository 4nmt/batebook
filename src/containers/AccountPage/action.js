import { updateAllInfoAPI } from '../../api/';
export const CHANGE_ACCOUNT = 'CHANGE_ACCOUNT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const updateAccount = account => ({
  type: CHANGE_ACCOUNT,
  account
});


export const updateAllAccount = account => {
  return async dispatch => {
    try {
      console.log(account);
      console.log(data);

      const data = await updateAllInfoAPI(account);
      console.log(data);
      
      // dispatch(updateAccount(account));
    } catch (e) {
      throw e;
    }
  };
};
