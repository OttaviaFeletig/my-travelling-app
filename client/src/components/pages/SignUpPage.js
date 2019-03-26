import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class SignUpPage extends Component {
    
    state = {
        username: '',
        avatarPicture: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    getSignUpData = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state)
    }
  render() {
    
    return (
      <div style={signUpPageStyle}>
        <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='username' value={this.state.username} onChange={this.getSignUpData} placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicAvatarPicture">
                <Form.Label>Avatar Picture</Form.Label>
                <Form.Control type="text" name='avatarPicture' value={this.state.avatarPicture} onChange={this.getSignUpData} placeholder="Enter picture URL" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={this.state.email} onChange={this.getSignUpData} placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={this.state.password} onChange={this.getSignUpData} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={this.getSignUpData} placeholder="Password Confirmation" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </div>
    )
  }
}

const signUpPageStyle = {
    paddingTop: '80px',
    margin: '0 20px 0 20px'
  }
