import React, { Component } from 'react'
import PropTypes from 'prop-types'
class City extends Component {
  render() {
      const { name, country } = this.props.city
    return (
      <div>
        <div style={cityStyle}>{name} - {country}</div>
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
