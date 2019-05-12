import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Activities from './Activities';

import { FaHeart } from 'react-icons/fa';

import { connect } from 'react-redux';
import {addFavItin} from '../../actions/usersAction';

class Itinerary extends Component {
  state = {
    hideActivitiy: true,
    favItinerary: false
  }
  changeVisibility = () => {
    this.setState({hideActivitiy : !this.state.hideActivitiy})
  }

  updateState = (event) => {
    event.preventDefault()
    this.setState({favItinerary : !this.state.favItinerary}, () => this.addFavItinerary())    
  }

  addFavItinerary = () => {
    console.log(this.state.favItinerary)
    const {user} = this.props;
    console.log(user)

    if(user.isAuthenticated === true){
      const {_id} =  this.props.itinerary
      const {title} = this.props.itinerary
      const {city} = this.props.itinerary
      console.log(this.props.itinerary)
      const favItinerary = {
        itineraryId: _id,
        name: title,
        cityId: city
      }
      console.log(favItinerary)
      if(this.state.favItinerary === true){
        this.props.addFavItin(favItinerary)
      }
    }else {
      alert('You have to logIn to like or unlike itineraries!')
    }


    
  }

  render() {
    const { _id, title, profilePic, duration, price, rating, activities } = this.props.itinerary
    return (
      <div>
        <div style={itinerayStyle}>
          <img style={imgStyle} src={profilePic} alt='itineraryPic' onClick={this.changeVisibility}></img>
          
          <div style={Object.assign({}, infoStyle.closeInfoStyle, !this.state.hideActivitiy && infoStyle.openInfoStyle)}>
              <h2 style={titleStyle}>{title}</h2>
              <div style={detailInfoStyle}>
                Duration: {duration} hours | Price: {price} € | Rating: {rating}
                  <FaHeart onClick={this.updateState} size={32} style={heartStyle} />
              </div>
          </div>
          {!this.state.hideActivitiy && <Activities style={itinerayStyle} activities={activities} itineraryId={_id} />}
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
    textAlign: 'center',  
}

const heartStyle = {
    marginLeft: '20px',
    // color: 'red'
}


Itinerary.propTypes = {
    itinerary: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateProps = (state) => {
  console.log(state)
  return {
      // itineraries: state.itineraries,
      user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavItin: favItinerary => dispatch(addFavItin(favItinerary)),
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Itinerary)