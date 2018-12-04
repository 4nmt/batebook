import React from "react";

import "./TweetItem.scss";

class TweetItem extends React.Component {
  render() {
    const { msg, thumb } = this.props;
    return (
      <div className="twfeed__item">
        <div className="twfeed__inner row">
          <div className="col-2">
            <div className="twfeed__thumb">
              <div className="twfeed__thumb__inner">
                {thumb ? <img src={thumb} alt="thumnail" /> : ""}
              </div>
            </div>
          </div>
          <div className="col-10 twfeed__closer">
            <div className="twfeed__msg">{msg}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TweetItem;
