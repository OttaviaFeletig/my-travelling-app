import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    const logInStyle = {
        background: 'white',
        color: '#32607F',
        border: 'none',
        borderRadius: '50%'
    }
    return (
      <div>
        <button style={logInStyle}>
            <h3>Login</h3>
        </button>
      </div>
    )
  }
}
