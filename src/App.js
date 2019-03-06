import React, { Component } from 'react';

import Mentors from './components/Mentors'

import './App.css';

import alex from './mentors_pic/mentor-alex.jpg';
import luis from './mentors_pic/mentor-luis.jpg';
import mari from './mentors_pic/mentor-mari.jpg';
import michal from './mentors_pic/mentor-michal.jpg';
import pol from './mentors_pic/mentor-pol.jpg';
import raul from './mentors_pic/mentor-raul.jpg';
import ronni from './mentors_pic/mentor-ronni.jpg';
import vasil from './mentors_pic/mentor-vasil.jpg';

class App extends Component {
  state = {
    mentors: [{
      name: 'Alex',
      imgPath: alex
    },
    {
      name: 'Luis',
      imgPath: luis
    },
    {
      name: 'Mari',
      imgPath: mari
    },
    {
      name: 'Michal',
      imgPath: michal
    },
    {
      name: 'Pol',
      imgPath: pol
    },
    {
      name: 'Raul',
      imgPath: raul
    },
    {
      name: 'Ronni',
      imgPath: ronni
    },
    {
      name: 'Vasil',
      imgPath: vasil
    }]
  }
  render() {
    return (
      <div className="App">
        <Mentors mentors={this.state.mentors} />
      </div>
    );
  }
}

export default App;
