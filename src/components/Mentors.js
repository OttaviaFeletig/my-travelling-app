import React, { Component } from 'react'

import Mentor from './Mentor';

import '../style/Mentors.css';

import alex from '../mentors_pic/mentor-alex.jpg';
import luis from '../mentors_pic/mentor-luis.jpg';
import mari from '../mentors_pic/mentor-mari.jpg';
import michal from '../mentors_pic/mentor-michal.jpg';
import pol from '../mentors_pic/mentor-pol.jpg';
import raul from '../mentors_pic/mentor-raul.jpg';
import ronni from '../mentors_pic/mentor-ronni.jpg';
import vasil from '../mentors_pic/mentor-vasil.jpg';

export default class Mentors extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mentor">
          <Mentor name='Alex' imgPath={alex} />
        </div>
        <div className="mentor">
          <Mentor name='Luis' imgPath={luis} />
        </div>
        <div className="mentor">
          <Mentor name='Mari' imgPath={mari} />
        </div>
        <div className="mentor">
          <Mentor name='Michal' imgPath={michal} />
        </div>
        <div className="mentor">
          <Mentor name='Pol' imgPath={pol} />
        </div>
        <div className="mentor">
          <Mentor name='Raul' imgPath={raul} />
        </div>
        <div className="mentor">
          <Mentor name='Ronni' imgPath={ronni} />
        </div>
        <div className="mentor">
          <Mentor name='Vasil' imgPath={vasil} />
        </div>
      </React.Fragment>
      
      
    )
  }
}
