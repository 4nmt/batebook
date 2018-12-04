import React from "react";
import { Link } from "react-router-dom";

const ProfileInfo = ({ name = "anonymous", birthday = "66/99/1969" }) => {
  return (
    <div className="profile_info" style={{ marginTop: "80px" }}>
      <Link to="#">
        <h5 className="font-weight-bold text-body"> {name}</h5>
      </Link>
      <h5 className="font-weight-bold text-body">
        <i className="fas fa-birthday-cake" style={{ marginRight: "10px" }} />
        {birthday}
      </h5>
    </div>
  );
};

export default ProfileInfo;
