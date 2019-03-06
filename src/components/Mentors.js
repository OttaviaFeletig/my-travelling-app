import React, { Component } from 'react'

import Mentor from './Mentor';

import '../style/Mentors.css';

export default class Mentors extends Component {

  render() {
    return (
      this.props.mentors.map(mentor => (
          <Mentor key={mentor.id} mentor={mentor} isBooked={this.props.isBooked} />
      ))
    )
  }
}
