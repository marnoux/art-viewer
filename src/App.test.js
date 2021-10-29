import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rijksmuseum', () => {
	render(<App />);
	const linkElement = screen.getByText(/Rijksmuseum/i);
	expect(linkElement).toBeInTheDocument();
});
