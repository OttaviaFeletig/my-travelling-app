import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

// import Mentors from './components/Mentors'

import Header from './components/layout/Header'
import Home from './components/pages/Home'
// import HelloWorld from './components/HelloWorld'
import Cities from './components/pages/Cities'

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/cities' component={Cities}></Route>
        </div>
     </Router>
      
    );
  }
}

export default App;
