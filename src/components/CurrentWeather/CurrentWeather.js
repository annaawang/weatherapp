import React, { Component } from 'react';
import './CurrentWeather.css';
import Background from '../Background/Background';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import DateInfo from '../DateInfo/DateInfo';
import dallas from '../../img/dallas@3x.png';

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
	}


	componentDidMount() {
		const proxy = "https://cors-anywhere.herokuapp.com/"
		const longitude = "29.7818416"
		const latitude = "-95.5596132"
		const darkSky = "https://api.darksky.net/forecast/1df706274bc511d0782681ed01d839eb/"
		var celsius = ''
			if (this.state.isCelsius === true) {
				celsius = "?units=si"
			} else {
				celsius = ""
			}

		fetch(proxy + darkSky + longitude + "," + latitude)
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
			const proxy = "https://cors-anywhere.herokuapp.com/"
			const longitude = "29.7818416"
			const latitude = "-95.5596132"
			const darkSky = "https://api.darksky.net/forecast/1df706274bc511d0782681ed01d839eb/"
			var celsius = ''
			if (this.state.isCelsius === true) {
				celsius = "?units=si"
			} else {
				celsius = ""
			}

			fetch(proxy + darkSky + longitude + "," + latitude + celsius)
			.then(response => response.json())
			.then(res => {
				this.setState({
					currentTemp: Math.round(res.currently.temperature),
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
		if (!this.state.forecast.length)
			return null;

		let forecast = this.state.forecast.slice(1, 6)
		let toggleUnits = this.toggleUnits.bind(this)
		let windUnits = this.state.isCelsius ? 'kph' : 'mph'

		return (
			<div className = "MainContainer">
				<img id="dallas" src={dallas} alt="dallas" />
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
				 		<h2>{this.state.currentWind + " " + windUnits}</h2>
					</div> 	
				</div>
				
				<div className="WeatherToggle">
       				<ToggleSwitch onClick={toggleUnits} />
       			</div>

       			<div className="WeatherDisplay">
       				<div className="forecastContainer">
					{forecast.map(day => 
							<div className="forecast">
								<DateInfo time={day.time} />
								<WeatherIcon pulse={true} icon={day.icon} />
								<p className="tempHigh">{Math.round(day.temperatureHigh)}</p>
								<p className="tempLow">{Math.round(day.temperatureLow)}</p>
							</div>
						)}
					</div>
				</div>
			</div>
			);
	}
}


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
