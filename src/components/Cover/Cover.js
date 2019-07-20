import React from 'react';
import Pulse from 'react-reveal/Pulse';

import Logo from '../../assets/images/brand.png';

const cover = (props) => (
	<div className="container-fluid d-flex h-100  Cover ">
		<div className="row justify-content-center align-self-center  mx-auto">
			<div className="col-3 mt-5  ">
				<Pulse>
					<img src={Logo} className="img-fluid" alt="logo" />
				</Pulse>
				<h3 className="text-center mt-5 mb-5">{props.children}</h3>
			</div>
		</div>
	</div>
);

export default cover;
