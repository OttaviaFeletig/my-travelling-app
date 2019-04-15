import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {getCommentsItinerary} from '../../actions/commentsAction';

import PropTypes from 'prop-types';

class Comments extends Component {
componentDidMount() {
    this.props.dispatch(getCommentsItinerary(this.props.itineraryId))
}

formatDate = (date) => {
    console.log(date)
    let dateArray = date.split('T');
    let day = dateArray[0];

    let index = dateArray[1].indexOf(':', dateArray[1].indexOf(':') + 1)
    let time = dateArray[1].substr(0, index)

    console.log(time)

    return ', ' + day + ' ' + time;
}

  render() {
    console.log(this.props)
    const {comments} = this.props
    return (
      
    <div style={commentsContainerStyle}>
        
            {
                comments.map((comment, index) => 
                <div style={commentStyle} key={index}>
                    <div style={userInfoCommentsStyle}>
                        <div style={avatarCommentsStyle}>
                            <img style={avatarIconStyle} src={comment.avatarPicture} />
                            
                        </div>
                        <p style={usernameStyle}>{comment.username}</p>
                        {
                            this.formatDate(comment.date)
                        }
                    </div>
                    <div style={lineStyle}></div>
                    <p style={messageStyle}>{comment.message}</p>
                </div>
                )
            }
      
        {/* <div style={commentStyle}>
            <p>blablablwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwa</p>
        </div> */}

        <Form style={formContainerStyle}>
            <Form.Group style={formGroupStyle} controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Share your opinion" />
            </Form.Group>   
            <Button style={buttonStyle} type="submit">
                Post
            </Button>
        </Form>
    </div>
      
    )
  }
}

const commentsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    // justifyContent: 'center',
    background:' #32607F',
    width: '90%',
    borderRadius: '0px 0px 10px 10px',
    alignItems: 'center',
    margin: '-1px'
  }
  
  const commentStyle = {
    background: '#D3D3D3',
    width: '80%',
    height: '100%',
    borderRadius: '10px 10px 10px 10px',
    marginBottom: '20px',
    padding: '5px 5px 5px 5px',
    wordBreak: 'break-all',
    alignSelf: 'center',
  }

  const formContainerStyle = {
      display: 'inline-flex',
      width: '80%',
      justifyContent: 'space-between',
      marginBottom: '10px'
  }

  const formGroupStyle = {
      margin: '0'
  }

  const buttonStyle = {
      background: 'white',
      color: '#32607F',
  }

  const avatarCommentsStyle = {
      borderRadius: '50%',
      overflow: 'hidden',
      width: '40px',
      height: '40px'
  }

  const avatarIconStyle = {
      height: '100%'
  }
  const userInfoCommentsStyle = {
      display: 'flex',
      alignItems: 'center'
  }

  const usernameStyle = {
      margin: '0px 0px 0px 10px',
      fontWeight: 'bold'
  }

  const messageStyle = {
    margin: '10px 0px 10px 0px'
  }

  const lineStyle = {
    width: '100%',
    height: '2px',
    background: '#32607F',
    margin: '10px auto',
  }

  const mapStateProps = (state) => {
    return {
        comments: state.comments.comments,
        itineraries: state.itineraries,
        // cities: state.cities
    }
  }

  Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    itineraries: PropTypes.object.isRequired,
    // cities: PropTypes.object.isRequired
  }

  export default connect(mapStateProps)(Comments)
  