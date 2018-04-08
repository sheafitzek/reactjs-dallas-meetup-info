// react
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// libs
import styled from 'styled-components';

// components
import EventInfo from './EventInfo';

export class Events extends Component {
	renderEvent = (eventData, index) => {
		const handleClick = (e) => {
			e.preventDefault();

			this.props.fetchRsvps(eventData.group.urlname, eventData.id);

			this.context.router.history.push(
				`/${eventData.group.urlname}/${eventData.group.id}`
			);
		};

		if (index < 1) {
			const id = eventData.id;

			return (
				<EventInfo
					key={id}
					eventData={eventData}
					rsvpsData={this.props.rsvpsData}
					handleClick={handleClick}
				/>
			);
		}
	};

	render() {
		return (
			<Div>
				<h1>Upcoming Events:</h1>

				{this.props.eventsData.map(this.renderEvent)}
			</Div>
		);
	}
}

// types
Events.propTypes = {
	eventsData : PropTypes.array.isRequired,
	fetchRsvps : PropTypes.func.isRequired,
	rsvpsData  : PropTypes.array.isRequired,
};

Events.contextTypes = {
	router : PropTypes.object,
};

export default Events;

// styles
const Div = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 2rem;
`;
