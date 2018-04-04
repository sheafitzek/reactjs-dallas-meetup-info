// action
import {FETCH_RSVPS} from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_RSVPS:
			if (action.payload.data) {
				return action.payload.data;
			}

			break;

		default:
			return state;
	}
}
