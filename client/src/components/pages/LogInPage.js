import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class LogInPage extends Component {

  state = {
    username: '',
    password: ''
  }

  getLogInData = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    // console.log(this.state)
}
  render() {
    
    return (
      <div style={logInPageStyle}>
        <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='username' value={this.state.username} onChange={this.getLogInData} placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={this.state.password} onChange={this.getLogInData} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                LogIn
            </Button>
        </Form>
        <p>You don't have an account? Sign up <Link to='/signUp'>here</Link></p>
      </div>
    )
  }
}

const logInPageStyle = {
  paddingTop: '80px',
  margin: '0 20px 0 20px'
}
