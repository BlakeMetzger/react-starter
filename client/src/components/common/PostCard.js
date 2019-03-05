import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
	render() {
		const hoverable = this.props.hoverable ? 'hoverable' : '';
		return (
			<div
				className={`card ${hoverable}`}
				style={{
					backgroundColor: '#455a64',
					width: '90%',
					margin: 'auto'
				}}>
				<div className="card-image waves-effect waves-block waves-light">
					<img className="activator" src={this.props.image} alt="" />
				</div>
				<div className="card-content">
					<span className="card-title activator grey-text text-darken-4">
						{this.props.title}
						<i className="material-icons right">more_vert</i>
					</span>
					<p className="flow-text" style={{ color: 'white' }}>
						{this.props.content}
					</p>
					<Link to={`/posts/${this.props.id}`} style={{ color: 'peru' }}>
						Continue reading...
					</Link>
				</div>
				<div className="card-reveal">
					<div className="card-title grey-text text-darken-4">
						{this.props.content}
						<i className="material-icons right">close</i>
					</div>
				</div>
			</div>
		);
	}
}

export default PostCard;
