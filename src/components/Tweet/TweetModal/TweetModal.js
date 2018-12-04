import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import TweetItem from "../TweetItem/TweetItem";

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
    return (
      <div>
        <Button color="danger" size="sm" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Liked {this.props.buttonLabel} times{" "}
          </ModalHeader>
          <ModalBody>
            <div className="comment__container">
              {this.props.likeList.map(obj => {
                return <TweetItem msg={obj.name} thumb={obj.thumb} />;
              })}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default TweetModal;
