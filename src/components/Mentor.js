import React, { Component } from 'react'

import '../style/Mentor.css';

export default class Mentor extends Component {

    markAsBookedStyle = () => {
        return {
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            borderStyle: 'solid',
            opacity: this.props.mentor.booked ? '0.5' : '1'
        }
    }

  render() {
    const {id, name, imgPath} = this.props.mentor;
    return (
      <div className="mentor"> 
        <span>{ name }</span>
        <img src={imgPath} alt='pic' onClick={this.props.isBooked.bind(this, id)} style={this.markAsBookedStyle()} /> 
      </div>
    )
  }
}
