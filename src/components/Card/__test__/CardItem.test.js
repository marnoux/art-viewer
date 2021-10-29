import ReactDOM from 'react-dom';

import CardItem from '../CardItem';

test('CardItem component renders', () => {
	const div = document.createElement('body');
	ReactDOM.render(CardItem, div);
});
