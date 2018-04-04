// react
import React from 'react';

// router
import {Route} from 'react-router-dom';

// libs
import keyIndex from 'react-key-index';

// helpers
import {decodeHtml} from '../../js/helpers';

// components
import EventResponses from './EventResponses';

export const EventInfo = ({eventData, handleClick}) => {
	return (
		<div>
			<h2>{eventData.name}</h2>

			<hr />

			<h3>{eventData.venue.name}</h3>
			<p>
				{eventData.venue.address_1} {eventData.venue.address_2}
			</p>
			<p>in {eventData.venue.city}</p>
			<p>
				{eventData.local_date} @ {eventData.local_time}
			</p>

			<hr />

			<ul>
				{keyIndex(decodeHtml(eventData.description), 1).map((item) => {
					return <li key={item.id}>{item.value}</li>;
				})}
			</ul>
			<p>
				Link:
				<a
					href={eventData.link}
					target="_blank"
					rel="noopener noreferrer"
				>
					{` `}
					{eventData.link}
				</a>
			</p>

			<button onClick={handleClick}>RSVPs</button>

			<hr />

			<Route path={`/:group/:eventId`} component={EventResponses} />
		</div>
	);
};

export default EventInfo;
