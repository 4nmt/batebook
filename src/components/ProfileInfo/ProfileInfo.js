import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash'

const ProfileInfo = ({ name, sequence, balance, bandwidth, enegry }) => {
  return (
    <div
      className="profile_info ml-3"
      style={{ marginTop: '80px' }}
    >
      <Link to="#">
        <h4 className="font-weight-bold text-body"> {name}</h4>
      </Link>
      <h6 className="text-body">
        <span className="font-weight-bold mr-2">Sequence:</span>
        {sequence}
      </h6>
      <h6 className="text-body">
        <span className="font-weight-bold mr-2">Balance:</span>
        {balance}
      </h6>
      <h6 className="text-body">
        <span className="font-weight-bold mr-2">Enegry:</span>
        {_.toInteger(enegry)} OXY
      </h6>
    </div>
  );
};

export default ProfileInfo;
