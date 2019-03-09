import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostCard from '../common/PostCard';
import PostBoard from '../common/PostBoard';
//import PostImage from "../../assets/first-post-img.jpg";
import { fetchPosts, fetchPost, deletePost } from '../../actions';

class PostsShow extends Component {
	componentWillMount() {
		const { id } = this.props.match.params;
		!this.props.posts ? this.props.fetchPosts() : this.props.fetchPost(id);
	}

	onDeleteClick(id) {
		this.props.deletePost(id, () => {
			this.props.history.push('/posts');
		});
	}

	render() {
		const { post } = this.props;

		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div
				style={{
					width: '90%',
					margin: 'auto',
					zIndex: -3,
					position: 'absolute'
				}}>
				<Link
					to="/posts"
					style={{ zIndex: -200, paddingRight: 10, paddingLeft: '5%' }}>
					<button className="btn" style={{ backgroundColor: '#cf7541', lineHeight: 'inherit', fontWeight: 475 }}>
					<i className="fa fa-arrow-circle-left" style={{ fontSize: 20, verticalAlign: 'middle' }}/>
						{'  '} Back
					</button>
				</Link>

				<button
					className="btn btn-danger"
					style={{ backgroundColor: '#cf7541', lineHeight: 'inherit', fontWeight: 475}}
					onClick={this.onDeleteClick.bind(this)}>
					<i className="fa fa-minus-circle" style={{ fontSize: 20, verticalAlign: 'middle' }}/>
					{'  '} Delete Post
				</button>
				<PostBoard style={{ width: '70%' }}>
					<PostCard
						key={post.id}
						title={post.title}
						content={post.content}
						image={post.image}
						categories={post.categories}
					/>
				</PostBoard>
			</div>
		);
	}
}

function mapStateToProps({ posts }, ownProps) {
	return { post: posts[ownProps.match.params.id] };
}

export default connect(
	mapStateToProps,
	{ fetchPosts, fetchPost, deletePost }
)(PostsShow);
