import React from 'react';

import Banner from '../../assets/images/banner/team.jpg';
import Img1 from '../../assets/images/team/1.jpg';
import Img2 from '../../assets/images/team/4.jpg';
import Img3 from '../../assets/images/team/2.jpg';
import Img4 from '../../assets/images/team/3.jpg';
import Img5 from '../../assets/images/team/5.jpg';
import Img6 from '../../assets/images/team/10.jpg';
import Img7 from '../../assets/images/team/11.jpg';
import Img8 from '../../assets/images/team/12.jpg';
import Img9 from '../../assets/images/team/6.jpg';
import Img10 from '../../assets/images/team/7.jpg';
import Img11 from '../../assets/images/team/8.jpg';
import Img12 from '../../assets/images/team/9.jpg';

class Team extends React.Component {
	componentDidMount() {
		document.title = 'Our Team - Arsums';
	}

	render() {
		return (
			<main>
				<section className="Team ">
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '50vh'
						}}
					>
						<div className="container-fluid d-flex h-100  Banner ">
							<div className="row justify-content-center align-self-center  mx-auto">
								<div className="col-12 ">
									<img src={Banner} className="img-fluid" alt="banner" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="container-fluid Team-Section p-0 ">
					<section className="bg-light page-section" id="portfolio">
						<br />

						<div className="container">
							<h1 className="text-center">Team Arsums</h1>
							<div className="row">
								<div className="col-12 col-md-6">
									<div class="card">
										<img class="card-img-top" src={Img2} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Maqsood Shahid</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Director
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div class="card">
										<img class="card-img-top" src={Img1} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Mazhar Iqbal</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Director
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img6} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Irum</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												CEO
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img3} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Haider</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												CMO
											</h2>
										</div>
									</div>
								</div>

								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img5} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Jami</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Art Director
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img4} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Dawood</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Software Architect
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img7} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Zain</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Full Stack Developer
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img8} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Danish</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Graphic Designer
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img9} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Uroosa</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Software Engineer
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img10} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Iqra</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Content Writer
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img11} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Afifa</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Creative Associate
											</h2>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-4 mt-5">
									<div class="card">
										<img class="card-img-top" src={Img12} alt="Card cap" />
										<div class="card-body">
											<h2 class="card-text text-center">Rida</h2>
											<h2 style={{ color: '#fbbc17' }} class="card-text text-center">
												Creative Manager
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
						<br />
					</section>
				</section>
			</main>
		);
	}
}

export default Team;
