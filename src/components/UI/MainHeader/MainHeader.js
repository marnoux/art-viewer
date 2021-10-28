import React, { useState } from 'react';
import './MainHeader.css';

const MainHeader = (props) => {
	let textInput = React.createRef(); // React use ref to get input value

	const artistChangeHandler = (e) => {
		props.onChangeArtist(textInput.current.value);
	};

	return (
		<nav className='navbar navbar-dark mt-3'>
			<h1 className='navbar-brand'>Online Art Gallery</h1>
			<form className='d-flex'>
				<input
					className='form-control me-3'
					ref={textInput}
					type='search'
					placeholder='Enter Name of Artist'
				></input>
				<button
					className='btn btn-outline-success'
					type='submit'
					onClick={artistChangeHandler}
				>
					Search
				</button>
			</form>
		</nav>
	);
};

export default MainHeader;
