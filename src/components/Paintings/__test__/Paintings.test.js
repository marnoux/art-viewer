import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

import Paintings from '../Paintings';

test('Renders Paintings', () => {
	render(<Paintings artist={'Vincent van Gogh'} />);
});
