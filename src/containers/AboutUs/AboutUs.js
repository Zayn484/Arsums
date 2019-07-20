import React from 'react';
import Pulse from 'react-reveal/Pulse';

import Logo from '../../assets/images/brand.png';
import Passion from '../../assets/images/about/passion.png';
import Branding from '../../assets/images/about/branding.jpg';
import BTL from '../../assets/images/about/btl.jpg';
import Marketing from '../../assets/images/about/marketing.jpg';
import SEO from '../../assets/images/about/seo.jpg';
import Mobile from '../../assets/images/about/mobile.png';
import Website from '../../assets/images/about/website.jpg';

import EmpathyCard from '../../assets/images/about/empathy-card.jpg';
import FocusCard from '../../assets/images/about/focus-card.jpg';
import PassionCard from '../../assets/images/about/passion-card.jpg';
import TeamworkCard from '../../assets/images/about/teamwork-card.jpg';
import IMarketing from '../../assets/images/about/imarketing-card.jpg';

import Request from '../../components/Request/Request';

class AboutUs extends React.Component {
	componentDidMount() {
		document.title = 'About Us - Arsums';
	}

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
									<h1 className="text-center mt-5 mb-5">Who We Are</h1>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="container-fluid Intro ">
					<br />

					<h1 className="text-center mt-5 mb-5 p-5">Dynamic, Contrarian, Customer Focused</h1>
					<div className="row">
						<div className="col-md-7  p-0 Image">
							<img src={Passion} className="img-fluid h-100" alt="placeholder" />
						</div>
						<div className="col-md-5 ">
							<div className="row justify-content-center align-self-center ">
								<div className="col-10">
									<h4 className="text-center">
										We eat apps and webs for breakfast to get motivation and energy
									</h4>
									<p className="text-justify">
										Everybody’s so busy looking for answer these days, we often forget to ask the
										right question. That’s why we started ARSUM’S. A native digital agency that
										helps brands be more relevant in a more connected world. If you want to know
										what we do, perhaps you should really ask what we do differently. Our success is
										not only due to the quality of our work; it's down to attitude, our approach and
										the way we treat our clients. We are fully committed to elevating our clients to
										new heights. In a world that moves at the speed of light, in which everything is
										disposable, the only things that last are good ideas. Good ideas that combine
										the latest trends, innovation, strategy and creativity and create brand equity.
										We eat, play, think and create together. In the noisy coffee breaks, ideas float
										around through outbursts of laughter and jokes. A key reason why we are
										confident about delivering the results is that we have the best talent in every
										digital channel. From design and development to SEO services, pay-per-click,
										content, social, and beyond, we work together to ensure you see the best results
										across all campaigns. We don’t think outside the box because we think like there
										is no box.
									</p>
								</div>
							</div>
							<h2 className="text-center mt-5">Actually we make the rules and they sell well.</h2>
						</div>
					</div>
				</section>
				<section className="container-fluid Offers  ">
					<h1 className="text-center mt-5 mb-5 p-5">We Love To Do</h1>
					<div className="container row  mx-auto">
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Branding} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">Branding</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Website} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">Web Design and Development</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Mobile} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">Mobile App Design and Development</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={BTL} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">BTL Marketing</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={IMarketing} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">Integrated Campaigns</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={SEO} alt="Card cap" />
								<div className="card-body">
									<h5 className="card-title">SEO</h5>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card m-3" style={{ width: '18rem' }}>
								<img className="card-img-top" src={Marketing} alt="Card cap" />
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
								<img src={FocusCard} className="img-fluid rounded-circle" alt="placeholder" />
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
								<img src={PassionCard} className="img-fluid rounded-circle" alt="placeholder" />
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
								<img src={EmpathyCard} className="img-fluid rounded-circle" alt="placeholder" />
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
								<img src={TeamworkCard} className="img-fluid rounded-circle" alt="placeholder" />
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
