import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import MainHeader from '../MainHeader';

test('Renders MainHeader', () => {
	render(<MainHeader artist={'Vincent van Gogh'} />);
});

test('Renders MainHeader with artist name', () => {
	render(<MainHeader artist={'Vincent van Gogh'} />);
	const linkElement = screen.getByText(/Vincent van Gogh/i);
	expect(linkElement).toBeInTheDocument();
});
