import React, { Component } from 'react';
import './CurrentWeather.css';
import Background from '../Background/Background';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';


class GetWeather extends Component {
	constructor() {
		super();
		this.state = {
			currentTemp: null,
			currentWeather: null,
			currentIcon: null,
			currentWind: null,
		};
	}

	componentDidMount() {
		const darkSky = "https://api.darksky.net/forecast/1df706274bc511d0782681ed01d839eb/32.7767,-96.7970"
		fetch(darkSky)
		.then(response => response.json())
		.then(res => {
			this.setState({
				currentTemp: res.currently.apparentTemperature,
				currentWeather: res.currently.summary,
				currentIcon: res.currently.icon,
				currentWind: res.currently.windSpeed
			})
		})
		.catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div className="MainWeather">
				<div className="temperature">
					<h1>{Math.round(this.state.currentTemp)}</h1>
					<div className="degree"></div>
				</div>

				<div className="icon">
					<WeatherIcon icon={this.state.currentIcon}/>
				</div>

				<div className="details">
					<h2>{this.state.currentWeather}</h2>
			 		<h2>{Math.round(this.state.currentWind) + " " + 'mph'}</h2>
				</div> 	
			</div>
			);
	}

}



class MainContainer extends Component {
  render () {
    return (
      <div className="MainContainer">
       	<GetWeather />
       	<div className="WeatherToggle">
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
		        <MainContainer />
      		</div>)
	}
}

export default CurrentWeather;
