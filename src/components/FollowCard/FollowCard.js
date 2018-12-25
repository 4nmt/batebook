import React from 'react';

import './FollowCard.css';

const FollowCard = ({
  name,
  picture = 'https://i2.wp.com/futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png?fit=720%2C720',
  content
}) => {
  return (
    <div class="twitter-card mb-3 p-2">
      <div class="row-top">
        <div class="user-wrapper">
          <img
            src={`data:image/png;base64,${picture}`}
            className="user-image"
            alt="avatar"
          />
        </div>
        <span class="follow">Follow</span>
      </div>
      <div class="profile-user">
        <span class="user">{name}</span>
      </div>
      <p class="profile-bio">{content}</p>
    </div>
  );
};

export default FollowCard;
