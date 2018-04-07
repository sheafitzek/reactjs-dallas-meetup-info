// react
import React from 'react';
import PropTypes from 'prop-types';

// libs
import styled from 'styled-components';

export const EventRsvp = ({rsvp}) => {
	return (
		<Div key={rsvp.member.id} rsvp={rsvp.response}>
			<img src={rsvp.member.photo.photo_link} alt={rsvp.member.name} />
			<p>
				{rsvp.member.name} - {rsvp.response}
				{` `}
				{rsvp.guests > 0 ? `(+${rsvp.guests})` : ``}
			</p>
		</Div>
	);
};

// types
EventRsvp.propTypes = {
	rsvp : PropTypes.object.isRequired,
};

export default EventRsvp;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 10rem;
	height: 10rem;
	background: ${({theme}) => theme.blue};
	margin: 2.5rem 1.25rem 0 1.25rem;
	padding-top: 1rem;
	border: 2px solid
		${({theme, rsvp}) =>
			rsvp === `yes`
				? theme.green
				: rsvp === `waitlist` ? theme.yellow : theme.red};
	box-shadow: 5px 5px 10px ${({theme}) => theme.BoxShadow};

	img {
		width: 7.5rem;
		height: 7.5rem;
	}

	p {
		text-align: center;
	}
`;
