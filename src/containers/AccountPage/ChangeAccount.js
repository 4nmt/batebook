import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone';

class ChangeAccount extends Component {
  constructor(props) {
    super(props);
    this.nameNode = React.createRef();
  }

  onImageDrop(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { name, fetchAccount } = this.props;
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
            innerRef={this.nameNode}
          />
        </FormGroup>
        <FormGroup>
          <Label for="picture">Picture</Label>
          <Input name="picture" type="file" onChange={e => this.onImageDrop(e)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Input>
        </FormGroup>
        <Button
          onClick={() => {
            if (checkFormIsValid(this.nameNode.value)) {
              fetchAccount(this.nameNode.value, this.state.imagePreviewUrl);
            } else {
              alert('some fields are missing !!');
            }
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

const checkFormIsValid = name => {
  return Boolean(name);
};
export default ChangeAccount;
