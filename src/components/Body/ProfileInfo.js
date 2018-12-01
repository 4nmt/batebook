import React from "react";
import { Link } from "react-router-dom";

const ProfileInfo = ({ type, number }) => {
  return (
    <div class="profile_info">
      <Link to="#">
        <h5 className="font-weight-bold text-body"> Emma Watson</h5>
      </Link>
      <h5 className="font-weight-bold text-body">
        <i class="fas fa-birthday-cake" style={{ marginRight: "10px" }} />
        69/96/6969
      </h5>
    </div>
  );
};

export default ProfileInfo;
