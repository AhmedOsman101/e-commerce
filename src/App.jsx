/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import React from "react";
import TestingClass from "./components/TestingClass";
import TestingFunction from "./components/TestingFunction";
import Counter from "./components/Counter";

export default class App extends React.Component {
	render() {
		return (
			<>
				{/* <TestingFunction Name="Ahmad" />
				<TestingFunction Name="Ali" />
				<TestingClass Name="Othman" /> */}
				<div>Hello update</div>
				<div>Hyman</div>
				<Counter />
				<TestingFunction Name="ahmad"/>
			</>
		);
	}
}

{
	let arr = [1, 2, 3];
	arr.filter((item) => {
		return item % 2 === 0
	})
}
