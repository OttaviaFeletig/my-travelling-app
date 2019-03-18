import React, { Component } from 'react'

import SideBar from './SideBar'
import Login from '../pages/Login'
import GoBack from '../functional_component/GoBack'
import '../../style/Header.css'

export default class Header extends Component {

  render(){
    
    return(
      <div className="header">
        <div className='header_title'>
          <h1>MYtinerary</h1>
          <GoBack />
          {/* <Login />   */}
        </div>
        <SideBar />
      </div>
      
    )
  }
  
}


