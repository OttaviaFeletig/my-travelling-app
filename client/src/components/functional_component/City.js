import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class City extends Component {
  render() {
    const { _id, name, country } = this.props.city
    return (
      <div>
        <Link to={'/itineraries/' + _id} ><div style={cityStyle}>{name} - {country}</div></Link>
      </div>
    )
  }
}

const cityStyle = {
  backgroundColor: '#32607F',
  width: 'auto',
  color: 'white',
  margin: '20px',
  padding: '20px',
  textAlign: 'center'
}
City.propTypes = {
    city: PropTypes.object.isRequired
}

  export default City
