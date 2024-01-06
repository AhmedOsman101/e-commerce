/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "../assets/css/form.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Form() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const user = { username, email, password };
		try {
			const response = await axios.post(
				"http://localhost:5011/User/Add",
				user
			);
			if (response.data === "ERROR: this mail exists") {
				MySwal.fire({
					icon: "error",
					title: "Failed To Create Account",
					text: "This Mail Already Exists!",
				});
			} else {
				MySwal.fire({
					title: <strong>Succeed!</strong>,
					html: <i>Your account is all set up 👌</i>,
					icon: "success",
				});
			}
			setUsername("");
			setEmail("");
			setPassword("");
		} catch (error) {
			console.error("There was an error!", error);
		}
	};

	return (
		<>
			<div className="login-box">
				<form onSubmit={handleSubmit} noValidate>
					<center>
						<h1 className="title">Sign Up</h1>
					</center>
					<div className="user-box">
						<input
							type="text"
							name="username"
							required
							placeholder=" "
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label>Username</label>
					</div>
					<div className="user-box">
						<input
							type="email"
							name="email"
							required
							placeholder=" "
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Email</label>
					</div>
					<div className="user-box">
						<input
							type="password"
							name="password"
							required
							placeholder=" "
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<label>Password</label>
					</div>
					<center>
						<button type="submit" className="submit">
							SEND
							<span></span>
						</button>
					</center>
				</form>
			</div>
		</>
	);
}
