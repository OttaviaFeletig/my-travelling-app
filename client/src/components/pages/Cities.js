import React, { Component } from 'react'

export default class Cities extends Component {
  // state = {
  //   response: '',
  //   post: '',
  //   responseToPost: ''
  // }

  // componentDidMount() {
  //   this.callApi()
  //     .then(data => {
  //       // console.log(data.data)
  //       this.setState({ response: data })
  //       // console.log(this.state.response)
  //     })
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch('http://localhost:5000/api/cities', {
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

  render() {
    const citiesStyle = {
      paddingTop: '100px'
    }
    return (
      <div style={citiesStyle}>
      {/* <p>{this.state.response}</p> */}
        <p>This is the cities page</p>
      </div>
    )
  }
}
