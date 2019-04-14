import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SideBar extends Component {

  render() {
    const {isAuthenticated} = this.props.user;
    console.log(this.props.user)
    return (
      <Menu>
        <Link className='menuItem' to='/'>Home</Link>
        <div style={lineStyle}></div>
        <Link className='menuItem' to='/cities'>Cities</Link>
        <div style={lineStyle}></div>
        {
          isAuthenticated ?
          <Link className='menuItem' to='/myAccount'>My account</Link>
          :
          <Link className='menuItem' to='/logIn'>LogIn</Link>
        }
        <div style={lineStyle}></div>
      </Menu>
    )
  }
  
}
const lineStyle = {
  width: '100%',
  height: '2px',
  background: 'white',
  margin: '10px auto',
}

const mapStateProps = (state) => {
  return {
    user: state.user,
  }
}

SideBar.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateProps)(SideBar);
