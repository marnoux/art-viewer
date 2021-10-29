import React, { useState, useEffect } from 'react';
import CardList from '../Card/CardList';
import Axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';

const Paintings = (props) => {
	const [artObject, setArtObject] = useState(null);

	const url =
		'https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV&involvedMaker=' +
		props.artist.replace(' ', '+').trim();

	useEffect(() => {
		Axios.get(url)
			.then((response) => {
				setArtObject(response.data.artObjects);
			})
			.catch((error) => {
				return (
					<div>
						<h1 className='text-center text-danger mt-5'>
							Sorry, we were unable to reach the Museum, please try again later.
						</h1>
						<h2>Reason: {error.response}</h2>
					</div>
				);
			});
	}, [url]);

	// Display spinner while API call completes
	if (!artObject) {
		return <Spinner />;
	}

	return (
		<div className='container mt-2'>
			<CardList items={artObject} />
		</div>
	);
};

export default Paintings;
