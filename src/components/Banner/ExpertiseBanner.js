import React from 'react';

import Button from '../Button/Button';
import { Link } from 'react-scroll';

const expertiseBanner = (props) => (
	<div className="container-fluid p-0   ">
		<div className="row">
			<div className="col-12">
				<img
					src={props.banner}
					style={{ backgroundImage: `url(${props.banner})` }}
					className="img-fluid Image"
					alt="banner"
				/>
				<div className="Headings ">
					<h1 className="text-center ">{props.title}</h1>
					<Link to="Request" spy={true} smooth={true}>
						<div className="text-center">
							<Button>{props.buttonText}</Button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	</div>
);

export default expertiseBanner;
