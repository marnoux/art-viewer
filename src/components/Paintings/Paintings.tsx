import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CardList from '../Card/CardList';

const Paintings = (props: { artist: string }) => {
	const [artObject, setArtObject] = useState(null);

	// Concatenate the set url value with the selected artist state
	const url =
		'https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV&involvedMaker=' +
		// Replace and trim whitespace to ensure valid API call
		props.artist.replace(' ', '+').trim();

	/* 
		Use the useEffect hook to make async call as well as 
		setting the subscription as an observable, enabling 
		more flexibility and error handling with the API 
		call, leading to a better user experience.
	*/
	useEffect(() => {
		Axios.get(url)
			.then(response => {
				// Update the artObject state with the response of the API call
				setArtObject(response.data.artObjects);
			})
			// If something went wrong with the API call, return this to the user
			.catch(error => {
				return (
					<div>
						<h1 className="text-center text-danger mt-5">
							Sorry, we were unable to reach the Museum, please try again later.
						</h1>
						<h2>Reason: {error.response}</h2>
					</div>
				);
			});
	}, [url]);

	// Display spinner while API call completes
	if (!artObject) {
		return <h1>Loading...</h1>;
	}

	/* 
		Finally, pass the returned object to the CardList 
		component as a prop to render the results on the 
		screen in a clean way.
	*/
	return (
		<div className="container mt-2">
			<CardList items={artObject} />
		</div>
	);
};

export default Paintings;
