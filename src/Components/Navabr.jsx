import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/nav.css";

function nav() {
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<a className="navbar-brand fw-bold" href="#">
						MetroMart
					</a>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#">Home</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">Contact</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="#">Sign Up</a>
							</li>
						</ul>
					</div>

					<form method="get">
						<input type="text" name="search" placeholder="What are you looking for ?" />
						<button type="submit"><img src="src\assets\images\Search_icon.png" alt="Search" /></button>
					</form>

				</div>
			</nav>

		</>
	);
}


export default nav;