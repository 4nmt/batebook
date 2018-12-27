import React from "react";
import "./Tweetbox.css";
import { Button } from "reactstrap";

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
    return this.messageLength() === 0;
  }

  maxLengthClassName() {
    if (this.messageLength() === this.state.maxLength) {
      return "red";
    }
  }

  handleChange = e => {
    const val = e.target.value;
    this.setState({
      message: val
    });
  };

  clearInput = () => {
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <div className="tweetbox_container clearfix">
        <textarea
          name="message"
          placeholder="Tweet something..."
          onChange={this.handleChange}
          maxLength={this.state.maxLength}
          value={this.state.message}
        />

        {this.showMaxLength() && (
          <span className={this.maxLengthClassName()}>
            {this.messageLength()}/{this.state.maxLength}
          </span>
        )}

        <div className="btn-margin">
          <Button
            color="secondary"
            type="button"
            disabled={this.disableButton()}
            onClick={() => {
              this.props.uploadPostsSrv(this.state.message)
              this.clearInput();
            }}
          >
            Tweet
          </Button>
        </div>
      </div>
    );
  }
}

export default TweetBox;
