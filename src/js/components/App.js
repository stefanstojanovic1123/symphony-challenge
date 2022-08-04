import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import Routes from './Routes';
import ModalManager from './ModalManager';
import Snackbar from '@ui/Snackbar';

const App = ({ store, history }) => (
	<Provider store={store}>
		<Router history={history}>
			<div id="content-outer">
				<Routes />
			</div>
			<ModalManager />
			<Snackbar />
		</Router>
	</Provider>
);
export default App;
