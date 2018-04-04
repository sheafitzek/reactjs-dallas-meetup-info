// redux
import {combineReducers} from 'redux';

// reducers
import EventsReducer from './reducer_events-data';
import RsvpsReducer from './reducer_rsvps-data';

const rootReducer = combineReducers({
	eventsData : EventsReducer,
	rsvpsData  : RsvpsReducer,
});

export default rootReducer;
