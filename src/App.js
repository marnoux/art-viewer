import React, { useState } from 'react';
import axios from 'axios';

import MainHeader from './components/UI/MainHeader/MainHeader';
import Paintings from './components/Paintings/Paintings';

const App = () => {
	const baseUrlString =
		'https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV&involvedMaker=';
	const [artist, setArtist] = useState('');
	const [artObjects, setArtObjects] = useState([]);
	const [baseURL, setBaseURL] = useState(baseUrlString);

	const artistChangeHandler = (artist) => {
		setArtist(artist);
		setBaseURL(baseUrlString + artist.replace(' ', '+').trim());

		if (artist.length > 0) {
			axios.get(baseURL).then((response) => {
				setArtObjects(response.data);
			});
		}
	};

	return (
		<div className='container'>
			<MainHeader onChangeArtist={artistChangeHandler} />
			<Paintings artObjects={artObjects} />
		</div>
	);
};

export default App;
