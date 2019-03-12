import _ from 'lodash';
import {
	FETCH_POSTS,
	FETCH_POST,
	DELETE_POST,
	CREATE_POST
} from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case CREATE_POST:
			return action.payload;
		case DELETE_POST:
			return _.omit(state, action.payload);
		case FETCH_POST:
			return [state, ([action.payload.data.id]: action.payload.data)];
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}
