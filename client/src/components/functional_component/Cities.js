import React, { Component } from 'react'
import PropTypes from 'prop-types'
import City from './City'

class Cities extends Component {
  render() {
    const { cities } = this.props
    return (
      <div>
        {cities.map(city => 
        <City key={city._id} city={city} />
        )}
      </div>
    )
  }
  
}
Cities.propTypes = {
  cities: PropTypes.array.isRequired
}

export default Cities
