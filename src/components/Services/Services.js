import React from 'react';

import Branding from '../../assets/images/sliders/branding.jpg';
import Website from '../../assets/images/sliders/website.jpg';
import App from '../../assets/images/sliders/app.jpg';
import Ecommerce from '../../assets/images/sliders/ecommerce.jpg';
import Marketing from '../../assets/images/sliders/marketing.jpg';

class Services extends React.Component {
	state = {
		image: Branding
	};

	changeImage = (image) => {
		setTimeout(() => {
			this.setState({ image: image });
		}, 200);
	};

	render() {
		return (
			<section className="container-fluid Services p-0 ">
				<div className="row">
					<div className="col-12">
						{/* <BackgroundImage src={this.state.image} className="img-fluid Image">
							<div className="Headings ">
								<h1 onMouseOver={() => this.changeImage(PlaceHolder)}>Brading & Identity</h1>
								<h1 onMouseOver={() => this.changeImage(Image2)}>Websites & Digital Platforms</h1>
								<h1>eCommerce Experiences</h1>
								<h1>Performance Marketing</h1>
							</div>
						</BackgroundImage> */}

						<img
							src={this.state.image}
							style={{ backgroundImage: `url(${this.state.image})` }}
							className="img-fluid Image"
							alt="cover"
						/>
						<div className="Headings ">
							<h4 className="text-muted">What We Do</h4>
							<h1 onMouseOver={() => this.changeImage(Branding)}>Branding and Identity</h1>
							<h1 onMouseOver={() => this.changeImage(Website)}>Websites and Digital Platform</h1>
							<h1 onMouseOver={() => this.changeImage(App)}>Mobile App Development</h1>
							<h1 onMouseOver={() => this.changeImage(Ecommerce)}>Ecommerce Experience</h1>
							<h1 onMouseOver={() => this.changeImage(Marketing)}>Performance Marketing</h1>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Services;
