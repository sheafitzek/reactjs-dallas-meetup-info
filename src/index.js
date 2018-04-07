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

// libs
import {ThemeProvider, injectGlobal} from 'styled-components';

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

// styles
const theme = {
	black     : `rgb(33, 33, 33)`,
	white     : `rgba(255,255,255,0.87)`,
	red       : `rgb(228,115,114)`,
	yellow    : `rgb(255,202,43)`,
	green     : `#1DE9B6`,
	blue      : `rgba(41, 149, 243, 0.75)`,
	teal      : `rgb(17, 186, 211)`,
	boxShadow : `rgba(0, 0, 0, 0.25)`,
};

render(
	<Provider store={store}>
		<Router>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Router>
	</Provider>,
	document.getElementById(`root`)
);

registerServiceWorker();

// styles
injectGlobal`
	*, *:before, *:after {
		box-sizing: border-box;
	}

	html {
		display: flex;
		min-height: 100%;
	}

	body {
		display: flex;
		flex: 1;
		background: ${theme.teal};
	}

	#root {
		display: flex;
		flex: 1;

		width: 98vw;
	}

	h1,
	h2,
	h3 {
		font-family: 'Oswald', sans-serif;
		color: ${theme.black};
		text-decoration: underline;
		text-decoration-color: ${theme.red};
	}

	h2 {
		text-decoration-color: ${theme.yellow};
	}

	h3 {
		text-decoration-color: ${theme.green};
	}

	p {
		font-family: 'Roboto', sans-serif;
		color: ${theme.white};
		text-shadow: 1px 1px ${theme.black};
	}

	a {
		text-shadow: none;
	}
`;
