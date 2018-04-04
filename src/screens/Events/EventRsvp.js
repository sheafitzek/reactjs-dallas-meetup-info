// react
import React from 'react';

export const EventRsvp = ({rsvp}) => {
	return (
		<div key={rsvp.member.id}>
			<img src={rsvp.member.photo.thumb_link} alt={rsvp.member.name} />
			<p>
				{rsvp.member.name} - {rsvp.response}
				{` `}
				{rsvp.guests > 0 ? `(+${rsvp.guests})` : ``}
			</p>
		</div>
	);
};

export default EventRsvp;
