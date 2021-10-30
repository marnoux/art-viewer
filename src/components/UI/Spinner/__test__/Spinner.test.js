import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Spinner from '../Spinner';

test('Spinner component renders', () => {
	render(<Spinner />);
});
