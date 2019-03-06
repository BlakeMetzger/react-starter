import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
import Board from '../common/Board';

class PostsNew extends Component {
	renderField(field) {
		const {
			meta: { touched, error }
		} = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<textarea className="materialize-textarea" {...field.input} />
				<div className="text-help">{touched ? error : ''}</div>
			</div>
		);
	}

	onSubmit(values) {
		this.props.createPost(values, () => {
			this.props.history.push('/posts');
		});
	}

	render() {
		const { handleSubmit } = this.props;
		const { btnStyle, btnMargin } = style;

		return (
			<Board
				content={
					<form onSubmit={handleSubmit(this.onSubmit.bind(this))} autoComplete="off">
						<Field label="Title:" name="title" component={this.renderField} />
						<Field
							label="Categories:"
							name="categories"
							component={this.renderField}
						/>
						<Field
							label="Post Content:"
							name="content"
							component={this.renderField}
						/>
						<button
							type="submit"
							className="btn btn-primary"
							style={btnStyle}>
							Submit
						</button>
						<Link
							to="/posts"
							style={btnMargin}>
							<button className="btn" style={btnStyle}>
								Cancel
							</button>
						</Link>
					</form>
				}
			/>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title || values.title.length < 3) {
		errors.title = 'Enter a title that is at least 3 characters long';
	}
	if (!values.categories) {
		errors.categories = 'Enter some categories';
	}
	if (!values.content) {
		errors.content = 'Enter some content please';
	}

	return errors;
}

const style={
	btnStyle: {
		backgroundColor: '#cf7541',
		lineHeight: 'inherit',
		marginTop: 10,
		fontWeight: 475
	},
	btnMargin: {
		marginLeft: 10,
		marginRight: 10
	}
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(
		null,
		{ createPost }
	)(PostsNew)
);
