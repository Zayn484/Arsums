import React from 'react';

import PlaceHolder from '../../assets/1.jpg';
import Image2 from '../../assets/3.jpg';

class Services extends React.Component {
	state = {
		image: Image2
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
							<h1 onMouseOver={() => this.changeImage(PlaceHolder)}>Brading & Identity</h1>
							<h1 onMouseOver={() => this.changeImage(Image2)}>Websites & Digital Platforms</h1>
							<h1>eCommerce Experiences</h1>
							<h1>Performance Marketing</h1>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Services;
