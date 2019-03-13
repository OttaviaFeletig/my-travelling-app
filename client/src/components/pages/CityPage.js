import React, { Component } from 'react'

import Cities from '../functional_component/Cities'
export default class CityPage extends Component {
  state = {
    isFetching: false,
    cities: []
  }

  componentDidMount() {
    this.fetchCities()
  }

  fetchCities = () => {
    this.setState({isFetching: true})
    fetch('http://localhost:5000/api/cities')
      .then(response => response.json())
      .then(data => {
        this.setState({cities: data, isFetching: false})
        console.log(this.state.cities)
      })
      .catch(err => console.log(err))
  } 

  render() {
    //destructuring state
    //it can also be written as const cities = this.state.cities
    const { cities } = this.state
    return (
      <div style={citiesStyle}>
        <Cities cities={cities} />
      </div>
    )
  }
}
const citiesStyle = {
  paddingTop: '100px'
}
