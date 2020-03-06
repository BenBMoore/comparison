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
				<UserInput
					lumpSum={this.state.lumpSum}
					monthlySum={this.state.monthlySum}
					onChangeHandler={this.userInputHandler}
					onClickHandler={this.pullInfo}
				/>
				<Results brokers={this.state.brokers}>
					{cardContent}
				</Results>
				
			</div>
		);
	};
}

export default App;
