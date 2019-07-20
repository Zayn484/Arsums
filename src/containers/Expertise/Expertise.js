import React from 'react';

import Cover from '../../components/Cover/Cover';
import Expertises from '../../components/Expertise/Expertise';

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
							height: 'auto'
						}}
					>
						<Cover>What We Do & Love</Cover>
					</div>
				</section>
				<section className="container-fluid Expertise-Intro p-0 ">
					<Expertises />
				</section>
			</main>
		);
	}
}

export default Expertise;
