import React from 'react';

const banner = (props) => (
	<div className="container-fluid d-flex h-100  Banner ">
		<div className="row justify-content-center align-self-center  mx-auto">
			<div className="col-12 ">
				<img src={props.banner} className="img-fluid" alt="banner" onLoad={props.onLoad} />
			</div>
		</div>
	</div>
);

export default banner;
