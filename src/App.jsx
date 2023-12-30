import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
