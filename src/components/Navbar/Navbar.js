import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';

import Logo from '../../assets/images/logo.png';

const navbar = (props) => (
	<nav
		className={
			!props.scrolling ? (
				'navbar navbar-expand-lg  p-2 Navbar col-12'
			) : (
				'navbar navbar-expand-lg  p-2  Navbar-Scroll col-12'
			)
		}
	>
		<Fade left>
			<div className={!props.scrolling ? 'col-4 col-md-2 col-2 Logo  ' : 'col-4 col-md-2 col-2 Logo-Scroll'}>
				<Link to="/">
					<img src={Logo} className="img-fluid " style={{ height: '5rem' }} alt="logo" />
				</Link>
			</div>
		</Fade>
		<button
			className="navbar-toggler "
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon " />
			<i className="fas fa-bars" />
		</button>
		<div className="collapse navbar-collapse justify-content-end Nav-Container" id="navbarNav">
			<ul className="navbar-nav ">
				<li className="nav-item">
					<Link to="/about-us" className="nav-link">
						About Us
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/expertise" className="nav-link">
						Expertise
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/portfolio" className="nav-link">
						Portfolio
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/careers" className="nav-link">
						Careers
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/team" className="nav-link">
						Team
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/contact" className="nav-link">
						Contact Us
					</Link>
				</li>

				<li className="nav-item">
					<Link
						to={props.history.location}
						style={{ border: '1px solid #fbbc17' }}
						className="nav-link"
						onClick={props.showModal}
					>
						<Icon type="phone" />&nbsp;Schedule a Call
					</Link>
				</li>
			</ul>
		</div>
	</nav>
);

export default withRouter(navbar);
