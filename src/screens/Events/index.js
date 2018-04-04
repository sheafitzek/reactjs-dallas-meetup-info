// react
import React, {Component} from 'react';

// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchRsvps} from '../../redux/actions/index';

// router
import {withRouter} from 'react-router-dom';

// components
import EventInfo from './EventInfo';

export class Events extends Component {
	renderEvent = (eventData, index) => {
		const handleClick = (e) => {
			e.preventDefault();

			this.props.fetchRsvps(eventData.group.urlname, eventData.id);

			setTimeout(() => {
				this.context.router.history.push(
					`/${eventData.group.urlname}/${eventData.group.id}`
				);
			}, 500);
		};

		if (index < 1) {
			const id = eventData.id;

			return (
				<EventInfo
					key={id}
					eventData={eventData}
					handleClick={handleClick}
				/>
			);
		}
	};

	render() {
		return (
			<Div>
				<h1>Upcoming Events</h1>

				{this.props.eventsData.map(this.renderEvent)}
			</Div>
		);
	}
}

export default Events;
// redux
function mapStateToProps({eventsData}) {
	return {eventsData};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchRsvps}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Events));
