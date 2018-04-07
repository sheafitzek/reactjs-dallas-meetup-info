// react
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';

// router
import {withRouter} from 'react-router-dom';

// libs
import styled from 'styled-components';

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
			<Div>
				<div className="responses">
					<h3>Responses</h3>
					<div className="totals">
						<p>
							<span className="yes">Yes:</span> {responses.yes}
						</p>
						<p>
							<span className="no">No:</span> {responses.no}
						</p>
						<p>
							<span className="wait">Waitlist:</span>{` `}
							{responses.waitlist}
						</p>
					</div>
				</div>
				<div className="rsvps">
					{this.props.rsvpsData.map((rsvp) => {
						return <EventRsvp key={rsvp.member.id} rsvp={rsvp} />;
					})}
				</div>
			</Div>
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

const Div = styled.div`
	display: flex;
	flex-direction: column;

	> .responses {
		.totals {
			display: flex;
			justify-content: space-around;

			p {
				font-size: 1.5rem;

				> .yes,
				> .no,
				> .wait {
					text-shadow: none;
				}

				> .yes {
					color: ${({theme}) => theme.green};
				}

				> .no {
					color: ${({theme}) => theme.red};
				}

				> .wait {
					color: ${({theme}) => theme.yellow};
				}
			}
		}
	}

	> .rsvps {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;

		div {
			display: flex;
			flex-direction: column;

			width: 10rem;
			height: 10rem;
		}
	}
`;
