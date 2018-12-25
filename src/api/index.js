import axios from 'axios';
import { SERVER_URL } from '../ultis/config';
import { sign, encode, decode, verify, hash } from '../lib/tx';

export const updateAccountAPI = async account => {
  try {
    const { name, picture, followings } = account;

    let tx = {
      account: 'GBOVRS6DWD56GOIEYHFFYRLUBCV3JPQXRZ7YY4B34IHK6KWO4MQXGNZF',
      version: 1,
      sequence: 1,
      memo: Buffer.alloc(0),
      operation: 'update_account'
    };
    var secretKey = sessionStorage.getItem('key');
    if (name) {
      const params = {
        key: 'name',
        value: Buffer.from(name)
      };
      tx.params = params;
      sign(tx, secretKey);
      console.log(encode(tx).toString('hex'));
    }

    if (picture) {
      const params = {
        key: 'picture',
        value: Buffer.from(picture)
      };
      tx.params = params;
      sign(tx, secretKey);
      console.log(encode(tx).toString('hex'));

    }
    if (followings) {
      const params = {
        key: 'followings',
        value: Buffer.from(followings)
      };
      tx.params = params;
      sign(tx, secretKey);
    }
  } catch (e) {
    throw e;
  }

  // // sign(tx, 'SD6AU6SN3JTOOM6ESNXVE5JRHYNNQF3UDH2QFFKKBIWAWNV2POAWMDFK');
  // console.log(tx);

  //  const result = await axios.post(
  //   `https://komodo.forest.network/tx_search?query=%22account=%27GAO4J5RXQHUVVONBDQZSRTBC42E3EIK66WZA5ZSGKMFCS6UNYMZSIDBI%27%22`
  // );

  // res.json(encode(tx).toString('hex'));
  // const res = await axios.post(`https://jsonplaceholder.typicode.com/users`,{})
};

export const getAccountAPI = async publicKey => {
  try {
    const res = await axios.get(`${SERVER_URL}/accounts/${publicKey}`);
    return res.data;
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