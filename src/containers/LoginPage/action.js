import { getAccountAPI } from '../../api/';
import { Keypair } from 'stellar-base'
import history from "../../ultis/history"

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_SUCCESS';

export const loginSuccess = account => ({
  type: LOGIN_SUCCESS,
  account
});

export const loginFailed = err => ({
  type: LOGIN_FAILED,
  err
});



export const loginAccount = (secretKey) => {
  return async dispatch => {
    try {
      const keyPair = Keypair.fromSecret(secretKey);

      const data = await getAccountAPI(keyPair.publicKey());
      console.log(data);

      const { address, info, balance, sequence, bandwidth, enegry } = data;
      const account = { address, ...info, balance, sequence, bandwidth, enegry };
      sessionStorage.setItem('key', secretKey);
      dispatch(loginSuccess(account));
      history.push('/')
    } catch (e) {
      console.log(e);

      dispatch(loginFailed(e));
    }
  };
};

export const refreshAccount = (secretKey) => {
  return async dispatch => {
    try {
      const keyPair = Keypair.fromSecret(secretKey);
      const data = await getAccountAPI(keyPair.publicKey());

      const { address, info, balance, sequence, bandwidth, enegry } = data;
      const account = { address, ...info, balance, sequence, bandwidth, enegry };
      sessionStorage.setItem('key', secretKey);
      dispatch(loginSuccess(account));
    } catch (e) {
      console.log(e);
      
      dispatch(loginFailed(e));
    }
  };
};
