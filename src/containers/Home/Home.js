import React from 'react';

import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Brand from '../../assets/images/brand.png';
import Logo from '../../assets/images/logo.png';
import Slogan from '../../assets/slogan.png';
import Toolbar from '../../components/Toolbar/Toolbar';
import Particles from '../../components/Particles/Particles';
import ParticleField from '../../components/Particles/ParticleField';
import WaterWave from '../../components/Waterwave/Waterwave';
import Orbit from '../../components/Orbit/Orbit';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import Services from '../../components/Services/Services';
import Request from '../../components/Request/Request';
import Expertise from '../../components/Expertise/Expertise';
import Hiring from '../../components/Hiring/Hiring';

class Home extends React.Component {
	state = {
		scrolling: false,
		toolbarOpen: false,
		effect: 'web'
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		if (window.scrollY === 0 && this.state.scrolling === true) {
			this.setState({ scrolling: false });
		} else if (window.scrollY !== 0 && this.state.scrolling !== true) {
			this.setState({ scrolling: true });
		}
	};

	toggleToolbar = () => {
		this.setState({ toolbarOpen: !this.state.toolbarOpen });
	};

	click(e) {
		console.log('_onMouseMove');
	}

	changeEffect = (effect) => {
		this.setState({ effect: effect });
	};

	render() {
		let effect = null;

		if (this.state.effect === 'snow') {
			effect = <ParticleField snow />;
		}

		if (this.state.effect === 'web') {
			effect = <Particles web />;
		}
		if (this.state.effect === 'bubbles') {
			effect = <Particles bubbles />;
		}
		if (this.state.effect === 'triangles') {
			effect = <ParticleField triangles />;
		}
		if (this.state.effect === 'waterwave') {
			return (
				<WaterWave>
					<div style={{ width: '100%', height: '100vh' }} />
				</WaterWave>
			);
		}
		return (
			<main>
				<section className="Cover ">
					{effect}
					<nav
						className={
							!this.state.scrolling ? (
								'navbar navbar-expand-lg  p-2 Navbar'
							) : (
								'navbar navbar-expand-lg  p-2  Navbar-Scroll'
							)
						}
					>
						<Fade left>
							<div className="col-sm-2  col-md-1 col-1 Logo">
								<img src={Brand} className="img-fluid " alt="logo" />
							</div>
							<div
								className={
									!this.state.scrolling ? (
										'col-sm-4 col-md-2 col-2 Logo'
									) : (
										'col-sm-4 col-md-2 col-2 Logo-Scroll'
									)
								}
							>
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
									<a className="nav-link" href="#">
										About Us
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Expertise
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Our Team
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Pricing
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Careers
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Contact Us
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Schedule a Call
									</a>
								</li>
							</ul>
						</div>
					</nav>
					{!this.state.scrolling && (
						<div className="container d-flex h-100">
							<Bounce>
								<div className="justify-content-center align-self-center">
									<img src={Slogan} className="img-fluid " alt="logo" />
								</div>
							</Bounce>
						</div>
					)}
				</section>
				<WorkProcess />
				<Services />
				<Request />
				<Expertise />
				<Hiring />
			</main>
		);
	}
}

export default Home;
