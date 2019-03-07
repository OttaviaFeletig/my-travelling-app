import React, { Component } from 'react'

import SideBar from './SideBar'
import Login from '../pages/Login'
import '../../style/Header.css'

export default class Header extends Component {

  render(){
    return(
      <div className="header">
        <div className='header_title'>
          <h1>My travels</h1>
          <Login />  
        </div>
        <SideBar />
      </div>
      
    )
  }
  
}


