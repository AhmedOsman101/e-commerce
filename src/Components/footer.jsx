import "../assets/css/footer.css";
function footer() {
	return (
		<>
			<footer className="bg-black text-light pt-5">
				<div className="container-fluid px-5">
					<div className="row">

						<div className="col">
							<h4 className="fw-bold">MetroMart</h4>
							<h6 className="mt-4">subscribe</h6>
							<h6 className="mb-2 mt-3">Get 10% off your first order</h6>
							<div className="d-flex mt-3" >
							<form method="get" className="order-form ">
								<input type="text" name="search" placeholder="Enter your email" />
								<button type="submit"><img src="src\assets\images\Send-icon.png" /></button>
							</form>
							</div>
						</div>

						<div className="col">
							<h4>Support</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1"><h6>Zakir Hussein st., Nasr<br />city, cairo, Egypt</h6></li>
								<li className="py-1"><h6>MetroMart@example.com</h6></li>
								<li className="py-1"><h6>+20 123 456 7890</h6></li>

							</ul>
						</div>
						<div className="col">
							<h4>Account</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1"><h6><a href="#">My Account</a></h6></li>
								<li className="py-1"><h6><a href="#">Login / Register</a></h6></li>
								<li className="py-1"><h6><a href="#">Cart</a></h6></li>
								<li className="py-1"><h6><a href="#">Wishlist</a></h6></li>
								<li className="py-1"><h6><a href="#">Shop</a></h6></li>
							</ul>
						</div>
						<div className="col">
							<h4>Quick Link</h4>
							<ul className="list-unstyled pt-2">
								<li className="py-1"><h6><a href="#">Privacy Policy</a></h6></li>
								<li className="py-1"><h6><a href="#">Terms of Use</a></h6></li>
								<li className="py-1"><h6><a href="#">FAQ</a></h6></li>
								<li className="py-1"><h6><a href="#">Contact</a></h6></li>							</ul>
						</div>
						
					</div>
					<hr />
					<div className="d-sm-flex justify-content-center py-1 copyright">
						<p >© Copyright <span className="fw-bold">MetroMart</span> 2023. All right reserved</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default footer;
