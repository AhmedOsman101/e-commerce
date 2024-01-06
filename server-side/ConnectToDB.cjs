/* eslint-disable no-undef */
// Import the required modules
const express = require("express");
const sql = require("mysql2");
// const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5011; // the port on which the server will start

const App = express(); // Create a new Express application
App.use(express.json()); // Use express.json() middleware for parsing JSON data of incoming requests
App.use(cors());
const connection = sql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "test",
});

// Show all products
App.get("/", (req, res) => {
	const query = "SELECT * FROM `products`";
	connection.execute(query, (err, data) => {
		if (err) {
			res.send(`ERROR: ${err}`);
		} else {
			res.json(data);
		}
	});
});

// select specific user to show
App.get("/User/:id", (req, res) => {
	const userID = req.params.id;
	const query = "SELECT * FROM `products` WHERE id = ?";
	connection.execute(query, [userID], (err, data) => {
		if (err) {
			res.send(`ERROR: ${err}`);
		} else {
			res.send(data);
		}
	});
});

// Handle POST requests to add products
App.post("/User/Add", (req, res) => {
	const { username, email, password } = req.body;
	const values = [username, email, password];
	let query = "SELECT email FROM `products` WHERE `email` = ?";
	connection.execute(query, [email], (err, data) => {
		if (err) {
			res.send(`ERROR: ${err}`);
		} else if (0 < data.length) {
			res.send("ERROR: this mail exists");
		} else {
			query =
				"INSERT INTO `products`(`username`, `email`, `password`) VALUES (?, ?, ?)";
			connection.execute(query, values, (err) => {
				if (err) {
					res.send(`ERROR: ${err}`);
				} else {
					connection.execute(
						"SELECT * FROM `products`",
						(err, data) => {
							if (err) {
								res.send(`ERROR: ${err}`);
							} else {
								res.send(data);
							}
						}
					);
				}
			});
		}
	});
});

// Handle DELETE requests to remove products
App.delete("/User/Delete/:id", (req, res) => {
	const userID = req.params.id;
	const query = "DELETE FROM `products` WHERE id = ?";
	connection.execute(query, [userID], (err, data) => {
		if (err) {
			res.send(`ERROR: ${err}`);
		} else if (data.affectedRows === 0) {
			res.send("ERROR: USER WAS NOT FOUND !!!");
		} else {
			res.send("USER DELETED SUCCESSFULLY");
		}
	});
});

// Handle PUT requests to update products
App.delete("/User/Update/:id", (req, res) => {
	const userID = req.params.id;
	const query = "DELETE FROM `products` WHERE id = ?";
	connection.execute(query, [userID], (err, data) => {
		if (err) {
			res.send(`ERROR: ${err}`);
		} else if (data.affectedRows === 0) {
			res.send("ERROR: USER WAS NOT FOUND !!!");
		} else {
			res.send("USER DELETED SUCCESSFULLY");
		}
	});
});

// handle any other requests
App.use((req, res) => {
	res.end("ERROR-404 Page Was Not Found"); // Send back an error message as a response
});

// Start the server and have it listen on the specified port
App.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
