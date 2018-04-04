// react
import React from 'react';
import {render} from 'react-dom';

import App from './App';


// scripts
import registerServiceWorker from './js/registerServiceWorker';

// components
import App from './components/App';


render(
	<Router>
		<App />
	</Router>
	document.getElementById(`root`)
);

registerServiceWorker();
