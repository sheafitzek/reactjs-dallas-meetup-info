// react
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchEvents} from '../../redux/actions/index';

// router
import {Route, withRouter} from 'react-router-dom';

// components
import Events from '../Events';

export class SearchGroup extends Component {
	constructor(props) {
		super(props);

		const accessToken = () => {
			const hash = window.location.hash;
			const match = hash.match(/^#([^&]*)&/);

			return `${match[1]}`;
		};

		this.state = {
			group       : `ReactJS-Dallas`,
			accessToken : `${accessToken()}`,
		};
	}

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.fetchEvents(this.state.group, this.state.accessToken);
		this.context.router.history.push(`/${this.state.group}`);
	};

	onInputChange = (e) => {
		this.setState({
			group : e.target.value,
		});
	};

	render() {
		return (
			<div>
				<Form className="input-group" onSubmit={this.onFormSubmit}>
					<h3>Group Event Search</h3>

					<p>
						Input group name from meetup.com URL to see details for
						the next event
					</p>
					<p>
						example:{` `}
						<span>
							https://www.meetup.com/<span>ReactJS-Dallas</span>/
						</span>
					</p>
					<p>or just hit &ldquo;Submit&rdquo; for ReactJS-Dallas.</p>

					<input
						type="text"
						className="form-control"
						placeholder={this.state.group}
						onChange={this.onInputChange}
					/>

					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">
							Submit
						</button>
					</span>
				</Form>

				<Route path={`/${this.state.group}`} component={Events} />
			</div>
		);
	}
}

// types
SearchGroup.propTypes = {
	fetchEvents : PropTypes.func.isRequired,
};

SearchGroup.contextTypes = {
	router : PropTypes.object,
};

// redux
function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchEvents}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(SearchGroup));

