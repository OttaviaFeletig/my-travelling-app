import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import isEmpty from 'is-empty';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';


import {registerUser} from '../../actions/usersAction';

class SignUpPage extends Component {
    
    state = {
        username: '',
        avatarPicture: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    }

    getSignUpData = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit = (event) => {
        // to prevent the page to reload when clicking on submit
        event.preventDefault();

        const username = this.state.username;
        const email = this.state.email;
        let avatarPicture = this.state.avatarPicture;
        const password = this.state.password;
        const passwordConfirmation = this.state.passwordConfirmation;

        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(passwordConfirmation)){
            alert('Fill in all the fields')
        }
        
        if(password !== passwordConfirmation){
            alert('The passwords are not matching')
        }

        if(avatarPicture === ''){
            avatarPicture = 'https://png.pngtree.com/element_origin_min_pic/16/11/14/910617dff00c65cc7c1419fcf0b9f0c1.jpg';
        }

        const newUser = {
            username: username,
            email: email,
            avatarPicture: avatarPicture,
            password: password,
            passwordConfirmation: passwordConfirmation
        };

        this.props.registerUser(newUser, this.props.history)
    }

  render() {
    
    return (
      <div style={signUpPageStyle}>
        <Form onSubmit={this.onSubmit}>
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


SignUpPage.propTypes = {
    registerUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps, 
    {registerUser}
)(SignUpPage);