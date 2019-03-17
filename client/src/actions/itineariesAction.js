export const FETCH_ITINERARIES_BEGIN   = 'FETCH_ITINERARIES_BEGIN';
export const FETCH_ITINERARIES_SUCCESS = 'FETCH_ITINERARIES_SUCCESS';
export const FETCH_ITINERARIES_FAILURE = 'FETCH_ITINERARIES_FAILURE';

export const fetchItinerariesBegin = (bool) => {
    return {
        type: FETCH_ITINERARIES_BEGIN,
        payload: bool
    }
};

export const fetchItinerariesSuccess = (items) => {
  return {
        type: FETCH_ITINERARIES_SUCCESS,
        payload: { items }
  }
};

export const fetchItinerariesFailure = (error) => {
    return {
        type: FETCH_ITINERARIES_FAILURE,
        payload: { error }
    }
};

export function fetchItineraries(cityId) {
    return dispatch => {
        dispatch(fetchItinerariesBegin(true));
        fetch('http://localhost:5000/api/itineraries/' + cityId)
            .then(response => {
                console.log(response)
                if(!response.ok){
                    throw Error(response.statusText)
                }
                dispatch(fetchItinerariesBegin(false))
                return response;
            })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchItinerariesSuccess(data))
            })
            .catch(error => 
                dispatch(fetchItinerariesFailure(error))
            )
    }
}