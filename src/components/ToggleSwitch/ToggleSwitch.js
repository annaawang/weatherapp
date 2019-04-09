import React, { Component } from 'react';
import './ToggleSwitch.css';

class ToggleSwitch extends Component {
	constructor(props) {
		super(props);
		this.state = {isOn: true};
	}

	handleToggle(e) {
		this.setState({isOn: !this.state.isOn});
	}

	render() {
		let classNames = ["toggle", (this.state.isOn) ? "toggle-fahrenheit" : "toggle-celsius"].join(" ");
		return (
			<div className={classNames}>
				<Switch
					isOn={this.state.isOn}
					handleToggle={this.handleToggle.bind(this)} />
			</div>

			);
	}
}

const Switch = function(props) {
	let classNames = ["switch", (props.isOn) ? "switch-right" : "switch-left"].join(" ");
	return (
		<div className={classNames} onClick={props.handleToggle}>
			<h1>C&deg;</h1>
			<h2>F&deg;</h2>
			<ToggleButton isOn={props.isOn} />
		</div>
	);
}

const ToggleButton = function(props) {
	let classNames = ["toggle-button", (props.isOn) ? "toggle-button-right" : "toggle-button-left"].join(" ");
	return (
		<div className={classNames}>
		</div>)
	;
}

export default ToggleSwitch;