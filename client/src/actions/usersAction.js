import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';


export const GET_ERRORS = 'GET_ERRORS';
export const USER_LOADING = 'USER_LOADING';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';




//register new user

export const registerUser = (userData, history) => {
    return dispatch => {
        axios.post('api/users/register', userData)
        .then(res => {
            if(res.status === 200){
                console.log(res.data)
                history.push({
                    pathname: 'signUpConfirmation',
                    state: {detail: res.data}
                })
            } else {
                alert('Something went wrong, please try again')
            }
        })
        .catch(err => alert(err))
    }
}



// login - get user token

export const logInUser = userData => {
    return dispatch => {
        console.log(userData)
        axios.post('api/users/login', userData)
        .then(res => {
            
            //saving the token in the local storage
            const { token } = res.data;
            localStorage.setItem('token', token)

            //send token to utils authorization (axios header param)
            setAuthToken(token);

            //decode tolen to get user data
            const decoded = jwt_decode(token);

            //set current user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => 
            dispatch => ({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
    }
}
//set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//user loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

