import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class City extends Component {
  render() {
      const { name, country } = this.props.city
    return (
      <div>
        <li>{name}, {country}</li>
      </div>
    )
  }
}
City.propTypes = {
    city: PropTypes.object.isRequired
  }

