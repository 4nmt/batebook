import { createAccountAPI } from '../../api/';

export const createAccount = account => {
  return async dispatch => {
    try {
      console.log(account);
         const data = await createAccountAPI(account);
         alert("create account successfully!")
      // dispatch(updateAccount(account));
    } catch (e) {
      throw e;
    }
  };
};
