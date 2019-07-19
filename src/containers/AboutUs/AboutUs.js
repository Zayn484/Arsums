import React from 'react';
import Pulse from 'react-reveal/Pulse';

import Logo from '../../assets/images/brand.png';
import Placeholder from '../../assets/images/placeholder.png';
import Request from '../../components/Request/Request';

class AboutUs extends React.Component {
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
		return (
			<main>
				<section className="About ">
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: 'auto'
						}}
					>
						<div className="container-fluid d-flex h-100  Cover ">
							<div className="row justify-content-center align-self-center  mx-auto">
								<div className="col-3 mt-5  ">
									<Pulse>
										<img src={Logo} className="img-fluid" alt="logo" />
									</Pulse>
									<h3 className="text-center mt-5 mb-5">Who We Are</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="container-fluid Intro ">
					<h1 className="text-center mt-5 mb-5 p-5">Creatively Elite, Methodically Unique</h1>
					<div className="row">
						<div className="col-md-6  p-0 Image">
							<img src={Placeholder} className="img-fluid h-100" alt="placeholder" />
						</div>
						<div className="col-md-6 ">
							<h2 className="text-center">Passion, Dedication, and a lot of tea.</h2>
							<div className="row justify-content-center align-self-center ">
								<div className="col-10">
									<p className=" mt-5">
										Buzz Interactive is a full-service digital marketing agency that lives and
										breathes “outside the box”. We are a team of digital marketing experts who catch
										those pure gold ideas and transform them into reality. A key reason why we are
										confident about delivering the results is that we have the best talent in every
										digital channel. From design and development to SEO services, pay-per-click,
										content, social, and beyond, we work together to ensure you see the best results
										across all campaigns. We are laser focused on ROI and like to keep things
										transparent so you know exactly where and how your money is being spent, whether
										that’s with highly targeted search engine marketing, web development or digital
										advertising.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="container-fluid Offers  ">
					<h1 className="text-center mt-5 mb-5 p-5">We Love To Do</h1>
					<div className="container row  mx-auto">
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Placeholder} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">Branding</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Placeholder} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">Web Design and Development</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Placeholder} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">Mobile App Design and Development</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Placeholder} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">BTL</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Placeholder} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">SEO</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Placeholder} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">Social Media Marketing</h5>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="container-fluid mt-5 Card-Container">
					<div className="container row p-0 mx-auto   w-100 h-100 ">
						<div className="col-sm-6 col-md-3 justify-content-center align-self-center  ">
							<h1 className="text-center text-muted ">01</h1>
							<div className="col-12 ">
								<img src={Placeholder} className="img-fluid rounded-circle" alt="placeholder" />
							</div>
							<h2 className="text-center m-2">Focus</h2>
							<p className="text-center">
								We have a 100% commitment to making all our sites the best they can possibly be, no
								matter what it takes to get there.
							</p>
						</div>
						<div className="col-sm-6 col-md-3 justify-content-center align-self-center">
							<h1 className="text-center text-muted">02</h1>
							<div className="col-12 ">
								<img src={Placeholder} className="img-fluid rounded-circle" alt="placeholder" />
							</div>
							<h2 className="text-center m-2">Passion</h2>
							<p className="text-center">
								Our desire to produce good work runs deep – that’s what lets us handle every project
								with fresh energy and enthusiasm.
							</p>
						</div>
						<div className="col-sm-6 col-md-3 justify-content-center align-self-center">
							<h1 className="text-center text-muted">03</h1>
							<div className="col-12 ">
								<img src={Placeholder} className="img-fluid rounded-circle" alt="placeholder" />
							</div>
							<h2 className="text-center m-2">Empathy</h2>
							<p className="text-center">
								While we share our knowledge and experience, we listen hard to understand your business
								and your needs.
							</p>
						</div>
						<div className="col-sm-6 col-md-3 justify-content-center align-self-center">
							<h1 className="text-center text-muted">04</h1>
							<div className="col-12 ">
								<img src={Placeholder} className="img-fluid rounded-circle" alt="placeholder" />
							</div>
							<h2 className="text-center m-2">Teamwork</h2>
							<p className="text-center">
								We are united with you in the drive to get the best from your project – think of us as
								extra members of your team with all the skills you need.
							</p>
						</div>
					</div>
				</section>
				<Request />
			</main>
		);
	}
}

export default AboutUs;
