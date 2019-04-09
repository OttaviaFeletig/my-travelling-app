import React, { Component } from 'react'

export default class MyAccountPage extends Component {
  render() {
    return (
      <div style={myAccountPageStyle}>
        <p>this is my account</p>
      </div>
    )
  }
}

const myAccountPageStyle = {
    paddingTop: '200px',
    margin: '0 20px 0 20px'
  }
