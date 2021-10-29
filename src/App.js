import React, { useState } from 'react';
import MainHeader from './components/UI/MainHeader/MainHeader';
import Paintings from './components/Paintings/Paintings';

const App = () => {
	const [selectedArtist, setSelectedArtist] = useState('Rembrandt van Rijn');

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
