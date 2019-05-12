import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchItineraries } from '../../actions/itineariesAction';

import Itinerary from '../functional_component/Itinerary';

class ItineraryPage extends Component {
  
  componentDidMount() {
    this.props.dispatch(fetchItineraries(this.props.match.params.id))
  } 

  render() {
    const { itineraries } = this.props.itineraries
    if(itineraries.length === 0){
      return(
        <div style={noItineraryesStyle}>
          <p>There are no itineraries for this city yet</p>
        </div>
      )
    }else{
      return (
        <div style={itinerariesPage}>
          { itineraries.map(itinerary => 
            <Itinerary key={itinerary._id} itinerary={itinerary} />
          ) }
        </div>
      )
    }
  }
}

const itinerariesPage = {
  paddingTop: '80px',
  paddingBottom: '80px',
}

const noItineraryesStyle = {
  paddingTop: '80px'
}

const mapStateProps = (state) => {
  return {
    itineraries: state.itineraries,
    loading: state.loading,
    error: state.error,
    isAuthenticated: state.user.isAuthenticated,
  }
}

ItineraryPage.propTypes = {
  itineraries: PropTypes.object.isRequired
}
export default connect(mapStateProps)(ItineraryPage)
