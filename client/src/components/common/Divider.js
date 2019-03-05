import React from 'react';

const Divider = ({ color, width }) => {
	return (
		<div
			className="divider"
			style={{
				backgroundColor: color ? color : 'darkslategray',
				width: width ? width : '80%',
				display: 'inline-block'
			}}
		/>
	);
};

export default Divider;
