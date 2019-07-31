import React from 'react';

const footer = (props) => (
	<footer className="container-fluid footer-distributed">
		<div className="footer-left mt-3">
			<h3>Arsums Tech</h3>

			<h5 className="text-white mt-4 mb-5" style={{ textTransform: 'capitalize' }}>
				Wonderful <span style={{ color: '#fbbc17', fontSize: '1.8rem' }}>digital things</span> <br /> and a
				pinch of <span style={{ color: '#fbbc17', fontSize: '1.8rem' }}>rock n' roll</span>
			</h5>
			<p className="footer-company-name">Arsums &copy; 2019</p>
		</div>

		<div className="footer-center ml-auto" />

		<div className="footer-right text-white">
			<div>
				<i className="fa fa-map-marker" />
				<p>
					<span>Adjacent Aslam Medical Complex, Defence Road</span> Sialkot, Pakistan
				</p>
			</div>

			<div>
				<i className="fa fa-phone" />
				<p>+92 331-4964375</p>
			</div>

			<div>
				<i className="fa fa-envelope" />
				<p>info@arsums.com</p>
			</div>
		</div>
	</footer>
);

export default footer;
