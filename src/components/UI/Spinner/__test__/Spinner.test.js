import ReactDOM from 'react-dom';

import Spinner from '../Spinner';

test('Spinner component renders', () => {
	const div = document.createElement('body');
	ReactDOM.render(Spinner, div);
});
