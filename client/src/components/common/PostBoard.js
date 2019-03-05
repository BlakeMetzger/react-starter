import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class PostBoard extends Component {
	state = { isHidden: false, isImgHidden: false };

	hideReturnToTop = () => {
		const { isHidden } = this.state;

		window.scrollY > this.prev
			? !isHidden && this.setState({ isHidden: true })
			: isHidden && this.setState({ isHidden: false });

		this.prev = window.scrollY;
	};

	hasImage = this.props.image === ``;

	componentDidMount() {
		window.addEventListener('scroll', this.hideReturnToTop);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.hideReturnToTop);
	}

	render() {
		const hideFooter = this.state.isHidden ? '' : 'hide';
		const hideImg = this.state.isImgHidden ? '' : 'hide';

		return (
			<div className="container" style={this.props.style}>
				<div className="card blue-grey darken-1">
					<div className={`card-image ${hideImg}`}>
						<img src={this.props.image} alt="" />
					</div>
					<div className="card-title">
						<h4>{this.props.title}</h4>
					</div>
					<div className="card-content">
						<div>{this.props.children}</div>
					</div>
					<div className={`topbar ${hideFooter}`}>
						<div className="card-action">
							<a
								onClick={() => {
									window.scrollTo(0, 0);
								}}>
								Return to the top
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default PostBoard;
