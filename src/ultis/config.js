import crypto from 'crypto'
const MONGO_URL = 'mongodb://localhost:27017/batebook';
const GENESIS_ADDRESS =
  'GA6IW2JOWMP4WGI6LYAZ76ZPMFQSJAX4YLJLOQOWFC5VF5C6IGNV2IW7';
const INITIAL_APP_HASH = Buffer.from('forest.network by Kha Do');
// 24 hours
const BANDWIDTH_PERIOD = 86400;
const ACCOUNT_KEY = Buffer.from('account');
const MAX_BLOCK_SIZE = 22020096;
const RESERVE_RATIO = 1;
const MAX_CELLULOSE = Number.MAX_SAFE_INTEGER;
const NETWORK_BANDWIDTH = RESERVE_RATIO * MAX_BLOCK_SIZE * BANDWIDTH_PERIOD;
const PUBLIC_URL= 'https://dragonfly.forest.network'
const SERVER_URL= 'http://localhost:3333'
const iv = 'a2xhcgAAAAAAAAAA';
const key = '1234567890abcdefghijklmnopqrstuv'

export  {
  MONGO_URL,
  GENESIS_ADDRESS,
  INITIAL_APP_HASH,
  BANDWIDTH_PERIOD,
  ACCOUNT_KEY,
  MAX_BLOCK_SIZE,
  RESERVE_RATIO,
  MAX_CELLULOSE,
  NETWORK_BANDWIDTH,
  PUBLIC_URL,
  SERVER_URL,
  iv,
  key
};
