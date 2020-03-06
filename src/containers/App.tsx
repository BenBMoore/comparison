import React, { Component } from 'react';
import './App.css';
import classes from '../components/Results/Results.module.css';

import { MoonLoader } from 'react-spinners';

import { Header } from '../components/Header/Header';
import { UserInput } from '../components/UserInput/UserInput';
import Card from '../elements/Card/Card';

class App extends Component {
	state = {
		loading: true,
		error: false,
		lumpSum: null,
		monthlySum: null,
		brokers: [],
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

	pullInfo = async () => {
		this.setState({
			loading: true,
			error: false,
		})
		try {
			const response = await fetch("../data/brokerdata.json");
			const json = await response.json();
			this.setState({ brokers: json });
						this.setState({loading: false})
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
		if(this.state.brokers && this.state.brokers.length)  {
			cardContent = this.state.brokers.map(function(val:any, index:number){
                return <Card key={index} data={val}/>
                
            });
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
				 <div className={classes.ResultsWrapper}>
					{cardContent}
				 </div>

			</div>
		);
	};
}

export default App;
