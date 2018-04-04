// react
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';

// router
import {withRouter} from 'react-router-dom';

// components
import EventRsvp from './EventRsvp';

export class EventResponses extends Component {
	render() {
		const responses = this.props.rsvpsData.reduce((acc, rsvp) => {
			acc[rsvp.response]
				? (acc[rsvp.response] += 1)
				: (acc[rsvp.response] = 1);

			return acc;
		}, {});

		return (
			<div>
				<h3>Responses</h3>
				<p>Yes: {responses.yes}</p>
				<p>No: {responses.no}</p>
				<p>Waitlist: {responses.waitlist}</p>

				{this.props.rsvpsData.map((rsvp) => {
					return <EventRsvp key={rsvp.member.id} rsvp={rsvp} />;
				})}
			</div>
		);
	}
}

// types
EventResponses.propTypes = {
	rsvpsData : PropTypes.array.isRequired,
};

// redux
function mapStateToProps({rsvpsData}) {
	return {rsvpsData};
}

export default withRouter(connect(mapStateToProps)(EventResponses));
