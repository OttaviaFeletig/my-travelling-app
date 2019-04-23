import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut } from '../../actions/usersAction';

class SideBar extends Component {

  logOutHandler = () => {
    this.props.logOut();
    this.props.history.push('/');
  }

  render() {
    const {isAuthenticated} = this.props.user;
    return (
      <Menu>
        <Link className='bm-item' to='/'>Home</Link>
        <div style={lineStyle}></div>
        <Link className='bm-item' to='/cities'>Cities</Link>
        <div style={lineStyle}></div>
        {
          isAuthenticated ? (
            <React.Fragment>
              <Link className='bm-item' to='/myAccount'>My account</Link> 
              <div style={lineStyle}></div>
              <button className='bm-item' onClick={this.logOutHandler}>LogOut</button>
            </React.Fragment>
          )
          :
          <Link className='bm-item' to='/logIn'>LogIn</Link>
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

export default connect((mapStateProps), {logOut})(SideBar);
