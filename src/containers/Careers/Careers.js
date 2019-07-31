import React from 'react';

import BannerImg from '../../assets/images/banner/career.jpg';

import Banner from '../../components/Banner/Banner';
import MaleImage from '../../assets/images/hiring/male.png';
import FemaleImage from '../../assets/images/hiring/female.png';
import Button from '../../components/Button/Button';
import Modal from '../../components/UI/Modal/JobDetail';

class Careers extends React.Component {
	state = {
		title: null,
		description: [],
		education: [],
		skills: [],
		location: []
	};

	componentDidMount() {
		document.title = 'Careers - Arsums';
	}

	showModal = (job) => {
		if (job === 'qa') {
			const title = 'SQA Engineer';
			const description = [
				'Ability to analyze business requirements, design and execute test cases, document results',
				'Ability to prioritize test activities based on changing priorities',
				'Ability to work independently and within a team',
				'Attention to details and meticulous analytical skills',
				'Experience with one or more test automation tools is a plus',
				'Create test cases based on functional specifications and subject matter expert business knowledge',
				'Execute manual test cases and collect test case evidence',
				'Open defects as needed during manual or automated testing',
				'Create daily status reports for test case and defect metrics',
				'Track quality assurance metrics, like defect densities and open defect counts',
				'Stay up-to-date with new testing tools and test strategies',
				'Any task assigned by the management',
				'Take ownership of the quality of the product being shipped'
			];
			const education = [
				'Education: BS or MS degree in computer science',
				'Experience: 0-1 year experience',
				'Database design and SQL Queries'
			];
			const skills = [
				'Develop end-end scenario test cases to validate business, system and operational requirements and work on its technical implementation with the product management, development and test teams',
				'Communicating with Team members to streamline the execution of test plans and processes with them',
				'Experience in writing clear, concise and comprehensive test plans and test cases',
				'Hands-on experience with both white box and black box testing',
				'Solid knowledge of SQL and scripting.',
				'Experience working in an Agile/Scrum development process',
				'Experience with performance and/or security testing is a plus',
				'Strong knowledge of software QA methodologies tools and processes',
				'Able to design, develop and execute automation scripts'
			];
			const location = [ 'Sialkot, Pakistan' ];

			this.setState({
				title: title,
				description: description,
				skills: skills,
				education: education,
				location: location
			});
		}
		if (job === 'seo') {
			const title = 'SEO/SMM Expert';
			const description = [
				'Manage and execute online link building strategy',
				'Contact and negotiate with webmasters in relevant industry',
				'In-depth analysis of potential inbound links to meet quality standards',
				'Coordinating guest-posts on related blogs',
				'Developing and implementing new link building strategies',
				'Competitor analysis - keep track and decode their link building strategies',
				'Identifying and removing any potentially harmful backlinks that could negatively affect website’s ranking',
				'Competitive link building analysis within our industry using SEO tools (Majestic SEO, OSE, Rank data, Moz, Screaming Frog) or other backlink analysis tools to devise a link building strategy',
				'Responsible to build strong online communities and image of the brands we deal with through our various social media platform',
				'Generate, edit, publish and share daily content (articles, original text, images, video or HTML) on social media platforms that builds meaningful connections with customers',
				'The resource will be responsible for developing and administering social media content in order to build an interactive relationship between consumers and the company',
				'The successful candidate will also be required to collect and review social media data to develop more effective campaigns. Candidates having prior experience in the same capacity will be highly encouraged',
				'Protect the Organization value by keeping information confidential',
				'Proven working experience in social media content writing or as a blogger',
				'Excellent consulting, writing, editing (pictures /text), presentation and communication skills • Demonstrable social networking experience and social analytics tools knowledge',
				'Knowledge of online marketing and good understanding of major marketing channels • Positive attitude, detail and customer oriented with good multitasking ability '
			];
			const education = [
				'Degree/Certification in the relevant field from an accredited institution (national or international)',
				'Experience: 0-1 year experience'
			];
			const skills = [
				'Industry experience of running SMM & PPC campaigns over multiple projects',
				'Strong analytical skills and data-driven thinking, showing a grip on Facebook Pixel & Google Analytics',
				'Good knowledge of web technologies and a ‘client-side approach’ to problem-solving',
				'Awareness of industry trends across Digital Marketing, Design and Development',
				'Must have an attractive and engaging style of blog/copywriting',
				'Demonstrable experience leading and managing SEO/SEM, marketing database, email and social media campaigns',
				'Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform and motivate',
				'Experience in optimizing landing pages and user funnels',
				'Experience with A/B and multivariate experiments',
				'Solid knowledge of website analytics tools (e.g., Google Analytics, NetInsight, Omniture, WebTrends)',
				'Strong analytical skills and data-driven thinking'
			];
			const location = [ 'Sialkot, Pakistan' ];

			this.setState({
				title: title,
				description: description,
				skills: skills,
				education: education,
				location: location
			});
		}
	};

	render() {
		return (
			<main>
				<section className="Careers ">
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '50vh'
						}}
					>
						<Banner banner={BannerImg} />
					</div>
				</section>
				<section className="container-fluid Careers-Intro">
					<div className="container">
						<br />
						<br />
						<h1 className="text-center">Work With Us</h1>
						<h2>A bit about us</h2>
						<p className="text-justify">
							ARSUM’S is a digital marketing agency that combines strategic thinking with expert knowledge
							of Software Development, SEO, PPC, Content Marketing and Social Media. We are a rapidly
							growing business with big plans, and attribute that growth to our fantastic, hard-working,
							and dedicated team. If you’re passionate about digital marketing and want to further your
							career and develop your talents by working with a range of brands and clients in a
							rapidly-growing digital agency, we want you to join our team.
						</p>
						<h2 className="text-center">We are actively recruiting for the following roles</h2>
						<div className="row ">
							<div className="col-sm-12 col-md-3 p-5 mx-auto">
								<div className="Card ">
									<h4 className="text-center">SEO/SMM Expert</h4>
									<div className="Image">
										<img src={MaleImage} className="img-fluid " alt="male " />
									</div>
									<div className="text-center">
										<Button>
											<a
												className="text-dark"
												data-toggle="modal"
												href="#jobDetailModal1"
												onClick={() => this.showModal('seo')}
											>
												View Detail
											</a>
										</Button>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-3 p-5 mx-auto">
								<div className="Card">
									<h4 className="text-center">Q/A Engineer</h4>
									<div className="Image">
										<img src={FemaleImage} className="img-fluid  " alt="female " />
									</div>
									<div className="text-center">
										<Button>
											<a
												className="text-dark"
												data-toggle="modal"
												href="#jobDetailModal1"
												onClick={() => this.showModal('qa')}
											>
												View Detail
											</a>
										</Button>
									</div>
								</div>
							</div>
						</div>
						<h2 className="text-center">
							We are always happy to hear from talented individuals and often create roles around the most
							outstanding candidates. Just email us on jobs at info@arsums.com <br />
							<br />
						</h2>
					</div>
				</section>
				<Modal
					title={this.state.title}
					description={this.state.description}
					skills={this.state.skills}
					education={this.state.education}
					location={this.state.location}
				/>
			</main>
		);
	}
}

export default Careers;
