// react
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// libs
import styled from 'styled-components';

export class SearchGroup extends Component {
	constructor(props, context) {
		super(props, context);

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

		if (!this.state.group) {
			return false;
		}

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
			<Div>
				<form onSubmit={this.onFormSubmit}>
					<h1>Group Event Search</h1>

					<p>
						Input group name from meetup.com URL to see details for
						the next event
					</p>
					<p>
						... or just hit &ldquo;Submit&rdquo; for ReactJS-Dallas.
					</p>

					<div className="input">
						<input
							type="text"
							placeholder={this.state.group || `ReactJS-Dallas`}
							onChange={this.onInputChange}
						/>

						<span>
							<button type="submit">Submit</button>
						</span>
					</div>
					<p>
						example:{` `}
						<span className="url">
							https://www.meetup.com/<span className="group">ReactJS-Dallas</span>/
						</span>
					</p>
				</form>
			</Div>
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

export default SearchGroup;

// styles
const Div = styled.div`
	display: flex;
	flex: 1;

	form {
		display: flex;
		flex: 1;

		flex-direction: column;
		justify-content: center;
		align-items: center;

		> .input {
			margin: 1rem 0 1rem 0;

			input {
				padding-left: 0.25rem;
			}
		}
	}

	p {
		span.url,
		span.group {
			text-shadow: none;
		}

		span.url {
			color: ${({theme}) => theme.black};
		}

		span.group {
			color: ${({theme}) => theme.red};
		}
	}

	h3,
	p,
	div {
		text-align: center;
	}
`;
