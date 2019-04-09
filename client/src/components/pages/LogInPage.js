import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import isEmpty from 'is-empty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logInUser } from '../../actions/usersAction';

import {withRouter} from 'react-router-dom';

class LogInPage extends Component {

  state = {
    emailElement: '',
    passwordElement: ''
  }

  getLogInData = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    // console.log(this.state)
  }

  onSubmit = (event) => {
    // to prevent the page to reload when clicking on submit
    event.preventDefault();
    console.log(this.state.emailElement)
    const email = this.state.emailElement;
    const password = this.state.passwordElement;
    
    if(isEmpty(email) || isEmpty(password)){
      return alert('Please insert email and password');
    }

    const user = {
      email: email,
      password: password
    };

    this.props.logInUser(user)
    console.log(this.props)
    // this.logInUser();
  }

  componentDidUpdate(){
    if(this.props.user.isAuthenticated){
      this.props.history.push('/')
    }
  }

  componentDidMount(){
    if(this.props.user.isAuthenticated){
      this.props.history.push('/')
    }
  }

  render() {
    
    return (
      <div style={logInPageStyle}>
        <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name='emailElement' value={this.state.email} onChange={this.getLogInData} placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='passwordElement' value={this.state.password} onChange={this.getLogInData} placeholder="Password" />
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

const mapStateProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    loading: state.loading
  }
}
LogInPage.propTypes = {
  user: PropTypes.object.isRequired,
  logInUser: PropTypes.func.isRequired
}
export default connect(mapStateProps, {logInUser})(LogInPage);  