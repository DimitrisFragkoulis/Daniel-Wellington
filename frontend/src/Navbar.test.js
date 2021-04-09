import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders brand name', () => {
	render(<Navbar />);
	const linkElement = screen.getByText(/Daniel Wellington/i);
	expect(linkElement).toBeInTheDocument();
});
