import React from 'react';
import MaleImage from '../../assets/images/hiring/male.png';
import FemaleImage from '../../assets/images/hiring/female.png';
import Button from '../Button/Button';

const hiring = (props) => (
	<section className="container-fluid Hiring">
		<div className="container">
			<h1 className="text-center">We Are Hiring, Join Us</h1>
			<p className="text-center">
				We’re looking for team players that share our passion for outstanding websites and powerful
				relationships with great agencies and startups.
			</p>
			<div className="row ">
				<div className="col-sm-12 col-md-3 p-5 mx-auto">
					<div className="Card ">
						<h4 className="text-center">SEO Expert</h4>
						<div className="Image">
							<img src={MaleImage} className="img-fluid " alt="male " />
						</div>
						<div className="text-center">
							<Button>Learn More</Button>
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
							<Button>Learn More</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default hiring;
