import React from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import '../../style/Home.css'

import berlin from '../../cities_pic/berlin.jpg'
import copenhagen from '../../cities_pic/copenhagen.jpg'
import aalborg from '../../cities_pic/aalborg.jpg'
import torino from '../../cities_pic/torino.jpg'
import barcellona from '../../cities_pic/barcellona.jpg'
import budapest from '../../cities_pic/budapest.jpg'
import palermo from '../../cities_pic/palermo.jpg'
import roma from '../../cities_pic/roma.jpg'
import trieste from '../../cities_pic/trieste.jpg'
import zurigo from '../../cities_pic/zurigo.jpeg'
import londra from '../../cities_pic/londra.jpg'
import parigi from '../../cities_pic/parigi.jpg'

export default function Footer() {
  const citiesPic = [[berlin, copenhagen, aalborg, torino], [barcellona, budapest, palermo, roma], [trieste, zurigo, londra, parigi]]
  const sliderStyle = {
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
  const imgStyle = {
    width: '46%',
    heigth: 'auto',
    borderRadius: '50%',
    border: 'solid #32607F 4px'
  }
  // const sliderContainer = {
  //   display: 'flex',
  //   justifyContent: 'center'
  // }
  return (
    <div>
      <Slider autoplay={2000} style={sliderStyle}>
        {
          citiesPic.map((pic, index) =>
          <div key={index}>
            <img style={imgStyle} src={pic[0]} alt='pic' />
            <img style={imgStyle} src={pic[1]} alt='pic' />
            <img style={imgStyle} src={pic[2]} alt='pic' />
            <img style={imgStyle} src={pic[3]} alt='pic' />
          </div>
          )
        }
      </Slider>
    </div>
  )
}
