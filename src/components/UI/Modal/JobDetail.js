import React from 'react';

const jobDetailModal = (props) => (
	<div className="portfolio-modal modal fade" id="jobDetailModal1" tabIndex="-1" role="dialog" aria-hidden="true">
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
								<h3>Job Description:</h3>
								<ul>{props.description.map((el) => <li key={el}>{el}</li>)}</ul>
								<h3>We are looking for:</h3>
								<ul>{props.education.map((el) => <li key={el}>{el}</li>)}</ul>
								<h3>Skills:</h3>
								<ul>{props.skills.map((el) => <li key={el}>{el}</li>)}</ul>
								<h3>Job Location:</h3>
								<ul>{props.location.map((el) => <li key={el}>{el}</li>)}</ul>

								<button className="btn " data-dismiss="modal" type="button">
									<i className="fas fa-times" />
									&nbsp;Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default jobDetailModal;
