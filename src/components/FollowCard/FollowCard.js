import React from "react";

import "./FollowCard.css";

const FollowCard = ({ name, subName, content }) => {
  return (
    <div class="twitter-card mb-3 p-2">
      <div class="row-top">
        <div class="user-wrapper">
          <span class="user-image" />
        </div>
        <span class="follow">Follow</span>
      </div>
      <div class="profile-user">
        <span class="user">{name}</span>
        <span class="username">{subName}</span>
      </div>
      <p class="profile-bio">{content}</p>
    </div>
  );
};

export default FollowCard;
