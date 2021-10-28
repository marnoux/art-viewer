import React, { useState } from 'react';

import MainHeader from './components/UI/MainHeader/MainHeader';
import Paintings from './components/Paintings/Paintings';

const App = () => {
	const [artist, setArtist] = useState('');

	const artistChangeHandler = (artist) => {
		setArtist(artist);
	};

	return (
		<div className='container'>
			<MainHeader onChangeArtist={artistChangeHandler} />

			<Paintings selectedArtist={artist} />
		</div>
	);
};

export default App;
