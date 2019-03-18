import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';
import PostBoard from '../common/PostBoard';
import PostCard from '../common/PostCard';
import TapTarget from '../common/TapTarget';
//import PostImage from "../../assets/first-post-img.jpg";

class PostsIndex extends Component {
	state = { isHidden: false};

	componentWillMount() {
		let visited = sessionStorage.getItem('alreadyVisitedPosts');
		//this.props.fetchPosts()

		//this.setState({posts: this.props.fetchPosts()});

		if (visited) {
			//Hide Tap Target if already visited page.
			this.setState({ isHidden: true });
		} else {
			//Show Tap Target on first page visit.
			sessionStorage.setItem('alreadyVisitedPosts', true);
			this.setState({ isHidden: false });
		}
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {

			return (
				<li
					className="list-group-item"
					key={post._id}
					style={{ paddingBottom: 20 }}>
					<PostCard
						hoverable={true}
						id={post.id}
						title={post.title}
						content={post.content}
						image={post.image}
						categories={post.categories}
					/>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<TapTarget className="hide-on-small" isHidden={this.state.isHidden}>
					<h5>Welcome to my Blog!</h5>
					<p>Keep up to date with my latest Blog posts.</p>
				</TapTarget>
				<div
					style={{
						width: '100%',
						margin: 'auto'
					}}>
					<Link to={`/posts/new`}>
						<button
							className="waves-effect btn"
							style={{
								backgroundColor: '#cf7541',
								zIndex: -2,
								lineHeight: 'inherit',
								fontWeight: 475,
								marginLeft: '5%'
							}}>
							<i
								className="fa fa-plus-circle"
								style={{ fontSize: 20, verticalAlign: 'middle' }}
							/>
							{'  '}New Post
						</button>
					</Link>
					<PostBoard style={{ width: '100%' }}>
						<ul className="list-group" style={{ paddingTop: 10 }}>
							{this.renderPosts()}
						</ul>
					</PostBoard>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
