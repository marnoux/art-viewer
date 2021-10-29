import React, { useState } from 'react';

const MainHeader = (props) => {
	const [artist, setArtist] = useState(props.artist);

	/*
		The reason for using sate here instead of a variable
		is to leave the function open to a possible extension
		mentioned in the readme. Instead of hard coding the artist,
		the user could select valid artists from a dropdown.
	 */
	const artistChangeHandler = (selectedArtist) => {
		setArtist(selectedArtist);
	};

	return (
		<nav className='navbar navbar-dark mt-3'>
			<h1>
				<u>Rijksmuseum</u>
			</h1>
			<h2 className='navbar-brand'>Works by {artist}</h2>
		</nav>
	);
};

export default MainHeader;
