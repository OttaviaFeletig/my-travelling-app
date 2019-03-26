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
  position: 'relative',
  top: '3px',
  right: '15px',
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '0',
  width: '100%'
}

const goBackArrowStyle = {
    width: '35%',
    alignSelf: 'center'
}
