import React, { Component } from 'react'

import arrowGoBack from '../../icons/arrow-go-back.png'

export default class GoBack extends Component {
  render() {
    return (
      <div style={goBackStyle}>
          <img style={goBackArrowStyle} src={arrowGoBack} alt='go-back-icon' />
      </div>
    )
  }
}

const goBackStyle = {
  position: 'absolute',
  top: '10px',
  right: '15px',
  display: 'flex',
  justifyContent: 'flex-end'
}

const goBackArrowStyle = {
    width: '15%',
    alignSelf: 'center'
}
