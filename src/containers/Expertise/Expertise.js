import React from 'react';

import BannerImg from '../../assets/images/banner/expertise.png';
import Expertises from '../../components/Expertise/Expertise';
import Request from '../../components/Request/Request';
import Banner from '../../components/Banner/Banner';

class Expertise extends React.Component {
	componentDidMount() {
		document.title = 'Our Expertise - Arsums';
	}

	render() {
		return (
			<main>
				<section className="Expertise ">
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
				<section className="container-fluid Expertise-Intro p-0 ">
					<Expertises />
				</section>
				<Request />
			</main>
		);
	}
}

export default Expertise;
