import React from 'react';
import './CardItem.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardItem = (props) => {
	return (
		<div className='card col-4 py-4 mt-4 text-center'>
			<div className='card-group d-flex flex-wrap'>
				<LazyLoadImage
					effect='blur'
					src={props.url}
					className='card-img-top'
					alt={props.longTitle}
				/>
				<div className='card-body'>
					<h3 className='card-title'>{props.title}</h3>
					<p className='card-text'>{props.longTitle}</p>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
