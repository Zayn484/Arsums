import React from 'react';

import BannerImg from '../../assets/images/banner/contact.png';
import Request from '../../components/Request/Request';
import ContactUs from '../../components/ContactUs/ContactUs';
import Banner from '../../components/Banner/Banner';

class Contact extends React.Component {
	componentDidMount() {
		document.title = 'Contact Us - Arsums';
	}

	render() {
		return (
			<main>
				<section className="Contact ">
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

				<section className="container-fluid Contact-Section p-0 ">
					<div className="row p-0 no-gutters ">
						<div className="col-12 col-md-6">
							<Request style={{ transform: 'skewY(-1.5deg)' }} />
						</div>
						<div className="col-12 col-md-6 py-auto mx-auto ">
							<ContactUs
								disableMap
								style={{
									backgroundColor: 'white'
								}}
							/>
						</div>
					</div>
				</section>
				<br />
				<br />
			</main>
		);
	}
}

export default Contact;
