import React from 'react';
import { Link } from 'react-router-dom';

import Bounce from 'react-reveal/Bounce';
import Particles from '../../components/Particles/Particles';
import ParticleField from '../../components/Particles/ParticleField';
import WaterWave from '../../components/Waterwave/Waterwave';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import Services from '../../components/Services/Services';
import Request from '../../components/Request/Request';
import ContactUs from '../../components/ContactUs/ContactUs';
import Button from '../../components/Button/Button';

import Banner from '../../assets/images/banner/home.jpg';

class Home extends React.Component {
	state = {
		scrolling: false,
		toolbarOpen: false,
		effect: 'web',
		loading: false,
		visible: false
	};

	componentDidMount() {
		document.title = 'Arsums - Digital Marketing Agency';
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

	click(e) {}

	changeEffect = (effect) => {
		this.setState({ effect: effect });
	};

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false, visible: false });
		}, 1000);
	};

	handleCancel = () => {
		this.setState({ visible: false });
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

					{!this.state.scrolling && (
						<div className="container-fluid  h-100 border">
							<div className="row align-items-center h-100">
								<div className="col-12 mx-auto ">
									<Bounce>
										<h1 className="text-center " style={{ fontSize: '60px', color: '#fbbc17' }}>
											<span className="text-dark">CREATING RELEVANCE IN A </span>
											<br /> CONNECTED WORLD
										</h1>
									</Bounce>
								</div>
							</div>
						</div>
					)}
				</section>
				<section className="container-fluid no-gutters p-0 Cover-Img">
					<div className="row no-gutters align-items-center h-100">
						<div className="col-12 col-md-6 ">
							<img
								src={Banner}
								className="img-fluid "
								style={{ width: '100%', height: ' 100%' }}
								alt="banner"
							/>
						</div>
						<div className="col-12 col-md-6 justify-content-center align-items-middle ">
							<h1 className="text-center">Who We Are</h1>
							<p className="text-justify m-5 p-md-5 " style={{ fontSize: '1.4rem' }}>
								ARSUMS is a top software development company + creative agency obsessed with shifting
								industries and elevating brands just like yours. Our clients get websites that sell,
								attract visitors and obtain market as well as customers' respect. Our purpose is to
								positively impact humans through creativity, technology, and stunning brand experiences
							</p>
							<div className="text-center mb-5">
								<Button>
									<Link to="about-us" className="text-dark">
										Explore More
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
				<WorkProcess />
				<Services />
				<Request />

				<ContactUs />
			</main>
		);
	}
}

export default Home;
