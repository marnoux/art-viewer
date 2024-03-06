import React, { useState } from 'react';

const App = () => {
	/**
	 * To get paintings from other artists, change the default state value
	 * below to any valid artist (See components --> Artist for a list of
	 * valid artists.)
	 */
	const [selectedArtist, setSelectedArtist] = useState('Vincent van Gogh');

	const selectedArtistChangeHandler = (artist: React.SetStateAction<string>) => {
		setSelectedArtist(artist);
	};

	return (
		<div>
			{/* <MainHeader
				artist={selectedArtist}
				onChangeArtist={selectedArtistChangeHandler}
			/>
			<Paintings artist={selectedArtist} /> */}
			<h1>{selectedArtist}</h1>
			<h1>hello world</h1>
		</div>
	);
};

export default App;
