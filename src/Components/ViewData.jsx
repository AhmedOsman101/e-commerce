/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect } from "react";
import axios from "axios";
export default function ViewData() {
	useEffect(() => {
		axios
			.get("https://tryingtodeploy-rton.onrender.com/data")
			.then(function (response) {
				// handle success
				console.log(response.data);
			})
			.catch(function (error) {
				// handle error
				console.error(error);
			});
	}, []);

	return (
		<>
			<button type="button" className="btn btn-success">
				click me
			</button>
		</>
	);
}
