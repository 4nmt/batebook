import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: ''
    };
    this.addressNode = React.createRef();
    this.amountNode = React.createRef();
  }

  render() {
    const { name, sendPayment } = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="name">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="address placeholder"
            innerRef={node => (this.addressNode = node)}
          />
          <Label for="name">Amount</Label>
          <Input
            type="text"
            name="amount"
            id="amount"
            placeholder="amount placeholder"
            innerRef={node => (this.amountNode = node)}
          />
        </FormGroup>

        <Button
          onClick={() => {
            sendPayment(this.addressNode.value, this.amountNode.value);
            this.addressNode.value = '';
            this.amountNode.value = '';
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default Payment;
