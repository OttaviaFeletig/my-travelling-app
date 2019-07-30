import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const GET_ERRORS = "GET_ERRORS";
export const USER_LOADING = "USER_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const ADD_FAVORITE_ITINERARY = "ADD_FAVORITE_ITINERARY";
export const GET_FAVORITE_ITINERARY = "GET_FAVORITE_ITINERARY";
export const REMOVE_FAVORITE_ITINERARY = "REMOVE_FAVORITE_ITINERARY";

//register new user

export const registerUser = (userData, history) => {
  return dispatch => {
    axios
      .post("api/users/register", userData)
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          history.push({
            pathname: "signUpConfirmation",
            state: {
              detail: res.data
            }
          });
        } else {
          alert("Something went wrong, please try again");
        }
      })
      .catch(err => alert(err));
  };
};

// login - get user token

export const logInUser = userData => {
  return dispatch => {
    console.log(userData);
    axios
      .post("api/users/login", userData)
      .then(res => {
        //saving the token in the local storage
        const { token } = res.data;
        localStorage.setItem("token", token);

        //send token to utils authorization (axios header param)
        setAuthToken(token);

        //decode token to get user data
        const decoded = jwt_decode(token);
        console.log(decoded);
        //set current user
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => dispatch => ({
        type: GET_ERRORS,
        payload: err.response.data
      }));
  };
};

//log out

export const logOut = () => dispatch => {
  //remove token from local storage
  localStorage.removeItem("token");

  //set authorization to false
  setAuthToken(false);

  //send empty current user
  dispatch(setCurrentUser({}));
};

//set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//user loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const googleAuth = code => {
  return dispatch => {
    console.log(code);
    // axios.get("api/users/google/redirect").then(res => {
    //   console.log(res);
    //   if (res) {
    //     // this.props.history.push("/");
    //   }
    // });
    // console.log(token);

    localStorage.setItem("token", code);
    console.log(localStorage);
    // //send token to utils authorization (axios header param)
    setAuthToken(code);
    // //decode token to get user data
    const decoded = jwt_decode(code);
    console.log(decoded);
    // //set current user
    dispatch(setCurrentUser(decoded));
  };
};

export const getFavItin = () => dispatch => {
  axios.get("http://localhost:5000/api/users/favorite").then(res => {
    dispatch({
      type: GET_FAVORITE_ITINERARY,
      payload: res.data
    });
  });
};

//add fav itinerary

export const addFavItin = favItinerary => dispatch => {
  axios
    .post("http://localhost:5000/api/users/addToFavorite", favItinerary)
    .then(res => {
      dispatch({
        type: ADD_FAVORITE_ITINERARY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const removeFromFav = choosenItin => dispatch => {
  axios
    .post("http://localhost:5000/api/users/removeFromFavorite", choosenItin)
    .then(res => {
      dispatch({
        type: REMOVE_FAVORITE_ITINERARY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
