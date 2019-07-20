import React from 'react';
import MeetingImage from '../../assets/images/work/meeting.png';
import DesignImage from '../../assets/images/work/design.png';
import ValidationImage from '../../assets/images/work/validation.png';
import CodingImage from '../../assets/images/work/coding.png';
import LaunchImage from '../../assets/images/work/launch.png';
import MaintainImage from '../../assets/images/work/maintain.png';

const workProcess = (props) => (
	<section className="container-fluid Work-Process">
		<div className="container  ">
			<div className="Heading">
				<h1 className="text-center ">How We Do It!</h1>
			</div>

			<div className="row no-gutters">
				<div className="col-sm-10 col-md-4 p-1  ">
					<div className="row">
						<div className="col-2">
							<h1 className="text-muted">1</h1>
						</div>
						<div className="col-4 p-0 ">
							<img src={MeetingImage} className="img-fluid w-100 " alt="meeting" />
						</div>
					</div>
					<h4>Meeting & Listening</h4>
					<p>
						First, we will listen to YOU, your requirements and needs. The core of every new project is
						great communication. While we’re sharing our expertise, we dig deep into your goals and
						aspirations to make sure we can turn them into reality.
					</p>
				</div>
				<div className="col-sm-10 col-md-4 p-1  ">
					<div className="row">
						<div className="col-2">
							<h1 className="text-muted">2</h1>
						</div>
						<div className="col-4 p-0 ">
							<img src={DesignImage} className="img-fluid  w-100" alt="design" />
						</div>
					</div>
					<h4>Design</h4>
					<p>
						We make look, feel and function combine in a bespoke solution designed to communicate
						effectively and work perfectly. Designing team then makes wireframes, UI/UX, prototypes, design
						book, designs, logos, banners and all visual material. We master the art of designing.
					</p>
				</div>
				<div className="col-sm-10 col-md-4 p-1  ">
					<div className="row">
						<div className="col-2">
							<h1 className="text-muted">3</h1>
						</div>
						<div className="col-4 p-0  ">
							<img src={ValidationImage} className="img-fluid  w-100" alt="validation" />
						</div>
					</div>
					<h4>Validation</h4>
					<p>
						The next phase is to get your confirmation. If everything is cool and according to your
						requirement, you give an ok for the visual identity, the concept, the styles and the colors.
					</p>
				</div>
				<div className="col-sm-10 col-md-4 p-1  ">
					<div className="row">
						<div className="col-2">
							<h1 className="text-muted">4</h1>
						</div>
						<div className="col-4 p-0  ">
							<img src={CodingImage} className="img-fluid  w-100" alt="coding" />
						</div>
					</div>
					<h4>Coding</h4>
					<p>
						And here we start the programming process in a SCRUM environment with timely updates on the
						progress from our side. Working hand-in-hand with the design team, we use the best and latest
						web thinking to make sure your site is a joy to use on laptop, desktop, mobile or tablet.
					</p>
				</div>
				<div className="col-sm-10 col-md-4 p-1  ">
					<div className="row">
						<div className="col-2">
							<h1 className="text-muted">5</h1>
						</div>
						<div className="col-4 p-0 ">
							<img src={LaunchImage} className="img-fluid  w-100" alt="launch" />
						</div>
					</div>
					<h4>Launch</h4>
					<p>
						We'll take care of the entire technical launch, and prepare the environment so you can enjoy
						starting your site easily. Once everything is working perfectly we’ll be with you at launch.
						We'll take care of the entire technical launch, and prepare the environment so you can enjoy
						starting your site easily. Our passion and dedication keeps us on your team long after with
						excellent aftercare.
					</p>
				</div>
				<div className="col-sm-10 col-md-4 p-1  ">
					<div className="row">
						<div className="col-2">
							<h1 className="text-muted">6</h1>
						</div>
						<div className="col-4 p-0 ">
							<img src={MaintainImage} className="img-fluid w-100" alt="maintain" />
						</div>
					</div>
					<h4>Maintenance</h4>
					<p>
						After a simple process of cooperation, 99% of our customers entrust us with the technical
						maintenance of their website. The design updates are made as needed.
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default workProcess;
