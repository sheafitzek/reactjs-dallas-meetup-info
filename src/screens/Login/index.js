// react
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class Login extends PureComponent {
	componentWillMount() {
		window.location = this.props.loc;
	}
	render() {
		return <section>Redirecting...</section>;
	}
}

// types
Login.propTypes = {
	loc : PropTypes.string.isRequired,
};

export default Login;
