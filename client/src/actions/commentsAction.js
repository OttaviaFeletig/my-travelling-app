import axios from "axios";

//creating actions

export const GET_COMMENTS_ITINERARY = 'GET_COMMENTS_ITINERARY';
export const ADD_COMMENT = 'ADD_COMMENT'



//defining what the actions will contain

export const getCommentsItinerary = (itineraryId) => dispatch => {
    axios.get(`http://localhost:5000/api/comments/itineraries/${itineraryId}`)
        .then(res => {
            if(res.data.length !== 0){
                dispatch({
                    type: GET_COMMENTS_ITINERARY,
                    payload: res
                })
            }
        })
        .catch(err => console.log(err))
}
