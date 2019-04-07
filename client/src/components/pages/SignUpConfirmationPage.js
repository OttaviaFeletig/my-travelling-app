import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SignUpConfirmationPage extends Component {

    
  render() {

    const {username, email, avatarPicture} = this.props.location.state.detail;

    return (
      <div style={confPageStyle}>
        <h3>Thank you for registering!</h3>
        <p>You submitted the following information:</p>
        <img style={avatarStyle} src={avatarPicture} alt='avatar'></img>
        <ul>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
        </ul>
        <Link to='login'>Click here to log in!</Link>
      </div>
    )
  }
}

const confPageStyle = {
    paddingTop: '80px',
    margin: '0 20px 0 20px'
} 
const avatarStyle = {
    borderRadius: '50%',
    width: '50%'
}
