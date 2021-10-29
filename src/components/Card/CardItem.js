import React from 'react';
import './CardItem.css';

const CardItem = (props) => {
	return (
		<div className='card col-4 py-4 mt-4 text-center'>
			<div className='card-group d-flex flex-wrap'>
				<img src={props.url} className='card-img-top' alt='description' />
				<div className='card-body'>
					<h3 className='card-title'>{props.title}</h3>
					<p className='card-text'>{props.longTitle}</p>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
