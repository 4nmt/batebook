import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Container
} from "reactstrap";

// import TweetBox from "../TweetBox/TweetBox";

class TweetModal extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { thumb, title, description } = this.props;
    return (
      <div>
        <div className="p-2 bd-highlight tweet__catalog" onClick={this.toggle}>
          <i className="fas fa-share" />
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Retweet this to your followers?
          </ModalHeader>
          <ModalBody>
            <div className="tweetbox_container clearfix">
              <textarea
                name="message"
                placeholder="Tweet something..."
                onChange={this.handleChange}
                maxLength={this.state.maxLength}
                value={this.state.message}
              />
            </div>

            <div className="tweet">
              <Row>
                <Col sm="2">
                  <div className="tweet__image">
                    <img src={thumb} alt="Generic placeholder" />
                  </div>
                </Col>
                <Col sm="10" className="tweet__content">
                  <h5> {title}</h5>
                  {description}
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Tweet
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TweetModal;
