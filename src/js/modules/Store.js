import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducers from '@/reducers';
import ReduxState from '@/modules/ReduxState';

const store = createStore(
	combineReducers(reducers),
	{},
	applyMiddleware(
		process.env.NODE_ENV === 'development'
			? store => next => action => {
					const previousState = store.getState();
					const actionStart = performance.now();
					const returnedValue = next(action);
					const actionTime = (performance.now() - actionStart).toPrecision(2);
					/* eslint-disable no-console */
					console.groupCollapsed(
						`%caction %c${action.type}%c (took ${actionTime} ms)`,
						'color:gray;font-weight:normal',
						'',
						'color:gray;font-weight:normal'
					);
					console.log('Previous state', previousState);
					console.log('Action', action);
					console.log('Next state', store.getState());
					console.groupEnd();
					/* eslint-enable no-console */
					return returnedValue;
			  }
			: () => next => action => next(action),
	)
);

store.subscribe(() => {
	ReduxState.internalSet(store.getState());
});
ReduxState.internalSet(store.getState());

export default store;
