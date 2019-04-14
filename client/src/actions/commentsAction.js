//creating actions

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

//defining what the actions will contain

export const fetchCommentsSuccess = (items) => {
  return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: { items }
  }
};

export const fetchCommentsFailure = (error) => {
    return {
        type: FETCH_COMMENTS_FAILURE,
        payload: { error }
    }
};

//fetching cities and dispatching the actions to the reducer
export function fetchComments() {
    return dispatch => {
        fetch('http://localhost:5000/api/comments/')
            .then(response => {
                if(!response.ok){
                    throw Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchCommentsSuccess(data))
            })
            .catch(error => 
                dispatch(fetchCommentsFailure(error))
            )
    }
}
