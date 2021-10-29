import ReactDOM from 'react-dom';

import CardList from '../CardList';

test('CardList component renders', () => {
	const div = document.createElement('body');
	ReactDOM.render(CardList, div);
});
