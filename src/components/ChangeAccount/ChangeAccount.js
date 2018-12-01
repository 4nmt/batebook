import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class ChangeAccount extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="name placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="birthday">Birthday</Label>
          <Input
            type="text"
            name="birthday"
            id="birthday"
            placeholder="birthday placeholder"
          />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}
