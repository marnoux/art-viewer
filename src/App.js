import React, { useState } from 'react';
import MainHeader from './components/UI/MainHeader/MainHeader';
import Paintings from './components/Paintings/Paintings';

const App = () => {
	/**
	 * To get paintings from other artists, change the default state value
	 * below to any valid artist (See components --> Artist for a list of
	 * valid artists.)
	 */
	const [selectedArtist, setSelectedArtist] = useState('Vincent van Gogh');

	const selectedArtistChangeHandler = (artist) => {
		setSelectedArtist(artist);
	};

	return (
		<div className='container'>
			<MainHeader
				artist={selectedArtist}
				onChangeArtist={selectedArtistChangeHandler}
			/>
			<Paintings artist={selectedArtist} />
		</div>
	);
};

export default App;
