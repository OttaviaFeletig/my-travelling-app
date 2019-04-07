import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <Menu>
      <Link className='menuItem' to='/'>Home</Link>
      <div style={lineStyle}></div>
      <Link className='menuItem' to='/cities'>Cities</Link>
      <div style={lineStyle}></div>
      <Link className='menuItem' to='/logIn'>My account</Link>
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
