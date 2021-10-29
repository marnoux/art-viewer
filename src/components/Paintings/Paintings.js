import React, { useState, useEffect } from 'react';
import CardList from '../Card/CardList';
import axios from 'axios';

const baseURL =
	'https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV&involvedMaker=Vincent+van+Gogh';

const Paintings = (props) => {
	const [artObject, setArtObject] = useState(null);

	useEffect(() => {
		axios.get(baseURL).then((response) => {
			setArtObject(response.data.artObjects);
		});
	}, []);

	if (artObject == null) {
		return (
			<h1 className='text-center text-danger mt-5'>
				Sorry, we were unable to reach the Museum, please try again later.
			</h1>
		);
	}

	return (
		<div className='container mt-2'>
			<h1 className='text-center'>{props.selectedArtist}</h1>
			<CardList items={artObject} />
		</div>
	);
};

export default Paintings;
