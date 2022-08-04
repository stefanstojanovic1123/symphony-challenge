import { Route, Switch } from 'react-router-dom';

import Persistence from '@/modules/Persistence';
import Home from './Home';

const Routes = props => {
	const token = Persistence.get('user_token');

	return (
		<Switch location={props.location}>
			<Route path="*" component={Home} />
		</Switch>
	)
};
export default Routes;
