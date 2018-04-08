// react
import React, {PureComponent} from 'react';

// router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// libs
import styled from 'styled-components';

// components
import Login from '../screens/Login';
import SearchGroup from '../screens/SearchGroup';
import Events from '../screens/Events';
import NoMatch from '../screens/NoMatch';

const basename = window.location.origin.includes(`github.io`)
	? `/${window.location.pathname.split(`/`)[1]}`
	: ``;

export class App extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			eventsData  : [],
			rsvpsData   : [],
			accessToken : ``,
			group       : ``,
			groupId     : ``,
		};
	}

	fetchEvents = (groupName = `ReactJS-Dallas`, accessToken) => {
		const ROOT_URL = `https://api.meetup.com/`;
		const status = `&status=upcoming`;
		const count = `&page=2`;
		const cbname = `fn${Date.now()}`;
		const cb = `&callback=${cbname}`;

		const url = `${ROOT_URL}${groupName}/events?${status}${count}&sign=true&${accessToken}${cb}`;

		const script = document.createElement(`script`);

		script.src = url;

		window[cbname] = (response) => {
			this.setState({
				eventsData  : response.data,
				group       : groupName,
				accessToken,
			});

			delete window[cbname];
			document.head.removeChild(script);
		};

		document.head.appendChild(script);
	};

	fetchRsvps = (groupName, groupId) => {
		const ROOT_URL = `https://api.meetup.com/`;
		const cbname = `fn${Date.now()}`;
		const cb = `&callback=${cbname}`;
		const url = `${ROOT_URL}${groupName}/events/${groupId}/rsvps?&sign=true${cb}`;

		const script = document.createElement(`script`);

		script.src = url;

		window[cbname] = (response) => {
			this.setState({
				rsvpsData : response.data,
				groupId,
			});

			delete window[cbname];
			document.head.removeChild(script);
		};

		document.head.appendChild(script);
	};

	render() {
		return (
			<Router basename={basename}>
				<Div className="App">
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Login loc="https://secure.meetup.com/oauth2/authorize?client_id=hshav8bbtdaqdvut0ntuvr45d5&response_type=token&redirect_uri=https://sheafitzek.github.io/reactjs-dallas-meetup-info/search" />
							)}
						/>
						<Route
							exact
							path="/search"
							render={() => (
								<SearchGroup fetchEvents={this.fetchEvents} />
							)}
						/>
						<Route
							path="/:group"
							render={() => (
								<Events
									eventsData={this.state.eventsData}
									fetchRsvps={this.fetchRsvps}
									rsvpsData={this.state.rsvpsData}
								/>
							)}
						/>
						<Route component={NoMatch} />
					</Switch>
				</Div>
			</Router>
		);
	}
}

export default App;

// styles
const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	flex: 1;

	box-shadow: inset 0 0 5rem ${({theme}) => theme.black};
`;
