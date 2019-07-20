import React from 'react';

import Sparky from '../../assets/images/portfolio/sparky.jpg';
import Atom from '../../assets/images/portfolio/atom.jpg';
import Liefer from '../../assets/images/portfolio/liefer.jpg';
import Sooper from '../../assets/images/portfolio/sooper.jpg';
import Speedsy from '../../assets/images/portfolio/speedsy.jpg';

import Cover from '../../components/Cover/Cover';
import Modal from '../../components/UI/Modal/Modal';

class Portfolio extends React.Component {
	state = {
		title: '',
		content: '',
		image: ''
	};

	componentDidMount() {
		document.title = 'Work Portfolio - Arsums';
	}

	updateState = (title, content, image) => {
		this.setState({
			title: title,
			content: content,
			image: image
		});
	};

	showModal = (item) => {
		if (item === 'sparky') {
			const title = 'Sparky';
			const content =
				'A per to peer on demand delivery app. Things get delivered to you by your friends OR by people in your university, college, office etc. In short you can say that it’s a social media of Delivering Things. Their app have been developed by us and we are working on the marketing plan to expand them into different cities.';
			const image = Sparky;
			this.updateState(title, content, image);
		}
		if (item === 'atom') {
			const title = 'Atom';
			const content =
				'Atom was created to give people the best and most luxurious clothes they can ever have. Their clothes are made with utmost art and perfection. We are running a unique story based advertising campaign for ATOM, which is pretty successful so far. We are handling their e-commerce stores, their social media pages, designs and everything they need.';
			const image = Atom;
			this.updateState(title, content, image);
		}
		if (item === 'liefer') {
			const title = 'Liefer24.de';
			const content =
				'Liefer24 GmbH is a young start-up company based in Germany that makes transport and courier services simpler and more environmentally friendly for shops, businesses and private use. Many years of experience of the players from the logistics and transport sectors make Liefer24 your green but at the same time fast and reliable logistics partner from Berlin into the world. Whether your shipment is small or large or also needs special handling for security reasons - Liefer24 brings it as an Instant Delivery, Same Day Delivery or as a classic transport to your desired destination. Liefer24 transports your shipments safely to your customers regionally, nationally and internationally. It always under the premise shipments environmentally friendly treatment, on foot, by bicycle, e-bike, e-bike, e-taxi or as an e-van - not only in the shipment, but also in the pickup from the place of shipment. We helped in developing their website as well as an app. And managing their day to day operations through our softwares.';
			const image = Liefer;
			this.updateState(title, content, image);
		}
		if (item === 'sooperchef') {
			const title = 'SooperChef';
			const content =
				'SooperChef is Pakistan Largest Digital Food Network. They are revamping the traditional cooking style and helping people in their everyday life by sharing the content what they love. During a short period of time, SooperChef reached to a massive audience and created over 3Million fan base on digital platforms. They Quick Recipe format is loved by the users. We developed their app as well as helping them with digital marketing and handling their online Presence.';
			const image = Sooper;
			this.updateState(title, content, image);
		}
		if (item === 'speedsy') {
			const title = 'Speedsyracewear';
			const content =
				'Speedsyracewear is an American Car Racing Brand. Who is striving to provide quality Racing Suits to Racers at economical price. From their website to Social Media Pages to Graphics , we are doing it all since day one. We develop their complete marketing strategy and help them in launching their product. With our Marketing Strategy, SEO , growth hacking , e-commerce site , their business in booming and they are one of the most satisfied client we have since a long time.';
			const image = Speedsy;
			this.updateState(title, content, image);
		}
	};

	render() {
		return (
			<main>
				<section className="Portfolio ">
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: 'auto'
						}}
					>
						<Cover />
					</div>
				</section>

				<section className="container-fluid Portfolio-Section p-0 ">
					<section className="bg-light page-section" id="portfolio">
						<br />

						<div className="container   ">
							<div className="row">
								<div className="col-lg-12 text-center">
									<h3 className="section-subheading m-5">
										Some of our success stories we are proud of
									</h3>
								</div>
							</div>
							<div className="row">
								<div
									className="col-md-4  col-sm-6 portfolio-item mx-auto "
									onClick={() => this.showModal('sparky')}
								>
									<a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
										<div className="portfolio-hover">
											<div className="portfolio-hover-content">
												<i className="fas fa-plus fa-3x" />
											</div>
										</div>
										<img className="img-fluid" src={Sparky} alt="sparky" />
									</a>
									<div className="portfolio-caption bg-transparent">
										<h4>Sparky</h4>
									</div>
								</div>
								<div
									className="col-md-4  col-sm-6 portfolio-item mx-auto mt-5"
									onClick={() => this.showModal('atom')}
								>
									<a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
										<div className="portfolio-hover">
											<div className="portfolio-hover-content">
												<i className="fas fa-plus fa-3x" />
											</div>
										</div>
										<img className="img-fluid" src={Atom} alt="atom" />
									</a>
									<div className="portfolio-caption bg-transparent">
										<h4>Atom</h4>
									</div>
								</div>
								<div
									className="col-md-4 col-sm-6 portfolio-item mx-auto mt-3"
									onClick={() => this.showModal('liefer')}
								>
									<a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
										<div className="portfolio-hover">
											<div className="portfolio-hover-content">
												<i className="fas fa-plus fa-3x" />
											</div>
										</div>
										<img className="img-fluid" src={Liefer} alt="liefer" />
									</a>
									<div className="portfolio-caption bg-transparent">
										<h4>Liefer</h4>
									</div>
								</div>

								<div className="col-md-4 col-sm-6 portfolio-item mx-auto mt-3 ">
									<a
										className="portfolio-link"
										data-toggle="modal"
										href="#portfolioModal1"
										onClick={() => this.showModal('sooperchef')}
									>
										<div className="portfolio-hover">
											<div className="portfolio-hover-content">
												<i className="fas fa-plus fa-3x" />
											</div>
										</div>
										<img className="img-fluid" src={Sooper} alt="sooper" />
									</a>
									<div className="portfolio-caption bg-transparent">
										<h4>SooperChef</h4>
									</div>
								</div>
								<div className="col-md-4 col-sm-6 portfolio-item mx-auto mt-3">
									<a
										className="portfolio-link"
										data-toggle="modal"
										href="#portfolioModal1"
										onClick={() => this.showModal('speedsy')}
									>
										<div className="portfolio-hover">
											<div className="portfolio-hover-content  ">
												<i className="fas fa-plus fa-3x" />
											</div>
										</div>
										<img className="img-fluid " src={Speedsy} alt="speedsy" />
									</a>
									<div className="portfolio-caption  bg-transparent">
										<h4>Speedsy</h4>
									</div>
								</div>
							</div>
						</div>
						<br />
					</section>
				</section>

				<Modal title={this.state.title} content={this.state.content} image={this.state.image} />
			</main>
		);
	}
}

export default Portfolio;
