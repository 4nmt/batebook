import axios from 'axios';
import { SERVER_URL, PUBLIC_URL } from '../ultis/config';
import { sign, encode, decode, verify, hash } from '../lib/tx';
import _ from 'lodash';
const vstruct = require('varstruct');
const base32 = require('base32.js');
const { Keypair } = require('stellar-base');
const PlainTextContent = vstruct([
  { name: 'type', type: vstruct.UInt8 },
  { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) }
]);

// TOOLS
export const getSequencefromPublicAPI = async publicKey => {
  try {
    // const res = await axios.get(
    //   `${PUBLIC_URL}/tx_search?query="account=%27${publicKey}%27"`
    // );
    // let txs = _.get(res, 'data.result.txs');
    // txs = txs.map(tx => {
    //   return decode(Buffer.from(tx.tx, 'base64'));
    // });

    // return _.filter(txs, { account: publicKey }).length;

    const res = await getAccountAPI(publicKey);
    return res.sequence
  } catch (error) {
    throw error;
  }
};

// ACCOUNT
export const updateAccountAPI = async (data, key) => {
  try {
    var secretKey = sessionStorage.getItem('key');
    const publicKey = sessionStorage.getItem('publicKey');
    const sequence = await getSequencefromPublicAPI(publicKey);
    console.log(data);
    console.log('sequece: ', sequence);

    if (data && key) {
      let value = Buffer.from(data);
      if (key === 'picture') {
        data = data.substring(data.indexOf(',') + 1);
        value = Buffer.from(data, 'base64');
      }
      let tx = {
        account: publicKey,
        version: 1,
        sequence: sequence + 1,
        memo: Buffer.alloc(0),
        operation: 'update_account',
        params: {
          key: key,
          value: value
        }
      };

      sign(tx, secretKey);
      const dataHex = encode(tx).toString('hex');
      const da = await axios.get(
        `${PUBLIC_URL}/broadcast_tx_commit?tx=0x${dataHex}`
      );
      console.log(da);
    }
  } catch (e) {
    throw e;
  }
};

export const updateAllInfoAPI = async account => {
  try {
    const { name, picture, followings } = account;
    console.log(account);

    if (name) {
      console.log(name);

      await updateAccountAPI(name, 'name');
    }

    if (picture) {
      await updateAccountAPI(picture, 'picture');
    }

    alert('Update successfully');
  } catch (e) {
    alert(e);
  }
};

export const getAccountAPI = async publicKey => {
  try {
    const res = await axios.get(`${SERVER_URL}/accounts/${publicKey}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// PAYMENT

export const sendPaymentAPI = async account => {
  try {
    const secretKey = sessionStorage.getItem('key');
    const publicKey = sessionStorage.getItem('publicKey');
    const sequence = await getSequencefromPublicAPI(publicKey);
    const { address, amount } = account;
    if (account) {
      let tx = {
        account: publicKey,
        version: 1,
        sequence: sequence + 1,
        memo: Buffer.alloc(0),
        operation: 'payment',
        params: {
          address,
          amount: _.toSafeInteger(amount)
        }
      };

      sign(tx, secretKey);
      const dataHex = encode(tx).toString('hex');
      await axios.get(`${PUBLIC_URL}/broadcast_tx_commit?tx=0x${dataHex}`);
    }
  } catch (error) {
    throw error;
  }
};

//CREATE ACCOUNT

export const createAccountAPI = async account => {
  try {
    const secretKey = sessionStorage.getItem('key');
    const publicKey = sessionStorage.getItem('publicKey');
    const sequence = await getSequencefromPublicAPI(publicKey);
    
    if (account) {
      let tx = {
        account: publicKey,
        version: 1,
        sequence: sequence + 1,
        memo: Buffer.alloc(0),
        operation: 'create_account',
        params: {
          address : account.address
        }
      };

      sign(tx, secretKey);
      const dataHex = encode(tx).toString('hex');
      await axios.get(`${PUBLIC_URL}/broadcast_tx_commit?tx=0x${dataHex}`);
    }
  } catch (error) {
    throw error;
  }
};
// POST

export const getInteractListAPI = async publicKey => {
  try {
  
    const interacts = await axios.get(`${SERVER_URL}/v1/interacts/${publicKey}`);
    const posts = await axios.get(`${SERVER_URL}/v1/posts/${publicKey}`);
      
    return [...interacts.data,...posts.data];
  } catch (error) {
    throw error;
  }
};

export const getPostListAPI = async publicKey => {
  try {
    const res = await axios.get(`${SERVER_URL}/posts/${publicKey}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const uploadPostAPI = async text => {
  try {
    var secretKey = sessionStorage.getItem('key');
    const keypair = Keypair.fromSecret(secretKey);
    const publicKey = keypair.publicKey();
    const sequence = await getSequencefromPublicAPI(publicKey);

    if (text) {
      let tx = {
        account: publicKey,
        version: 1,
        sequence: sequence + 1,
        memo: Buffer.alloc(0),
        operation: 'post',
        params: {
          content: PlainTextContent.encode({
            type: 1,
            text
          }),
          keys: []
        }
      };

      sign(tx, secretKey);
      const dataHex = encode(tx).toString('hex');
      await axios.get(`${PUBLIC_URL}/broadcast_tx_commit?tx=0x${dataHex}`);
      alert('Post successfully');
    }
  } catch (error) {
    throw error;
  }
};

//FOLLOWINGS
const Followings = vstruct([
  {
    name: 'addresses',
    type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35))
  }
]);

export const followingsAPI = async followings => {
  try {
    const secretKey = sessionStorage.getItem('key');
    const publicKey = sessionStorage.getItem('publicKey');
    const sequence = await getSequencefromPublicAPI(publicKey);
    console.log(followings);

    const addresses = followings.map(f => Buffer.from(base32.decode(f)));

    if (followings) {
      let tx = {
        account: publicKey,
        version: 1,
        sequence: sequence + 1,
        memo: Buffer.alloc(0),
        operation: 'update_account',
        params: {
          key: 'followings',
          value: Followings.encode({
            addresses
          })
        }
      };

      sign(tx, secretKey);
      const dataHex = encode(tx).toString('hex');
      await axios.get(`${PUBLIC_URL}/broadcast_tx_commit?tx=0x${dataHex}`);
    }
  } catch (error) {
    throw error;
  }
};
