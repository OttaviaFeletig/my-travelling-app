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
      <div style={activitiesContainerStyle}>
        <div style={sliderContainerStyle}>
          <Slider style={sliderStyle}>
          {
            activities.map((activity, index) =>
            <div style={activityStyle} key={index}>
              <p style={nameStyle}>{ activity.name }</p>
              <div style={cropStyle}>
                <img style={imgStyle} src={activity.pic} alt='activityPic' />
              </div>
              
            </div>
            )
          }
        </Slider>
          
        
        </div>
        
        <div style={commentsContainerStyle}>
            <div style={commentStyle}>
              <p>blablabla</p>
            </div>
          
        </div>

      </div>
    )
  }
}

const activitiesContainerStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const commentsContainerStyle = {
  display: 'flex',
  justifySelf: 'center',
  justifyContent: 'center',
  background:' #32607F',
  width: '90%',
  borderRadius: '0px 0px 10px 10px'
}

const commentStyle = {
  // background: 'grey',
  width: '50%',
  height: '100%'
}

const sliderContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const sliderStyle = {
    heigth: '200px',
    slider: 'slider',
    previousButton: 'previousButton',
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
    margin: '0'
}

const activityStyle = {
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const cropStyle = {
  width: '280px',
  height: '200px',
  overflow: 'hidden',
  borderRadius: '10px',
}

const imgStyle = {
    width: '110%',
    height: 'auto',
}

const nameStyle = {
  color: 'white'
}