import React, { useState } from 'react';
import Artist from '../../Artist/Artist';

const MainHeader = (props) => {
	const [artist, setArtist] = useState(props.artist);

	const artistChangeHandler = (selectedArtist) => {
		setArtist(selectedArtist);
	};

	return (
		<nav className='navbar navbar-dark mt-3'>
			<h1>
				<u>Rijksmuseum</u>
			</h1>
			<Artist selected={artist} onChangeFilter={artistChangeHandler} />
			{/* <h2 className='navbar-brand'>Works by {artist}</h2> */}
		</nav>
	);
};

export default MainHeader;
