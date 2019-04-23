import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';



import Header from './components/layout/Header';
import Home from './components/pages/Home';
import CityPage from './components/pages/CityPage';
import ItineraryPage from './components/pages/ItineraryPage';
import LogInPage from './components/pages/LogInPage'
import SignUpPage from './components/pages/SignUpPage';
import MyAccountPage from './components/pages/MyAccountPage';

import './App.css';
import SignUpConfirmationPage from './components/pages/SignUpConfirmationPage';

import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logOut } from "./actions/usersAction";


class App extends Component {

  componentWillMount(){
    this.checkUserToken();
  }

  checkUserToken = () => {
    const {token} = localStorage;

    if(token){
      setAuthToken(token);
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      if(decoded.exp > currentTime){
        this.props.setCurrentUser(decoded)
      }else {
        this.props.logOut()
      }
    }
  }


  
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
          <Route exact path='/myAccount' component={MyAccountPage}></Route>
        </div>
     </Router>
      
    );
  }
}


App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
};

export default connect(
  null, 
  {setCurrentUser, logOut}
)(App);

