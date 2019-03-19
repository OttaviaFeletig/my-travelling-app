import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

import SideBar from './SideBar'
// import Login from '../pages/Login'
import GoBack from '../functional_component/GoBack'
import '../../style/Header.css'

class Header extends Component {

  render(){
    const actualLocation = this.props.location.pathname
    // console.log(actualLocation)
    let goBack = null
    if(actualLocation.includes('itineraries')){
      goBack = <Link to='/cities'><GoBack /></Link>   
    }
    return(
      <div className="header">
        <div className='header_title'>
          <h1>MYtinerary</h1>
          
          {/* <Login />   */}
        </div>
        {goBack}
        <SideBar />
      </div>
      
    )
    
  } 
}

export default withRouter(Header)

