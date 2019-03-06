import axios from 'axios';
import {
	FETCH_USER,
	FETCH_SURVEYS,
	FETCH_POST,
	FETCH_POSTS,
	CREATE_POST,
	DELETE_POST,
	DID_UPDATE_CODE
} from './types';

const ROOT_URL = process.env.REACT_APP_ROOT_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

// JS Playgrounds
export function updateCode(code) {
	//console.clear();

	return {
		type: DID_UPDATE_CODE,
		payload: code
	};
}
// JS Playgrounds

export function createPost(values, callback) {
	const request = axios
		.post(`${ROOT_URL}/posts${API_KEY}`, values)
		.then(() => callback());

	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost(id, callback) {
	const request = axios
		.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
		.then(() => callback());

	return {
		type: DELETE_POST,
		payload: id
	};
}

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

/////////////////////////////////////////////////////////////

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
	const res = await axios.post('/api/surveys', values);

	history.push('/surveys');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
	const res = await axios.get('/api/surveys');

	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
