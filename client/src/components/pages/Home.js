import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { googleAuth } from "../../actions/usersAction";

// import Slider from 'react-animated-slider'
// import 'react-animated-slider/build/horizontal.css'
import "../../style/Home.css";

import arrow from "../../icons/arrow.png";

export class Home extends Component {
  componentDidMount() {
    console.log(this.props.location);
    console.log(this.props.location.search);
    const url = this.props.location.search;
    if (url !== "") {
      const code = url.split("=")[1];

      this.props.googleAuth(code);
      console.log(code);
    }
  }
  render() {
    return (
      <div className="home">
        <Link style={linkStyle} to="/cities">
          <img style={arrowStyle} src={arrow} alt="arrow" />
        </Link>
      </div>
    );
  }
}

const arrowStyle = {
  height: "30%"
};

const linkStyle = {
  height: "100vh",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center"
};

const mapDispatchToProps = dispatch => {
  return {
    googleAuth: code => dispatch(googleAuth(code))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
