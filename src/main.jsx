import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Navabr";
import Footer from "./components/Footer";
import Login from "./Components/login";
import "./index.css";

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
