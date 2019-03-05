import React from 'react';
import { Link } from 'react-router-dom';

const Board = ({ content, image, color, width }) => {
	return (
		<div
			className="row"
			style={{
				width: width ? width : '90%',
				backgroundcolor: color ? color : '#546e7a',
				margin: 'auto',
				color: 'white'
			}}>
			<div className="card blue-grey darken-1">
				<div className="card-image">
					<img src={image} />
				</div>
				<div className="card-content">
					<div>{content}</div>
				</div>
			</div>
		</div>
	);
};

export default Board;
