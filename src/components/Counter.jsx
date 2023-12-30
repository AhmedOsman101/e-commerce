import React, { Component } from "react";

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}
	increment() {
		this.setState(
			(prevState) => ({
				count: prevState.count + 1,
			}),
			() => {
				console.log(this.state.count);
			}
		);
	}
	render() {
		return (
			<>
				<p>سبحان الله وبحمده، سبحان الله العظيم</p>
				<button
					className="btn btn-success mx-4 w-25"
					onClick={() => this.increment()}
				>
					{this.state.count}
				</button>
				<button
					className="btn btn-success w-25"
					onClick={() => this.setState({ count: 0 })}
				>
					reset
				</button>
			</>
		);
	}
}
