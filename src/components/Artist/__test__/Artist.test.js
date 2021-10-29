import ReactDOM from 'react-dom';

import Artist from '../Artist';

test('Artist component renders', () => {
	const div = document.createElement('body');
	ReactDOM.render(Artist, div);
});
