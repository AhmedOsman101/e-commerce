import React from "react";

export default class Testing extends React.Component {
	render() {
		return (
			<>
				<h1>{this.props.Name}</h1>
				{this.props.children}
			</>
		);
	}
}
