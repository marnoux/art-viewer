import React from 'react';
import './CardItem.css';

const CardItem = (props) => {
	console.log(props);

	return (
		<div className='card-group d-flex flex-wrap' style={{ padding: '1ex' }}>
			<img src={props.url} className='card-img-top' alt='description' />
			<div className='card-body'>
				<h3 className='card-title text-center'>{props.title}</h3>
				<p className='card-text text-center'>{props.longTitle}</p>
			</div>
		</div>
	);
};

export default CardItem;
