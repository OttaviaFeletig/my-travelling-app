import React, { Component } from 'react'

import '../style/Mentor.css';

export default class Mentor extends Component {
  render() {
    return (
      <React.Fragment> 
        <span>{ this.props.name }</span>
        <img src={this.props.imgPath} alt='pic' /> 
      </React.Fragment>
    )
  }
}
