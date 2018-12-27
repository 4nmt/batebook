import React from "react";
import { Link } from "react-router-dom";

const NumberLink = ({ address , type, number, type_active, onClick }) => {
  const link = type === "Tweets" ? `/${address}/tweets` : `/${address}/followings`
  const is_active = window.location.pathname === link ? "is_active" : "";
  return (
    <Link to={link}>
      <div className={`p-2 bd-highlight profile__catelog__align  ${is_active}`}>
        <span className="profile__catelog__title">{type}</span>
        <span className={`profile__catelog__number ${is_active}`}>
          {number}
        </span>
      </div>
    </Link>
  );
};

export default NumberLink;
