import ReactDOM from 'react-dom';

import MainHeader from '../MainHeader';

test('MainHeader component renders', () => {
	const div = document.createElement('body');
	ReactDOM.render(MainHeader, div);
});
