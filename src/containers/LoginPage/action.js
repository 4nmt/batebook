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
      const publicKey = keyPair.publicKey()
      const data = await getAccountAPI(publicKey);
      console.log(data);

      const { address, info, balance, sequence, bandwidth, enegry } = data;
      const account = { address, ...info, balance, sequence, bandwidth, enegry };
      sessionStorage.setItem('key', secretKey);
      sessionStorage.setItem('publicKey', publicKey);
      sessionStorage.setItem('followings', info.followings);

      dispatch(loginSuccess(account));
      history.push('/')
    } catch (e) {
      console.log(e);

      dispatch(loginFailed(e));
    }
  };
};

export const refreshAccount = (publicKey) => {
  return async dispatch => {
    try {
      const data = await getAccountAPI(publicKey);
      const { address, info, balance, sequence, bandwidth, enegry } = data;
      const account = { address, ...info, balance, sequence, bandwidth, enegry };
      dispatch(loginSuccess(account));
    } catch (e) {
      console.log(e);
      
      dispatch(loginFailed(e));
    }
  };
};
