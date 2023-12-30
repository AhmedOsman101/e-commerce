/* libraries and modules imports */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* components imports */
import App from "./App";
import Nav from "./Components/Navbar";
import Footer from "./components/Footer";
import Login from "./Components/login";
/* css files imports */
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./assets/css/nav.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />

			<Routes>
				<Route path="/e-commerce/" element={<App />} />
				<Route path="/e-commerce/login" element={<Login />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
