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
    const res = await axios.get(
      `${PUBLIC_URL}/tx_search?query="account=%27${publicKey}%27"`
    );
    let txs = _.get(res, 'data.result.txs');
    txs = txs.map(tx => {
      return decode(Buffer.from(tx.tx, 'base64'));
    });

    return _.filter(txs, { account: publicKey }).length;
  } catch (error) {
    throw error;
  }
};

// ACCOUNT
export const updateAccountAPI = async (data, key) => {
  try {
    var secretKey = sessionStorage.getItem('key');
    const keypair = Keypair.fromSecret(secretKey);
    const publicKey = keypair.publicKey();
    const sequence = await getSequencefromPublicAPI(publicKey);
    console.log(data);

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
      await axios.get(`${PUBLIC_URL}/broadcast_tx_commit?tx=0x${dataHex}`);
    }
  } catch (e) {
    throw e;
  }
};

export const updateAllInfoAPI = async account => {
  try {
    const { name, picture, followings } = account;
    if (name) {
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

// POST
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
    var secretKey = sessionStorage.getItem('key');
    const keypair = Keypair.fromSecret(secretKey);
    const publicKey = keypair.publicKey();
    const sequence = await getSequencefromPublicAPI(publicKey);
    console.log(followings);

    const addresses = followings.map(f => base32.decode(f.address));

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
      console.log(tx);

      // sign(tx, secretKey);
      // const dataHex = encode(tx).toString('hex');
      // await axios.get(`${PUBLIC_URL}/broadcast_tx_commit?tx=0x${dataHex}`);
      // alert("Followings Actions successfully")
    }
  } catch (error) {
    throw error;
  }
};
