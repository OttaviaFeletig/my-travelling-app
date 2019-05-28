import React, { Component } from "react";
import PropTypes from "prop-types";

import Activities from "./Activities";

import { FaHeart } from "react-icons/fa";

import { connect } from "react-redux";
import { addFavItin, removeFromFav } from "../../actions/usersAction";

class Itinerary extends Component {
  state = {
    hideActivitiy: true
  };

  changeVisibility = () => {
    this.setState({ hideActivitiy: !this.state.hideActivitiy });
  };

  addFavItinerary = () => {
    const { user } = this.props;
    // const { favItineraries } = this.props;
    // console.log(favoriteItineraries);

    if (user.isAuthenticated === true) {
      const { _id } = this.props.itinerary;
      const { title } = this.props.itinerary;
      const { city } = this.props.itinerary;
      // console.log(this.props.itinerary);
      const likedItinerary = {
        itineraryId: _id,
        name: title,
        cityId: city
      };
      // console.log(likedItinerary);

      // if (
      //   favItineraries.filter(
      //     oneFavItin => oneFavItin.itineraryId === likedItinerary.itineraryId
      //   ).length > 0
      // ) {
      //   alert("test");
      // } else {
      this.props.addFavItin(likedItinerary);
      // }
    } else {
      alert("You have to logIn to like or unlike itineraries!");
    }
  };

  deleteFavItin = () => {
    const { user } = this.props;
    if (user.isAuthenticated === true) {
      const { _id } = this.props.itinerary;
      const choosenItin = {
        itineraryId: _id
      };
      console.log(choosenItin);
      this.props.removeFromFav(choosenItin);
    }
  };

  render() {
    const {
      _id,
      title,
      profilePic,
      duration,
      price,
      rating,
      activities
    } = this.props.itinerary;

    console.log(this.props.favItineraries);
    let heart;

    const { favItineraries } = this.props;
    console.log(favItineraries);
    const favItin = favItineraries.filter(
      oneItin => oneItin.itineraryId === _id
    );
    console.log(favItin);
    if (favItin.length > 0) {
      heart = (
        <FaHeart
          onClick={this.deleteFavItin}
          size={32}
          style={{ color: "red" }}
        />
      );
    } else {
      heart = (
        <FaHeart
          onClick={this.addFavItinerary}
          size={32}
          style={{ color: "white" }}
        />
      );
    }
    // favItineraries.map(oneInin => {
    //   if (oneInin.itineraryId === _id) {
    //     console.log("yes");
    //     heart = (
    //       <FaHeart
    //         // onClick={this.addFavItinerary}
    //         size={32}
    //         style={{ color: "red" }}
    //       />
    //     );
    //   } else {
    //     console.log("no");
    //     heart = (
    //       <FaHeart
    //         onClick={this.addFavItinerary}
    //         size={32}
    //         style={{ color: "white" }}
    //       />
    //     );
    //   }
    // });

    return (
      <div>
        <div style={itinerayStyle}>
          <img
            style={imgStyle}
            src={profilePic}
            alt="itineraryPic"
            onClick={this.changeVisibility}
          />

          <div
            style={Object.assign(
              {},
              infoStyle.closeInfoStyle,
              !this.state.hideActivitiy && infoStyle.openInfoStyle
            )}
          >
            <h2 style={titleStyle}>{title}</h2>
            <div style={detailInfoStyle}>
              Duration: {duration} hours | Price: {price} € | Rating: {rating}
              {heart}
            </div>
          </div>
          {!this.state.hideActivitiy && (
            <Activities
              style={itinerayStyle}
              activities={activities}
              itineraryId={_id}
            />
          )}
        </div>
      </div>
    );
  }
}

const itinerayStyle = {
  width: "100vw",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const imgStyle = {
  marginTop: "10px",
  width: "90%",
  height: "auto",
  borderRadius: "10px 10px 0px 0px",
  alignSelf: "center",
  border: "solid 5px #32607F",
  borderBottom: "none"
};

const infoStyle = {
  closeInfoStyle: {
    color: "white",
    backgroundColor: "#32607F",
    width: "90%",
    alignSelf: "center",
    height: "80px",
    borderRadius: "0px 0px 10px 10px",
    marginTop: "-1px"
  },
  openInfoStyle: {
    color: "white",
    backgroundColor: "#32607F",
    width: "90%",
    alignSelf: "center",
    height: "80px",
    borderRadius: "0px 0px 0px 0px",
    marginTop: "-1px"
  }
};

const titleStyle = {
  paddingTop: "5px",
  textAlign: "center",
  fontSize: "20px"
};

const detailInfoStyle = {
  textAlign: "center"
};

const heartStyle = {
  likedHeartStyle: {
    marginLeft: "20px",
    color: "red"
  },
  unlikedHeartStyle: {
    marginLeft: "20px"
  }
};

Itinerary.propTypes = {
  itinerary: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  favItineraries: PropTypes.array.isRequired
};

const mapStateProps = state => {
  console.log(state);
  return {
    // itineraries: state.itineraries,
    user: state.user
    // favoriteItineraries: state.user.favoriteItineraries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavItin: favItinerary => dispatch(addFavItin(favItinerary)),
    removeFromFav: choosenItin => dispatch(removeFromFav(choosenItin))
    // getFavItin: () => dispatch(getFavItin())
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(Itinerary);
