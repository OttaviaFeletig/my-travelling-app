import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import CityPage from "./components/pages/CityPage";
import ItineraryPage from "./components/pages/ItineraryPage";
import LogInPage from "./components/pages/LogInPage";
import SignUpPage from "./components/pages/SignUpPage";
import MyAccountPage from "./components/pages/MyAccountPage";

import "./App.css";
import SignUpConfirmationPage from "./components/pages/SignUpConfirmationPage";

import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logOut, googleAuth } from "./actions/usersAction";

class App extends Component {
  componentWillMount() {
    console.log(this.props);

    // localStorage.removeItem("token");
    // localStorage.removeItem("googleToken");
    this.checkUserToken();
  }

  checkUserToken = () => {
    console.log(localStorage);
    const { token } = localStorage;
    console.log(token);

    if (token) {
      // console.log("token");
      setAuthToken(token);
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      console.log(decoded);
      if (decoded.exp > currentTime) {
        this.props.setCurrentUser(decoded);
      } else {
        this.props.logOut();
      }
    }
  };

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
          <Route exact path="/" component={Home} />
          <Route exact path="/cities" component={CityPage} />
          <Route exact path="/itineraries/:id" component={ItineraryPage} />
          <Route exact path="/logIn" component={LogInPage} />
          <Route exact path="/signUp" component={SignUpPage} />
          <Route
            exact
            path="/signUpConfirmation"
            component={SignUpConfirmationPage}
          />
          <Route exact path="/myAccount" component={MyAccountPage} />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    // googleAuth: token => dispatch(googleAuth(token)),
    setCurrentUser: decoded => dispatch(setCurrentUser(decoded)),
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
