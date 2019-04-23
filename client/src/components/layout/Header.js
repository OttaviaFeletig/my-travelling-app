import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import SideBar from './SideBar'
// import Login from '../pages/Login'
import GoBack from '../functional_component/GoBack'
import noUserIcon from '../../icons/nouser.png'
import '../../style/Header.css'

class Header extends Component {
  
  render(){
    const actualLocation = this.props.location.pathname
    let goBack = null
    if(actualLocation.includes('itineraries')){
      goBack = <Link to='/cities'><GoBack /></Link>   
    } else if(actualLocation.includes('signUp')){
      goBack = <Link to='logIn'><GoBack /></Link>
    }
    const { user } = this.props
    
    const { avatarPicture } = user.user;
    const { history } = this.props
    return(
      <div>
        <div className="header">
          <div className='header_title'>
            <h1>MYtinerary</h1>
            <div style={ avatarContainerStyle }>
              {
                avatarPicture ? 
                <img style={userIconStyle} src={avatarPicture} alt="profilePic"/> : 
                <img style={userIconStyle} src={noUserIcon} alt="profilePic"/>
              }
            </div>
            {goBack}
          </div>
        </div>
        <SideBar history={history} />
      </div>
    )
  } 
}

const userIconStyle = {
  height: '100%',
  position: 'relative',
  // right: '25%'
}

const avatarContainerStyle = {
  width: '60px',
  height: '60px',
  border: 'solid 2px white',
  borderRadius: '50%',
  marginLeft: '20px',
  overflow: 'hidden'
}

const mapStateProps = (state) => {
  return {
    user: state.user,
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired
}
export default withRouter(connect(mapStateProps)(Header))


