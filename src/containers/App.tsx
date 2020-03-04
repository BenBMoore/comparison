import React, { Component } from 'react';
import './App.css';

import { Header } from '../components/Header/Header';

class App extends Component {
	state = {
		loading: false,
		error: false,
	}

	render() {
		return (
			<div className="App">
				<Header />
			</div>
		);
	};
}

export default App;
