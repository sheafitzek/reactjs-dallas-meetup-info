// libs
import axios from 'axios';

// actions
export const FETCH_EVENTS = `FETCH_EVENTS`;
export const FETCH_RSVPS = `FETCH_RSVPS`;

const ROOT_URL = `https://api.meetup.com/`;

export function fetchEvents(groupName = `ReactJS-Dallas`, accessToken) {
	const status = `&status=upcoming`;
	const count = `&page=2`;
	const url = `${ROOT_URL}${groupName}/events?${status}${count}&sign=true&${accessToken}`;
	const request = axios.get(url);

	return {
		type    : FETCH_EVENTS,
		payload : request,
	};
}

export function fetchRsvps(groupName, groupId) {
	const url = `${ROOT_URL}${groupName}/events/${groupId}/rsvps?&sign=true`;
	const request = axios.get(url);

	return {
		type    : FETCH_RSVPS,
		payload : request,
	};
}
