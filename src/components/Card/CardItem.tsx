import React from 'react';

import './CardItem.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CardItem = (props: {
	url: any;
	longTitle:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| Iterable<React.ReactNode>
		| React.ReactPortal
		| null
		| undefined;
	title:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| Iterable<React.ReactNode>
		| React.ReactPortal
		| null
		| undefined;
}) => {
	/**
	 * Lazy loading implemented with react-lazy-load-image-component
	 * and by replacing '<img>' with '<LazyLoadImage>'
	 */
	return (
		<div className="card col-4 py-4 mt-4 text-center">
			<div className="card-group d-flex flex-wrap">
				<div className="card-body">
					<h3 className="card-title">{props.title}</h3>
					<p className="card-text">{props.longTitle}</p>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
