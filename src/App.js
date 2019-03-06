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
      id: 1,
      name: 'Alex',
      imgPath: alex,
      booked: false
    },
    {
      id: 2,
      name: 'Luis',
      imgPath: luis,
      booked: false
    },
    {
      id: 3,
      name: 'Mari',
      imgPath: mari,
      booked: false
    },
    {
      id: 4,
      name: 'Michal',
      imgPath: michal,
      booked: false
    },
    {
      id: 5,
      name: 'Pol',
      imgPath: pol,
      booked: false
    },
    {
      id: 6,
      name: 'Raul',
      imgPath: raul,
      booked: false
    },
    {
      id: 7,
      name: 'Ronni',
      imgPath: ronni,
      booked: false
    },
    {
      id: 8,
      name: 'Vasil',
      imgPath: vasil,
      booked: false
    }]
  }

  isBooked = (id) => {
    this.setState({
      mentors: this.state.mentors.map(mentor => {
        if(mentor.id === id){
          mentor.booked = !mentor.booked;
        }
        return mentor;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Mentors key="mentors" mentors={this.state.mentors} isBooked={this.isBooked} />
      </div>
    );
  }
}

export default App;
