import React from 'react';

const modal = (props) => (
	<div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="close-modal" data-dismiss="modal">
					<div className="lr">
						<div className="rl" />
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-8 mx-auto">
							<div className="modal-body">
								<h2 className="text-uppercase">{props.title}</h2>

								<img className="img-fluid d-block mx-auto" src={props.image} alt="sparky" />
								<p>{props.content}</p>

								<button className="btn " data-dismiss="modal" type="button">
									<i className="fas fa-times" />
									&nbsp;Close Project
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default modal;
