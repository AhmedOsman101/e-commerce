import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/nav.css";
import { Link } from "react-router-dom";
function nav() {
	return (
		<>	
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<Link className="navbar-brand fw-bold" to={"/"}>MetroMart</Link>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
							<li className="nav-item">
								<Link className="nav-link text-black" to={"/"}>Home</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to={""}>Contact</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to={""}>About</Link>
							</li>
							
							<li className="nav-item">
								<Link className="nav-link" to={""}>Sign Up</Link>
							</li>
						</ul>

						<form className="d-flex">
							<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form>

					</div>
				</div>
			</nav>

		</>
	);
}


export default nav;