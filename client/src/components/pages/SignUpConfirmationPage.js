import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class SignUpConfirmationPage extends Component {
  render() {
    const { username, email, avatarPicture } = this.props.location.state.detail;

    return (
      <div style={confPageStyle}>
        <h3>Thank you for registering!</h3>
        <p>You submitted the following information:</p>
        <img style={avatarStyle} src={avatarPicture} alt="avatar" />
        <ul>
          <li>Username: {username}</li>
          <li>Email: {email}</li>
        </ul>
        <Link to="login">Click here to log in!</Link>
      </div>
    );
  }
}

const confPageStyle = {
  paddingTop: "80px",
  margin: "0 20px 0 20px"
};
const avatarStyle = {
  borderRadius: "50%",
  width: "50%"
};

SignUpConfirmationPage.propTypes = {
  user: PropTypes.object.isRequired
  // googleAuth: PropTypes.func.isRequired
};

const mapStateProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    user: state.user,
    loading: state.user.loading
  };
};

export default connect(mapStateProps)(SignUpConfirmationPage);
