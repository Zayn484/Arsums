import React from 'react';

import { withRouter } from 'react-router-dom';
import Branding from '../../assets/images/sliders/branding.jpg';
import Website from '../../assets/images/sliders/website.jpg';
import App from '../../assets/images/sliders/app.jpg';
import Ecommerce from '../../assets/images/sliders/ecommerce.jpg';
import Marketing from '../../assets/images/sliders/marketing.jpg';

class Services extends React.Component {
	componentDidMount() {
		this.image = Website;
	}

	changeImage = (image) => {
		this.image = image;
		this.forceUpdate();
	};

	openPage = (id) => {
		this.props.history.push({ pathname: '/expertise/' + id });
	};

	render() {
		return (
			<section className="container-fluid Services p-0 ">
				<div className="row">
					<div className="col-12">
						<img
							src={this.image}
							style={{ backgroundImage: `url(${this.image})` }}
							className="img-fluid Image"
							alt="cover"
						/>
						<div className="Headings ">
							<h4 className="text-muted ">What We Do</h4>
							<h1 onMouseOver={() => this.changeImage(Website)} onClick={() => this.openPage('web')}>
								Websites and Digital Platform
							</h1>
							<h1
								onMouseOver={() => this.changeImage(Branding)}
								onClick={() => this.openPage('branding')}
							>
								Branding and Identity
							</h1>

							<h1 onMouseOver={() => this.changeImage(App)} onClick={() => this.openPage('mobile')}>
								Mobile App Development
							</h1>
							<h1
								onMouseOver={() => this.changeImage(Ecommerce)}
								onClick={() => this.openPage('ecommerce')}
							>
								Ecommerce Experience
							</h1>
							<h1
								onMouseOver={() => this.changeImage(Marketing)}
								onClick={() => this.openPage('marketing')}
							>
								Performance Marketing
							</h1>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default withRouter(Services);
