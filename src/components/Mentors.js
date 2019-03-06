import React, { Component } from 'react'

import Mentor from './Mentor';

import '../style/Mentors.css';

export default class Mentors extends Component {

  render() {
    return (
      this.props.mentors.map(mentor => (
        <div className="mentor">
          <Mentor name={mentor.name} imgPath={mentor.imgPath} />
        </div>
      ))
    )
  }
}
