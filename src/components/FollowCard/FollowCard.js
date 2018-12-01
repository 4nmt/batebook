import React from "react";

import "./FollowCard.css";

class FollowCard extends React.Component {
  render() {
    return (
      <div class="twitter-card">
        <div class="row-top">
          <div class="user-wrapper">
            <span class="user-image" />
          </div>
          <span class="follow">Follow</span>
        </div>
        <div class="profile-user">
          <span class="user">Jane Doe</span>
          <span class="username">@JaneDoe_</span>
        </div>
        <p class="profile-bio">
          Geek, Chef, Connector of Awesomeness, Information Addict, Part-time
          dictator, full time foodie. I walk faster when I see a creepy van.
        </p>
      </div>
    );
  }
}

export default FollowCard;
