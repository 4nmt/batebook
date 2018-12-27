import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import NumberLink from './NumberLink';

import './Header.scss';

const Catalog = ({address, tweetSize,followSize }) => {
  return (
    <div className="d-flex flex-row bd-highlight mb-3 ">
      <NumberLink address={address} type="Tweets" number={tweetSize} />
      <NumberLink address={address} type="Followings" number={followSize} />
    </div>
  );
};

export default Catalog;
