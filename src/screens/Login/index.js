// react
import React, {PureComponent} from 'react';

export class Login extends PureComponent {
	componentWillMount() {
		window.location = this.props.loc;
	}
	render() {
		return <section>Redirecting...</section>;
	}
}

export default Login;
