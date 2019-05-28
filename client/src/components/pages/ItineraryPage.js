import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchItineraries } from "../../actions/itineariesAction";
import { getFavItin } from "../../actions/usersAction";
import Itinerary from "../functional_component/Itinerary";

class ItineraryPage extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchItineraries(this.props.match.params.id);
    if (this.props.isAuthenticated) {
      // console.log("yes");
      this.props.getFavItin();
    }
  };

  render() {
    const { itineraries } = this.props.itineraries;
    const { favItineraries } = this.props;
    console.log(favItineraries);
    if (itineraries.length === 0) {
      return (
        <div style={noItineraryesStyle}>
          <p>There are no itineraries for this city yet</p>
        </div>
      );
    } else {
      return (
        <div style={itinerariesPage}>
          {itineraries.map(itinerary => (
            <Itinerary
              key={itinerary._id}
              itinerary={itinerary}
              favItineraries={favItineraries}
            />
          ))}
        </div>
      );
    }
  }
}

const itinerariesPage = {
  paddingTop: "80px",
  paddingBottom: "80px"
};

const noItineraryesStyle = {
  paddingTop: "80px"
};

const mapStateProps = state => {
  return {
    itineraries: state.itineraries,
    loading: state.loading,
    error: state.error,
    isAuthenticated: state.user.isAuthenticated,
    favItineraries: state.user.favoriteItineraries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchItineraries: cityId => dispatch(fetchItineraries(cityId)),
    getFavItin: () => dispatch(getFavItin())
  };
};

ItineraryPage.propTypes = {
  itineraries: PropTypes.object.isRequired
};
export default connect(
  mapStateProps,
  mapDispatchToProps
)(ItineraryPage);
