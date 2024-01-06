/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect } from "react";
const axios = require("axios");

export default function ViewData() {
	useEffect(() => {
		axios
			.get("http://localhost/php/revision/index.php")
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
