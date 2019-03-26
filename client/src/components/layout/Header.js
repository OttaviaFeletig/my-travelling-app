import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

import SideBar from './SideBar'
// import Login from '../pages/Login'
import GoBack from '../functional_component/GoBack'
import noUserIcon from '../../icons/nouser.png'
import '../../style/Header.css'

class Header extends Component {

  render(){
    const actualLocation = this.props.location.pathname
    // console.log(actualLocation)
    let goBack = null
    if(actualLocation.includes('itineraries')){
      goBack = <Link to='/cities'><GoBack /></Link>   
    }else if(actualLocation.includes('signUp')){
      goBack = <Link to='logIn'><GoBack /></Link>
    }
    return(
      <div>
        <div className="header">
        <div className='header_title'>
          <h1>MYtinerary</h1>
          <img style={userIconStyle} src={noUserIcon} alt="profilePic"/>
          {goBack}
        </div>
        
        
        </div>
        <SideBar />
      </div>
      
      
    )
    
  } 
}

const userIconStyle = {
  width: '18%',
  border: 'solid 2px white',
  borderRadius: '50%',
  marginLeft: '20px'
}

export default withRouter(Header)

