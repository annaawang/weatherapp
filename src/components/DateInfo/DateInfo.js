import React, { Component } from 'react';

class DateInfo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dayOfWeek: null
		};
	}

	timestampToDay (props) {
		let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		let a = new Date(props*1000);
		this.state.dayOfWeek = days[a.getDay()];
		return this.state.dayOfWeek
	}
	
  	render() {
  	let time = this.props.time;
    return (
        <h1>{this.timestampToDay(time)}</h1>
    );
  }
}

export default DateInfo;