import React, { Component } from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import "./Login.scss"

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretKey: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = async event => {
    const { target : {value} } = event;
    await this.setState({
      secretKey: value
    });
  };

  submitForm = async (e) => {
    const { history , loginAccount } = this.props;
    const {secretKey} = this.state
    // console.log(encrypt(secretKey,iv,key));
    // console.log(encrypt(secretKey,iv,key).toString());
    loginAccount(secretKey )
    e.preventDefault();
     this.setState({
      secretKey: ''
    });
  }

  render() {
    const { secretKey } = this.state;
    return (
      <Container className="App">
          <h2>Sign In</h2>
          <Form className="form" >
            <Col>
              <FormGroup>
                <Label>Secret Key</Label>
                <Input
                  type="secretKey"
                  name="secretKey"
                  id="secretKey"
                  placeholder="..."
                  value={secretKey}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
            <Button style={{marginTop: "15px"}} onClick={e => this.submitForm(e)}>Submit</Button>
              </FormGroup>
            </Col>
          </Form>
      </Container>
    );
  }
}

export default LoginPage;
