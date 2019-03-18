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
    // console.log(this.props.itineraries)
    const { itineraries } = this.props.itineraries
    return (
      <div style={itinerariesPage}>
        { itineraries.map(itinerary => 
          <Itinerary key={itinerary._id} itinerary={itinerary} />
        ) }
      </div>
    )
  }
}

const itinerariesPage = {
  paddingTop: '80px',
}

const mapStateProps = (state) => {
  return {
    itineraries: state.itineraries,
    loading: state.loading,
    error: state.error
  }
}

ItineraryPage.propTypes = {
  itineraries: PropTypes.object.isRequired
}
export default connect(mapStateProps)(ItineraryPage)
