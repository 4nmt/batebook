import React from "react";
import TweetItem from "../TweetItem/TweetItem";

import "./TweetItemList.scss";

const TweetItemList = ({ commentList }) => {
  return (
    <div className="comment__container">
      {commentList.map(obj => {
        return <TweetItem msg={obj.text} thumb={obj.picture} />;
      })}
    </div>
  );
};

export default TweetItemList;
