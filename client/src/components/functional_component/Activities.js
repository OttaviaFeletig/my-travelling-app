import React, { Component } from 'react'

import Slider from 'react-animated-slider'

import 'react-animated-slider/build/horizontal.css'
import '../../style/Slider.css'
export default class Activities extends Component {
  render() {
      const { activities } = this.props
      const names = this.props.activities.map(activity => activity.name)
      const images = this.props.activities.map(activity => activity.pic)
      console.log(names)
      console.log(images)
      console.log(activities)
    return (
      <div>
        <Slider autoplay={2000} style={sliderStyle}>
        {
          activities.map((activity, index) =>
          <div style={activityStyle} key={index}>
            <p>{ activity.name }</p>
            <img style={imgStyle} src={activity.pic} alt='activityPic' />
          </div>
          )
        }
      </Slider>
      </div>
    )
  }
}

const sliderStyle = {
    heigth: '200px',
    slider: 'slider',
    previousButton: 'previousButton #32607F',
    nextButton: 'nextButton',
    buttonDisabled: 'disabled',
    track: 'track',
    slide: 'slide',
    hidden: 'hidden',
    previous: 'previous',
    current: 'current',
    next: 'next',
    animateIn: 'animateIn',
    animateOut: 'animateOut',
}

const activityStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const imgStyle = {
    width: '46%',
    heigth: 'auto',
    borderRadius: '50%',
    border: 'solid #32607F 4px'
}