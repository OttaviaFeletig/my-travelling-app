//creating actions
export const FETCH_CITIES_BEGIN   = 'FETCH_CITIES_BEGIN';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

//defining what the actions will contain
export const fetchCitiesBegin = (bool) => {
    return {
        type: FETCH_CITIES_BEGIN,
        payload: bool
    }
};

export const fetchCitiesSuccess = (items) => {
  return {
        type: FETCH_CITIES_SUCCESS,
        payload: { items }
  }
};

export const fetchCitiesFailure = (error) => {
    return {
        type: FETCH_CITIES_FAILURE,
        payload: { error }
    }
};

//fetching cities and dispatching the actions to the reducer
export function fetchCities() {
    return dispatch => {
        dispatch(fetchCitiesBegin(true));
        fetch('http://localhost:5000/api/cities/')
            .then(response => {
                if(!response.ok){
                    throw Error(response.statusText)
                }
                dispatch(fetchCitiesBegin(false))
                return response;
            })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchCitiesSuccess(data))
            })
            .catch(error => 
                dispatch(fetchCitiesFailure(error))
            )
    }
}
