import React from 'react';
import {render} from 'react-dom';

import App from './App';

import registerServiceWorker from './scripts/registerServiceWorker';

render(<App />, document.getElementById(`root`));

registerServiceWorker();
