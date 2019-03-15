import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Cities from '../functional_component/Cities';


import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'



class FilterForm extends Component {
    state = {
        searchInput: '',
    }
    handleSearch = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }
    render() {
        const {cities} = this.props

        let filteredCities = cities.filter(city => {
            return city.name.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1 || city.country.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1
        })

        return (
            
        <div>
            <Col sm={8}>
                <Form.Control type="text" placeholder="Search your city..." id='filter' value={ this.state.searchInput } onChange={this.handleSearch} />
            </Col>
         {/* <label htmlFor='filter'>Filter by City:</label>
         <Form.Control type='text' id='filter' value={ this.state.searchInput } onChange={this.handleSearch} /> */}
            {/* <input type='text' id='filter' value={ this.state.searchInput } onChange={this.handleSearch} ></input> */}
            <Cities cities={filteredCities} />
        </div>
        )
    }
    
}

FilterForm.propTypes = {
    cities: PropTypes.array.isRequired
}

export default FilterForm