import React from "react";

import TweetItem from "../TweetItem/TweetItem";

class TweetItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { text: "dadsa", thumb: "https://placehold.it/64x64" },
        { text: "dadsa", thumb: "https://placehold.it/64x64" }
      ]
    };
  }

  render() {
    const tweets = this.state.items,
      tweetsList = tweets.map(obj => {
        return <TweetItem msg={obj.text} thumb={obj.thumb} />;
      });

    return (
      <div>
        {tweetsList.length > 0 ? tweetsList : [<TweetItem />, <TweetItem />]}
      </div>
    );
  }
}

export default TweetItemList;
