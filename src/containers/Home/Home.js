import React from 'react';

import Bounce from 'react-reveal/Bounce';

import Slogan from '../../assets/slogan.png';

import Particles from '../../components/Particles/Particles';
import ParticleField from '../../components/Particles/ParticleField';
import WaterWave from '../../components/Waterwave/Waterwave';

import WorkProcess from '../../components/WorkProcess/WorkProcess';
import Services from '../../components/Services/Services';
import Request from '../../components/Request/Request';
import Expertise from '../../components/Expertise/Expertise';
import Hiring from '../../components/Hiring/Hiring';
import ContactUs from '../../components/ContactUs/ContactUs';

class Home extends React.Component {
	state = {
		scrolling: false,
		toolbarOpen: false,
		effect: 'web',
		loading: false,
		visible: false
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

					{/* <Navbar scrolling={this.state.scrolling} showModal={this.showModal} /> */}

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
				<ContactUs />
			</main>
		);
	}
}

export default Home;
