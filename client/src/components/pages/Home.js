import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { googleAuth } from "../../actions/usersAction";

// import Slider from 'react-animated-slider'
// import 'react-animated-slider/build/horizontal.css'
import "../../style/Home.css";

import arrow from "../../icons/arrow.png";
// import berlin from '../../cities_pic/berlin.jpg'
// import copenhagen from '../../cities_pic/copenhagen.jpg'
// import aalborg from '../../cities_pic/aalborg.jpg'
// import torino from '../../cities_pic/torino.jpg'
// import barcellona from '../../cities_pic/barcellona.jpg'
// import budapest from '../../cities_pic/budapest.jpg'
// import palermo from '../../cities_pic/palermo.jpg'
// import roma from '../../cities_pic/roma.jpg'
// import trieste from '../../cities_pic/trieste.jpg'
// import zurigo from '../../cities_pic/zurigo.jpeg'
// import londra from '../../cities_pic/londra.jpg'
// import parigi from '../../cities_pic/parigi.jpg'

class Home extends Component {
  componentDidMount() {
    const googleToken = this.props.location.search.split("=")[1];
    console.log(googleToken);
    this.props.googleAuth(googleToken);
  }
  render() {
    // const citiesPic = [[berlin, copenhagen, aalborg, torino], [barcellona, budapest, palermo, roma], [trieste, zurigo, londra, parigi]]
    // console.log(this.props)

    return (
      <div className="home">
        <Link style={linkStyle} to="/cities">
          <img style={arrowStyle} src={arrow} alt="arrow" />
        </Link>
        {/* <Slider autoplay={2000} style={sliderStyle}>
        {
          citiesPic.map((pic, index) =>
          <div key={index}>
            <img style={imgStyle} src={pic[0]} alt='pic' />
            <img style={imgStyle} src={pic[1]} alt='pic' />
            <img style={imgStyle} src={pic[2]} alt='pic' />
            <img style={imgStyle} src={pic[3]} alt='pic' />
          </div>
          )
        }
      </Slider> */}
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
// const sliderStyle = {
//   slider: 'slider',
//   previousButton: 'previousButton #32607F',
//   nextButton: 'nextButton',
//   buttonDisabled: 'disabled',
//   track: 'track',
//   slide: 'slide',
//   hidden: 'hidden',
//   previous: 'previous',
//   current: 'current',
//   next: 'next',
//   animateIn: 'animateIn',
//   animateOut: 'animateOut',
// }
// const imgStyle = {
//   width: '46%',
//   heigth: 'auto',
//   borderRadius: '50%',
//   border: 'solid #32607F 4px'
// }

const mapDispatchToProps = dispatch => {
  return {
    // logInUser: user => dispatch(logInUser(user))
    googleAuth: googleToken => dispatch(googleAuth(googleToken))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
