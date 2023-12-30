import React from "react";

const names = ["Ahmad", "Ali", "Othman"];
export default function Testing(props) {
	const { Name } = props;
	return (
		<>
			<ul>
				{names.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<h1>{Name}</h1>
		</>
	);
}
