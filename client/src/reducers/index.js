import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';
import postsReducer from './postsReducer';
import codeReducer from './codeReducer';

export default combineReducers({
	auth: authReducer,
	posts: postsReducer,
	form: reduxForm,
	surveys: surveysReducer,
	code: codeReducer
});
