import React, { Component } from 'react'
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

export default class Home extends Component {
  // state = {
  //   response: '',
  //   post: '',
  //   responseToPost: ''
  // }

  // componentDidMount() {
  //   this.callApi()
  //     .then(data => {
  //       console.log(data.data)
  //       this.setState({ response: data.data })
  //       // console.log(this.state.response)
  //     })
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('/api/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   });
  //   const body = await response.json();
  //   console.log(response)
  //   if(response.status !== 200) throw Error(body.message);

  //   return body;
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ post: this.state.post })
  //   });
  //   const body = await response.text();

  //   this.setState({ responseToPost: body });
  // };
  render(){
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
    <div className='home'>
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
      {/* <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
              type='text'
              value={this.state.post}
              onChange={e => this.setState({ post: e.target.value })} 
            />
            <button type='submit'>Submit</button>
          </form>
          <p>{this.state.responseToPost}</p> */}
    </div>
  )
  }
  
}
