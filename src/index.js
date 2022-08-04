import ReactDOM from 'react-dom';

import History from '@/modules/History';
import Store from '@/modules/Store';

import App from '@/components/App';

// CSS
import './css/main.css';

History.listen(location => {
	const { ga } = window;
	if (typeof ga !== 'undefined') {
		ga('set', 'page', location.pathname);
		ga('send', 'pageview');
	}

	const contentWrapper = document.getElementById('content-wrapper');
	if (contentWrapper !== null) {
		contentWrapper.scrollTop = 0;
		contentWrapper.scrollLeft = 0;
	}
	window.scrollTo(0, 0);
});

ReactDOM.render(<App store={Store} history={History} />, document.getElementById('main'));
