import React from 'react';
import CardItem from './CardItem';

const CardList = (props) => {
	console.log(props);
	return (
		<div className='card-deck'>
			<div className='container justify-content-center'>
				<div className='row'>
					<div
						className='card col-4 py-4 mt-4'
						style={({ width: '20rem' }, { padding: '1rem' })}
					>
						<ul>
							{props.items.map((painting) => (
								<CardItem
									key={painting.id}
									title={painting.title}
									longTitle={painting.longTitle}
									url={painting.webImage.url}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardList;
