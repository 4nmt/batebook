import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import NumberLink from './NumberLink';

import './Header.scss';

const Catalog = ({ tweets, followings }) => {
  return (
    <div className="d-flex flex-row bd-highlight mb-3 ">
      <NumberLink type="Tweets" number="1111" />
      <NumberLink type="Following" number="2135" />
    </div>
  );
};

export default Catalog;
