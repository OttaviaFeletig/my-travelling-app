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
                    payload: res.data
                })
            }
        })
        .catch(err => console.log(err))
}

export const addComment = (newComment) => dispatch => {
    axios.post('http://localhost:5000/api/comments/', newComment)
        .then(res => {
            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
