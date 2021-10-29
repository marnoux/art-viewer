import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

import Paintings from '../Paintings';

test('Paintings component renders', () => {
	const div = document.createElement('body');
	ReactDOM.render(Paintings, div);
});
