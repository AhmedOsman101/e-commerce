import send from "../assets/images/icons/send.svg";
function Footer() {
	return (
		<>
			<footer>
				<div className="column">
					<div className="d-flex flex-column gap-3">
						<h4>MetroMart</h4>
						<h6 className="fw-medium">Subscribe</h6>
						<p>Get 10% off your first order</p>
					</div>
					<form method="get" className="d-flex">
						<div className="col">
							<div className="mb-3">
								<input
									type="email"
									className="form-control"
									name="FooterEmail"
									id="FooterEmail"
									placeholder="Enter Your Email"
								/>
								<button type="submit" className="btn send">
									<img
										src={send}
										className="img-fluid"
										alt="send"
									/>
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="column">
					<h5 className="mb-4">Support</h5>
					<div className="d-flex flex-column gap-1">
						<p>Zakir Hussein st., Nasr City, Cairo, Egypt</p>
						<p>
							<a href="mailto:MetroMart@example.com">
								MetroMart@example.com
							</a>
						</p>
						<p>+20 123 456 7890</p>
					</div>
				</div>
				<div className="column">
					<h5>account</h5>
				</div>
				<div className="column"></div>
				<div className="column"></div>
			</footer>
		</>
	);
}

export default Footer;
