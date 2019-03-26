import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default function SideBar() {
  return (
    <Menu>
      <a className='menuItem' href='/'>Home</a>
      <div style={lineStyle}></div>
      <a className='menuItem' href='/cities'>Cities</a>
      <div style={lineStyle}></div>
      <a className='menuItem' href='/logIn'>My account</a>
      <div style={lineStyle}></div>
    </Menu>
  )
}
const lineStyle = {
  width: '100%',
  height: '2px',
  background: 'white',
  margin: '10px auto',
}
