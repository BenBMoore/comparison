import React, { Component } from 'react';
import './App.css';

import { Header } from '../components/Header/Header';
import { UserInput } from '../components/UserInput/UserInput';
import { Results } from '../components/Results/Results';

class App extends Component {
	state = {
		loading: false,
		error: false,
	}

	render() {
		return (
			<div className="App">
				<Header />
				<UserInput />
				<Results />
			</div>
		);
	};
}

export default App;
