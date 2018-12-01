import React from "react";
import "./Tweetbox.css";

class TweetBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxLength: 160
    };
  }

  messageLength() {
    return this.state.message.length;
  }

  showMaxLength() {
    return this.messageLength() > this.state.maxLength * 0.9;
  }

  disableButton() {
    return this.messageLength() == 0;
  }

  maxLengthClassName() {
    if (this.messageLength() == this.state.maxLength) {
      return "red";
    }
  }

  handleChange = e => {
    const val = e.target.value;

    this.setState({
      message: val
    });
  };

  render() {
    return (
      <div class="tweetbox_container clearfix">
        <textarea
          name="message"
          placeholder="Tweet something..."
          onChange={this.handleChange}
          maxlength={this.state.maxLength}
        >
          {this.state.message}
        </textarea>

        {this.showMaxLength() && (
          <span className={this.maxLengthClassName()}>
            {this.messageLength()}/{this.state.maxLength}
          </span>
        )}

        <button type="button" disabled={this.disableButton()}>
          Tweet
        </button>
      </div>
    );
  }
}

export default TweetBox;
