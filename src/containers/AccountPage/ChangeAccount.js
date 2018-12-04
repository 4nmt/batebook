import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export const ChangeAccount = ({ name, birthday, changeAccount }) => {
  let nameNode, birthdayNode;
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          val={name}
          placeholder="name placeholder"
          innerRef={node => (nameNode = node)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="birthday">Birthday</Label>
        <Input
          type="text"
          name="birthday"
          id="birthday"
          val={birthday}
          innerRef={node => (birthdayNode = node)}
          placeholder="birthday placeholder"
        />
      </FormGroup>

      <Button
        onClick={() => {
          if (checkFormIsValid(nameNode.value, birthdayNode.value)) {
            changeAccount(nameNode.value, birthdayNode.value);
          } else {
            alert("some fields are missing !!");
          }
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

const checkFormIsValid = (name, birthday) => {
  return Boolean(name) && Boolean(birthday);
};
