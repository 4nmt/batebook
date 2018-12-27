import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.addressNode = React.createRef();
  }

  render() {
    const {  createAccount } = this.props;
    return (
      <Form>
        <h3>Create Account</h3>
        <FormGroup>
          <Label for="name">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="address placeholder"
            innerRef={node => (this.addressNode = node)}
          />
        </FormGroup>

        <Button
          onClick={() => {
            createAccount(this.addressNode.value);
            this.addressNode.value = '';
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default CreateAccount;
