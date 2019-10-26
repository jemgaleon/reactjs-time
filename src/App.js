import React, { Component } from 'react';
import { Time } from './Time.js';
import './App.css';

/// App
export default class App extends Component {
	constructor(props) {
		super(props);

		console.log("[App] Constructor"); 
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.tick();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		console.log("[App] Render");

		return (
			<div>
				<Time date={this.state.date} />
			</div>
		);
	}
}