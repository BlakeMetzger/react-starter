import 'materialize-css/dist/css/materialize.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/App';
import reducers from './reducers';
import './globals';

//Development only axios helpers
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(promise, reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
