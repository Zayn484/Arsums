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
						First, we will have a meeting and listen to your wishes and needs. What you want to get from us
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
						We master Photoshop & Sketch. Will prepare the wireframes, design book, mockups, logos, banners
						and all the visual materials
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
						Next phase is to get your validation. When all is cool, you will approve the visual identity,
						concept, styles, colors
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
						And here we start the development process, in a SCRUM environment with frequent updates on the
						progress from our side
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
						We will take care of the whole technical launch, prepare the environment so that you enjoy the
						launch as easy as a Facebook like
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
					<h4>Maintain</h4>
					<p>
						After this beautiful journey 93% of all our clients give us their websites for the tech
						maintenance and design updates whenever they need
					</p>
				</div>
			</div>
		</div>
	</section>
);

export default workProcess;
