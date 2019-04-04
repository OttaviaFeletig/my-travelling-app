import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';



import Header from './components/layout/Header';
import Home from './components/pages/Home';
import CityPage from './components/pages/CityPage';
import ItineraryPage from './components/pages/ItineraryPage';
import LogInPage from './components/pages/LogInPage'
import SignUpPage from './components/pages/SignUpPage';

import './App.css';
import SignUpConfirmationPage from './components/pages/SignUpConfirmationPage';



class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
          />
          <Header />
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/cities' component={CityPage}></Route>
          <Route exact path='/itineraries/:id' component={ItineraryPage}></Route>
          <Route exact path='/logIn' component={LogInPage}></Route>
          <Route exact path='/signUp' component={SignUpPage}></Route>
          <Route exact path='/signUpConfirmation' component={SignUpConfirmationPage}></Route>
        </div>
     </Router>
      
    );
  }
}

export default App;
