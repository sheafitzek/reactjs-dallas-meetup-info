// react
import React from 'react';
import {render} from 'react-dom';

// redux
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';

import reducers from './redux/reducers';

// router
import {BrowserRouter as Router} from 'react-router-dom';

// scripts
import registerServiceWorker from './js/registerServiceWorker';

// components
import App from './components/App';

const composeEnhancers =
	typeof window !== `undefined` &&
	typeof window === `object` &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
				{
					// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
				}
			)
		: compose;

const store = createStore(
	reducers,
	/* preloadedState, */ composeEnhancers(
		applyMiddleware(ReduxPromise) /* , other store enhancers (if any), */
	)
);

render(
	<Provider store={store}>
	<Router>
		<App />
	</Router>
	</Provider>,
	document.getElementById(`root`)
);

registerServiceWorker();
