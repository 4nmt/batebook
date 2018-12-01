import React from "react";
import { Link } from "react-router-dom";

const NumberLink = ({ type, number }) => {
  const link = type === "Tweets" ? "/" : type.toLowerCase();
  return (
    <Link to={link}>
      <div className="p-2 bd-highlight profile__catelog__align">
        <span className="profile__catelog__title">{type}</span>
        <span className="profile__catelog__number">{number}</span>
      </div>
    </Link>
  );
};

export default NumberLink;
