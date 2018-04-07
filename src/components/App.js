// react
import React from 'react';

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

const App = () => {
	return (
		<Router basename={basename}>
			<Div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={() => (
							<Login loc="https://secure.meetup.com/oauth2/authorize?client_id=hshav8bbtdaqdvut0ntuvr45d5&response_type=token&redirect_uri=http://127.0.0.1:3000/search" />
						)}
					/>
					<Route exact path="/search" component={SearchGroup} />
					<Route path="/:group" component={Events} />
					<Route component={NoMatch} />
				</Switch>
			</Div>
		</Router>
	);
};

export default App;

// styles
const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	flex: 1;

	box-shadow: inset 0 0 5rem ${({theme}) => theme.black};
`;
