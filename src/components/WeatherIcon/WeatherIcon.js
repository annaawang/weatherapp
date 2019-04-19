import React, { Component } from 'react';
import './WeatherIcon.css';
import clearDay from '../../img/weather/clear-day.svg';
import partlyCloudy from '../../img/weather/partly-cloudy-day.svg';
import rain from '../../img/weather/rain.svg';
import thunderstorm from '../../img/weather/thunderstorm.svg';


class weatherIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pulse: null
		};
	}

	setPulse(props) {
		let isPulse = props;
		if (isPulse) {
			return "pulse";
		} else {
			return "icon-size";
		}

	}

    render() {
    	let iconImage = null;
    	let pulse = this.props.pulse;

    switch(this.props.icon){
        case('clear-day'):
            iconImage = clearDay;
            break;
        case('clear-night'):
            iconImage = clearDay;
            break;
        case('rain'):
            iconImage = rain;
            break;
        case('snow'):
            iconImage = rain;
            break;
        case('sleet'):
            iconImage = rain;
            break;
        case('wind'):
            iconImage = rain;
            break;
        case('fog'):
            iconImage = rain;
            break;
        case('cloudy'):
            iconImage = partlyCloudy;
            break;
        case('partly-cloudy-day'):
            iconImage = partlyCloudy;
            break;
        case('partly-cloudy-night'):
            iconImage = partlyCloudy;
            break;
        default: 
            iconImage = null;
            break;
    }

    	return (
    		<div className="weatherIcon">
    			<img className={this.setPulse(pulse)} src={iconImage}/>
    		</div>
		);
    }

}

export default weatherIcon;