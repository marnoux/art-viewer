import React, { useState } from 'react';
import MainHeader from './components/UI/MainHeader/MainHeader';
import Paintings from './components/Paintings/Paintings';

const App = () => {
	return (
		<div className='container'>
			<MainHeader />
			<Paintings />
		</div>
	);
};

export default App;
