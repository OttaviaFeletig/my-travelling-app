import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {fetchCities} from '../../actions/citiesAction';

import FilterForm from '../layout/FilterForm';
class CityPage extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCities())
  } 

  render() {

    console.log(this.props)

    //destructuring state
    //it can also be written as const cities = this.state.cities
    const { cities, error, loading } = this.props.cities
    if(error) {
        return <div>Error! { error.message }</div>
    }
    if(loading) {
      return <div>Loading...</div>
    }
    return (
      <div style={citiesStyle}>
        <FilterForm cities={cities} />
      </div>
    )
  }
}
const citiesStyle = {
  paddingTop: '100px'
}

const mapStateProps = (state) => {
  return {
    cities: state.cities,
    loading: state.loading,
    error: state.error
  }
}

CityPage.propTypes = {
  cities: PropTypes.object.isRequired
}
export default connect(mapStateProps)(CityPage)
