import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

// import Mentors from './components/Mentors'

import Header from './components/layout/Header'
import Home from './components/pages/Home'
// import HelloWorld from './components/HelloWorld'
import CityPage from './components/pages/CityPage'

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"
          />
          <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/cities' component={CityPage}></Route>
        </div>
     </Router>
      
    );
  }
}

export default App;
