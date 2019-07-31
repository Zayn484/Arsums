import React from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';

import Banner from '../../components/Banner/ExpertiseBanner';
import Request from '../../components/Request/Request';

import Branding from '../../assets/images/banner/branding.png';
import DigitalMarketing from '../../assets/images/banner/digital-marketing.png';
import Ecommerce from '../../assets/images/banner/ecommerce.png';
import ITConsulting from '../../assets/images/banner/it-consulting.png';
import Mobile from '../../assets/images/banner/mobile-app.png';
import SEO from '../../assets/images/banner/seo.png';
import UI from '../../assets/images/banner/ui-ux.png';
import Web from '../../assets/images/banner/web-development.png';

import { HOST_URL } from '../../settings';

class ExpertiseDetail extends React.Component {
	state = {
		detail: null,
		loading: true
	};

	componentDidMount() {
		axios.get(`${HOST_URL}/expertise/?category=${this.props.match.params.id}`).then((response) => {
			this.setState({ detail: response.data, loading: false });
		});

		document.title = 'Our Expertise - Arsums';
	}

	render() {
		let banner = null;
		let description = null;
		let detail = null;

		if (this.props.match.params.id === 'branding') {
			banner = (
				<Banner
					title="A brand that stands out from the crowd"
					banner={Branding}
					buttonText="Let’s build something great together"
				/>
			);
			description = (
				<p className="container text-center mt-5" style={{ fontSize: '1.5rem' }}>
					We are a branding agency that integrates with all aspects of your marketing and company values.
					Successful brand development unifies your mission, vision, direction, and objectives while forging
					endless audience connections. Our team focuses on carving out a unique brand strategy and a highly
					engaging visual identity.
				</p>
			);
		}
		if (this.props.match.params.id === 'ui') {
			banner = (
				<Banner
					title="Make a great first impression"
					banner={UI}
					buttonText="Let’s build something great together"
				/>
			);
			description = (
				<p className="container text-center  mt-5" style={{ fontSize: '1.5rem' }}>
					We are a web design agency that builds beautiful websites that work. We work collaboratively with
					you to make sure that your website doesn’t just look great, but actually drives revenue — helping
					you to grow and succeed in an increasingly digital world.
				</p>
			);
		}
		if (this.props.match.params.id === 'web') {
			banner = (
				<Banner title="Incredible Websites" banner={Web} buttonText="Let’s build something great together" />
			);
			description = (
				<p className="container text-center  mt-5" style={{ fontSize: '1.5rem' }}>
					We are a web development agency that develop lightning-fast, ultra-intuitive, custom websites that
					balance core business goals with innovative user experiences spanning all industries. From bold and
					insightful information architecture to rich, appealing design, we step up with a full-service team
					ready to deliver all the technical and creative essentials.
				</p>
			);
		}
		if (this.props.match.params.id === 'mobile') {
			banner = (
				<Banner
					title="Impactful Mobile Applications"
					banner={Mobile}
					buttonText="Let’s build something great together"
				/>
			);
			description = (
				<p className="container text-center  mt-5" style={{ fontSize: '1.5rem' }}>
					At The ARSUM’s, we love mobile apps! Be it Android, iOS, or hybrid, we can have the experience
					needed to bring your app ideas to the Android and iOS app stores. Whether you need help designing,
					developing, or monetizing your app, we’ve got you covered. Whether it is your first app or fifth,
					our decade-long expertise in mobile app development will help you succeed with your mobile strategy.
				</p>
			);
		}
		if (this.props.match.params.id === 'ecommerce') {
			banner = (
				<Banner
					title="Fully Integrated E-Commerce Strategy"
					banner={Ecommerce}
					buttonText="Let’s build something great together"
				/>
			);
			description = (
				<p className="container text-center  mt-5" style={{ fontSize: '1.5rem' }}>
					We know how to join together all of the dots of your digital marketing, combining creative expertise
					with strategy and analytics to make your E-Commerce operations effective. With our nuanced
					understanding of every aspect of online marketing, we can deploy the best tactics to boost your
					E-Commerce activity using your data to provide customers with the right information at the right
					time.
				</p>
			);
		}
		if (this.props.match.params.id === 'it') {
			banner = <Banner title="IT Consulting Services" banner={ITConsulting} buttonText="Talk To US" />;
			description = (
				<p className="container text-center  mt-5" style={{ fontSize: '1.5rem' }}>
					Use the expertise and deep tech background of the best minds at ARSUM’S to create a comprehensive IT
					strategy for a digital and technological transformation of your organization that goes in line with
					your business objectives. Our strategic IT consulting will help you automate and digitalize
					operations, optimize the software portfolio, and implement the latest technologies. We help
					organizations select the right talent and partner suppliers for their digital projects.
				</p>
			);
		}

		if (this.props.match.params.id === 'seo') {
			banner = (
				<Banner
					title="Search Engine Optimization"
					banner={SEO}
					buttonText="Let’s Rank Your Site on Search Engines"
				/>
			);
			description = (
				<p className="container text-center  mt-5" style={{ fontSize: '1.5rem' }}>
					We understand the common struggle of companies to rank well in search engines. We look at SEO as a
					long-term strategy, which allows us to achieve the best rankings in the most sustainable fashion.
					Trust our experienced SEO team for they are the best people to identify the lingering inefficiencies
					and provide suitable solutions. When your website is properly optimized for search engines, you can
					expect an increase in website traffic, better ROI, expanded brand awareness and targeted results to
					those who are looking for your services!
				</p>
			);
		}

		if (this.props.match.params.id === 'marketing') {
			banner = (
				<Banner
					title="Unlock the Power of Paid Media Optimization"
					banner={DigitalMarketing}
					buttonText="Make New Connections"
				/>
			);
			description = (
				<p className="container text-center  mt-5" style={{ fontSize: '1.5rem' }}>
					We use our connections to boost your conversions. We know that your paid media plan is just part of
					the bigger digital marketing picture, so we make sure it works in harmony with the rest of your
					strategy. We are digital first, but we can also help with your traditional media buys, reaching your
					customers wherever they are. It is important to have curated, active social media pages that help
					grow your business presence and brand online, letting your customers feel like they are part of
					things. We can help you manage and grow your social media profiles, working in combination with your
					SEO strategy.
				</p>
			);
		}
		if (this.props.match.params.id === 'white') {
			banner = <Banner title="White Label Services" banner={DigitalMarketing} buttonText="Let’s Discuss" />;
			description = (
				<p className="container text-center  mt-5" style={{ fontSize: '1.5rem' }}>
					Whether you’re an individual agency owner or run a small OR large size agency, our white label
					services are designed to GROW your revenue, profit margins, and SCALE your business at every turn
					without increasing overhead costs.
				</p>
			);
		}

		if (this.state.detail) {
			detail = this.state.detail.map((el) => (
				<div key={el.title} className="row mt-5 m-2">
					<div className="col-12">
						<h1 className="Title">
							{el.title}
							<div className="col-8" />
						</h1>
						<p className="col-12 col-md-8 p-0 text-justify Content">{el.content}</p>
					</div>
				</div>
			));
		}
		return (
			<main>
				<section className="Expertise-Detail ">{banner}</section>
				<section className="container-fluid Expertise-Intro Detail p-0 ">
					<div className="container">
						{description}
						<div className=" row">
							{this.state.loading && (
								<ReactLoading
									type={'bars'}
									className="Loading"
									color="#fbbc17"
									height={'20%'}
									width={'20%'}
								/>
							)}
							<div className="col-12">{detail}</div>
						</div>
					</div>
				</section>
				<Request />
			</main>
		);
	}
}

export default ExpertiseDetail;
