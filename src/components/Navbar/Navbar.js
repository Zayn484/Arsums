import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Brand from '../../assets/images/brand.png';
import Logo from '../../assets/images/logo.png';

const navbar = (props) => (
	<nav
		className={
			!props.scrolling ? 'navbar navbar-expand-lg  p-2 Navbar' : 'navbar navbar-expand-lg  p-2  Navbar-Scroll'
		}
	>
		<Fade left>
			<div className="col-sm-2  col-md-1 col-1 Logo">
				<Link to="/">
					<img src={Brand} className="img-fluid " alt="logo" />
				</Link>
			</div>

			<div className={!props.scrolling ? 'col-sm-4 col-md-2 col-2 Logo' : 'col-sm-4 col-md-2 col-2 Logo-Scroll'}>
				<img src={Logo} className="img-fluid " alt="logo" />
			</div>
		</Fade>
		<button
			className="navbar-toggler text-danger"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon text-danger" />
			Menu
		</button>
		<div className="collapse navbar-collapse justify-content-end Nav-Container" id="navbarNav">
			<ul className="navbar-nav ">
				<li className="nav-item">
					<Link to="/about-us" className="nav-link">
						About Us
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about-us" className="nav-link">
						Expertise
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about-us" className="nav-link">
						Our Team
					</Link>
				</li>

				<li className="nav-item">
					<Link to="/about-us" className="nav-link">
						Careers
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about-us" className="nav-link">
						Contact Us
					</Link>
				</li>
				<li className="nav-item">
					<Link to={props.location} className="nav-link" onClick={props.showModal}>
						Schedule a Call
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default navbar;
