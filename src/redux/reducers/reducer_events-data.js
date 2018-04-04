// action
import {FETCH_EVENTS} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_EVENTS:
			if (action.payload.data) {
				return action.payload.data;
			}

			break;

		default:
			return state;
	}
}
