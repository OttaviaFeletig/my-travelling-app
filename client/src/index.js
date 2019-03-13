import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import citiesReducer from './reducers/citiesReducer';

//creating the store and connect it with reducer
const store = createStore(citiesReducer, composeWithDevTools(
    applyMiddleware()
));

//provider used to provide our application with the store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
