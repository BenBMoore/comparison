import React, { Component } from 'react';
import './App.css';

import { MoonLoader } from 'react-spinners';

import { Header } from '../components/Header/Header';
import { UserInput } from '../components/UserInput/UserInput';
import { Results } from '../components/Results/Results';

class App extends Component {
	state = {
		loading: true,
		error: false,
		lumpSum: null,
		monthlySum: null,
		brokers: null,
	}

	async componentDidMount() {
		

	}
	//Update state with current money amounts
	userInputHandler = (e: any) => {
		if (e.target.name === "lumpsum") {
			this.setState({
				"lumpSum": e.target.value
			})
		}
		if (e.target.name === "monthlysum") {
			this.setState({
				"monthlySum": e.target.value
			})
		}

	}

	pullInfo = async () =>{
		this.setState({
			loading: true,
			error: false,
		})
		try {
			const response = await fetch("../data/brokerdata.json");
			const json = await response.json();
			this.setState({ brokers: json });
		} catch (error) {
			console.log(error);
			this.setState({ error: true })
		}
	}

	render() {

		let cardContent = null
		if (this.state.loading) {
			cardContent = <MoonLoader />
		}
		if (this.state.brokers != null) {
			cardContent = <Results brokers={this.state.brokers} />
		}
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
