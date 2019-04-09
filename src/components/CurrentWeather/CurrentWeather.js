import React, { Component } from 'react';
import './CurrentWeather.css';
import Background from '../Background/Background';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';


class GetWeather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCelsius: false,
			currentTemp: null,
			currentWeather: null,
			currentIcon: null,
			currentWind: null,
			forecast: []
		};
	}

	toggleUnits() {
		this.setState({
			isCelsius: !this.state.isCelsius
		});
		console.log(this.state.isCelsius);
	}


	componentDidMount() {
		const longitude = "32.7767"
		const latitude = "-96.7970"
		const darkSky = "https://api.darksky.net/forecast/1df706274bc511d0782681ed01d839eb/"

		fetch(darkSky + longitude + "," + latitude)
		.then(response => response.json())
		.then(res => {
			this.setState({
				currentTemp: Math.round(res.currently.apparentTemperature),
				currentWeather: res.currently.summary,
				currentIcon: res.currently.icon,
				currentWind: Math.round(res.currently.windSpeed),
				forecast: res.daily.data
			})
		})
		.catch(err => {
			console.log(err);
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.isCelsius !== prevState.isCelsius) {
			const longitude = "32.7767"
			const latitude = "-96.7970";

			if (this.state.isCelsius === true) {
				const celsius = "?units=si"
			} else {
				const celsius = ""
			}

			const darkSky = "https://api.darksky.net/forecast/1df706274bc511d0782681ed01d839eb/"

			fetch(darkSky + longitude + "," + latitude)
			.then(response => response.json())
			.then(res => {
				this.setState({
					currentTemp: Math.round(res.currently.apparentTemperature),
					currentWeather: res.currently.summary,
					currentIcon: res.currently.icon,
					currentWind: Math.round(res.currently.windSpeed),
					forecast: res.daily.data
				})
			})
			.catch(err => {
				console.log(err);
			});

		}
	}

	render() {
		let forecast = this.state.forecast
		let toggleUnits = this.props.toggleUnits
		console.log(this.state.isCelsius)
		return (
			<div className = "MainContainer">
				<div className="MainWeather">
					<div className="temperature">
						<h1>{this.state.currentTemp}</h1>
						<div className="degree"></div>
					</div>

					<div className="icon">
						<WeatherIcon icon={this.state.currentIcon}/>
					</div>

					<div className="details">
						<h2>{this.state.currentWeather}</h2>
				 		<h2>{this.state.currentWind + " " + 'mph'}</h2>
					</div> 	
				</div>
				<div className="WeatherToggle">
       				<ToggleSwitch onClick={toggleUnits} />
       			</div>
			</div>
			
			);
	}
}

// class WeatherDisplay extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			forecast: []
// 		};
// 	}

// 	componentDidMount() {
// 		const longitude = "32.7767"
// 		const latitude = "-96.7970"
// 		const celsius = "?units=si"
// 		const darkSky = "https://api.darksky.net/forecast/1df706274bc511d0782681ed01d839eb/"

// 		fetch(darkSky + longitude + "," + latitude)
// 		.then(response => response.json())
// 		.then(res => {
// 			this.setState({
// 				forecast: res.daily.data
// 			})
// 		})
// 		.catch(err => {
// 			console.log(err);
// 		});
// 	}

// 	render() {
// 		let forecast = this.state.forecast.slice(0, 5)
// 		return (
// 			<div className="WeatherDisplay">
// 				{forecast.map(day => 
// 					<h1>{day.icon}</h1>)}
// 			</div>
// 			);
// 	}
// }


class CurrentWeather extends Component {
	render () {
		return (
			<div className="InnerWrapper">
		        <Background />
		        <GetWeather />
      		</div>
  		);
	}
}

export default CurrentWeather;
