import React, { Component } from 'react'

import arrowGoBack from '../../icons/arrow-go-back.png'

export default class GoBack extends Component {
  render() {
    return (
      <div>
          <img style={goBackArrowStyle} src={arrowGoBack} alt='go-back-icon' />
      </div>
    )
  }
}

const goBackArrowStyle = {
    width: '25%'
}
