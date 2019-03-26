import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class LogInPage extends Component {
  render() {
    
    return (
      <div style={logInPageStyle}>
        <p>You don't have an account? Sign up <Link to='/signUp'>here</Link></p>
      </div>
    )
  }
}

const logInPageStyle = {
  paddingTop: '80px'
}
