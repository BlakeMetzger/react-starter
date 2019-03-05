import React, { Component } from 'react';

class SocialMediaIcons extends Component {
	render() {
		return (
			<div>
				<a
					href="https://github.com/BlakeMetzger"
					target="_blank"
					style={styles.iconStyle}>
					<i
						className="fa fa-github medium waves-effect btn-medium social waves-gray circle"
						style={(styles.iconStyle, { color: '#282d31', float: 'right' })}
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/blakemetzger/"
					target="_blank"
					style={styles.iconStyle}>
					<i
						className="fa fa-linkedin medium waves-effect waves-light"
						style={(styles.iconStyle, { color: '#0075b0', float: 'left' })}
					/>
				</a>
			</div>
		);
	}
}

const styles = {
	iconStyle: {
		paddingRight: 15,
		paddingLeft: 15,
		fontSize: '4rem',
		paddingRight: '25%',
		paddingLeft: '25%'
	}
};

export default SocialMediaIcons;
