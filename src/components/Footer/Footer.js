import React from 'react';

const footer = (props) => (
	<footer className="footer-distributed">
		<div className="footer-left">
			<h3>Arsums Tech</h3>

			<p className="footer-company-name">Arsums &copy; 2019</p>
		</div>

		<div className="footer-center">
			<div>
				<i className="fa fa-map-marker" />
				<p>
					<span>2nd Building, adjacent Aslam Medical Complex, Defence Road</span> Silakot, Pakistan
				</p>
			</div>

			<div>
				<i className="fa fa-phone" />
				<p>+92 331-4964375</p>
			</div>

			<div>
				<i className="fa fa-envelope" />
				<p>
					<a href="mailto:support@company.com">info@arsums.com</a>
				</p>
			</div>
		</div>

		<div className="footer-right">
			<p className="footer-company-about">
				<span>About the company</span>
				Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus
				vehicula sit amet.
			</p>
		</div>
	</footer>
);

export default footer;
