import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Activities from './Activities';

export default class Itinerary extends Component {
  state = {
    hideActivitiy: true
  }
  changeVisibility = () => {
    this.setState({hideActivitiy : !this.state.hideActivitiy})
  }
  render() {
      
    const { title, profilePic, duration, price, rating, activities } = this.props.itinerary
    return (
      <div>
        <div style={itinerayStyle} onClick={this.changeVisibility}>
          <img style={imgStyle} src={profilePic} alt='itineraryPic'></img>
          <div style={infoStyle}>
              <h2 style={titleStyle}>{title}</h2>
              <div style={detailInfoStyle}>Duration: {duration} hours | Price: {price} € | Rating: {rating}</div>
          </div>
        </div>
        {!this.state.hideActivitiy && <Activities style={itinerayStyle} activities={activities} />}
      </div>
    )  
  }
}

const itinerayStyle = {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const imgStyle = {
    marginTop: '10px',
    width: '90%',
    height: 'auto',
    borderRadius: '10px 10px 0px 0px',
    alignSelf: 'center'
}

const infoStyle = {
    color: 'white',
    backgroundColor: '#32607F',
    width: '90%',
    alignSelf: 'center',
    height: '80px',
    borderRadius: '0px 0px 10px 10px'
}

const titleStyle = {
    paddingTop: '5px',
    textAlign: 'center',
    fontSize: '20px'
}

const detailInfoStyle = {
    textAlign: 'center'
}

Itinerary.propTypes = {
    itinerary: PropTypes.object.isRequired
}
