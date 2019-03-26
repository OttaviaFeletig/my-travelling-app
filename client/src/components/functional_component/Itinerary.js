import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Activities from './Activities';

export default class Itinerary extends Component {
  state = {
    hideActivitiy: true,
  }
  changeVisibility = () => {
    this.setState({hideActivitiy : !this.state.hideActivitiy})
  }

  render() {
      
    const { title, profilePic, duration, price, rating, activities } = this.props.itinerary
    return (
      <div>
        <div style={itinerayStyle}>
          <img style={imgStyle} src={profilePic} alt='itineraryPic' onClick={this.changeVisibility}></img>
          
          <div style={Object.assign({}, infoStyle.closeInfoStyle, !this.state.hideActivitiy && infoStyle.openInfoStyle)}>
              <h2 style={titleStyle}>{title}</h2>
              <div style={detailInfoStyle}>Duration: {duration} hours | Price: {price} € | Rating: {rating}</div>
          </div>
          {!this.state.hideActivitiy && <Activities style={itinerayStyle} activities={activities} />}
        </div>
      </div>
    )  
  }
}


const itinerayStyle = {
    width: '100vw',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const imgStyle = {
    marginTop: '10px',
    width: '90%',
    height: 'auto',
    borderRadius: '10px 10px 0px 0px',
    alignSelf: 'center',
    border: 'solid 5px #32607F',
    borderBottom: 'none'
}

const infoStyle = {
  closeInfoStyle: {
    color: 'white',
    backgroundColor: '#32607F',
    width: '90%',
    alignSelf: 'center',
    height: '80px',
    borderRadius: '0px 0px 10px 10px',
    marginTop: '-1px'
  },
  openInfoStyle: {
    color: 'white',
    backgroundColor: '#32607F',
    width: '90%',
    alignSelf: 'center',
    height: '80px',
    borderRadius: '0px 0px 0px 0px',
    marginTop: '-1px'
  }
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
