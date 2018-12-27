import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone';

class ChangeAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imagePreviewUrl: ''
    };
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
    const { name, updateAllAccount } = this.props;
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
            innerRef={node => (this.nameNode = node)}
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
            updateAllAccount(this.nameNode.value, this.state.imagePreviewUrl);
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default ChangeAccount;
