const initState = {
    cities: 'Hello World'
}

const citiesReducer = (state = initState, action) => {
    console.log(state)
    return state;
}

export default citiesReducer