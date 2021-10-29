import React from 'react';
import CardItem from './CardItem';

const CardList = (props) => {
	return (
		<div className='container'>
			<div className='row'>
				{props.items.map((painting) => (
					<CardItem
						key={painting.id}
						title={painting.title}
						longTitle={painting.longTitle}
						url={painting.webImage.url}
					/>
				))}
			</div>
		</div>
	);
};

export default CardList;
