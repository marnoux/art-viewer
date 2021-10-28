import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Online Art Gallery react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Online Art Gallery/i);
	expect(linkElement).toBeInTheDocument();
});
