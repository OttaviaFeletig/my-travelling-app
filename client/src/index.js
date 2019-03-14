import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

//creating the store and connect it with reducer
//By default, Redux action creators don’t support asynchronous actions like fetching data, so here’s where we utilise Redux Thunk.
//Thunk allows you to write action creators that return a function instead of an action.
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

//provider used to provide our application with the store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
