import React from 'react';
import axios from 'axios';
import { Timeline, Radio, Input, Modal } from 'antd';
import Button from '../Button/Button';

import Yesterday from '../../assets/images/request/yesterday.png';
import Today from '../../assets/images/request/today.png';
import Tomorrow from '../../assets/images/request/tomorrow.png';
import Week from '../../assets/images/request/week.png';
import Month from '../../assets/images/request/month.png';

const { TextArea } = Input;

class Request extends React.Component {
	state = {
		projectType: null,
		projectDescription: null,
		duration: null,
		username: null,
		email: null,
		disabled: false,
		submit: false
	};

	updateState = (key, e) => {
		this.setState({
			[key]: e.target.value
		});
	};

	onChange = (e, field) => {
		if (field === 'projectType') {
			this.updateState(field, e);
		}
		if (field === 'projectDescription') {
			this.updateState(field, e);
		}
		if (field === 'duration') {
			this.updateState(field, e);
		}
		if (field === 'username') {
			this.updateState(field, e);
		}
		if (field === 'email') {
			this.updateState(field, e);
		}
	};

	submit = () => {
		const data = {
			project_type: this.state.projectType,
			project_description: this.state.projectDescription,
			duration: this.state.duration,
			username: this.state.username,
			email: this.state.email
		};

		axios
			.post('http://127.0.0.1:8000/api/requests/', data)
			.then((response) => {
				if (response.status === 201) {
					this.setState({ submit: true, disabled: true });
				}
			})
			.catch((error) => {
				Modal.info({
					title: 'Request failed',
					content: (
						<div>
							<p>Please fill all the required fields</p>
						</div>
					),
					onOk() {}
				});
			});
	};

	render() {
		return (
			<section className="container-fluid Request">
				<div className="container  ">
					<div className="Heading">
						<h1 className="text-center ">Life is short. Work with us.</h1>
					</div>

					<div className="row no-gutters">
						<div className="col-12">
							<Timeline>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted ">How can we help you?</h3>
										<Radio.Group
											onChange={(e) => this.onChange(e, 'projectType')}
											value={this.state.projectType}
										>
											<Radio value={'eCommerce'}>eCommerce</Radio>
											<Radio value={'Web Design'}>Web Design</Radio>
											<Radio value={'Web Development'}>Web Development</Radio>
											<Radio value={'New Website'}>New Website</Radio>
											<Radio value={'Existing Website'}>Existing Website</Radio>
										</Radio.Group>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted ">Describe project</h3>
										<TextArea
											style={{ backgroundColor: 'transparent' }}
											className="Input"
											rows={4}
											onChange={(e) => this.onChange(e, 'projectDescription')}
										/>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted ">How urgent do you need it?</h3>
										<Radio.Group
											onChange={(e) => this.onChange(e, 'duration')}
											value={this.state.duration}
										>
											<Radio value={'Yesterday'}>
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Yesterday} alt="Yesterday" />
												</div>
												Yesterday
											</Radio>
											<Radio value={'Today'}>
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Today} alt="Today" />
												</div>Today
											</Radio>
											<Radio value={'Tomorrow'}>
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Tomorrow} alt="Tomorrow" />
												</div>Tomorrow
											</Radio>
											<Radio value={'Within a week'}>
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Week} alt="Week" />
												</div>Within a week
											</Radio>
											<Radio value={'Within a month'}>
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Month} alt="Month" />
												</div>Within a month
											</Radio>
										</Radio.Group>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted ">Contact information</h3>
										<Input
											style={{ backgroundColor: 'transparent' }}
											placeholder="Your name"
											className="col-3 m-3 Input"
											onChange={(e) => this.onChange(e, 'username')}
										/>
										<Input
											style={{ backgroundColor: 'transparent' }}
											placeholder="Your email"
											className="col-3 m-3 Input"
											onChange={(e) => this.onChange(e, 'email')}
										/>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<Button onClick={this.submit} disabled={this.state.disabled}>
											Submit Request
										</Button>
										<button className="btn bg-transparent">
											{this.state.submit && (
												<i className="fas fa-check-circle fa-2x text-success " />
											)}
										</button>
									</div>
								</Timeline.Item>
							</Timeline>
						</div>
						{/* <div className="col-10">
							<h3 className="text-muted ">How can we help you?</h3>
							<Radio.Group onChange={this.onChange} value={this.state.value}>
								<Radio value={'eCommerce'}>eCommerce</Radio>
								<Radio value={'Web Design'}>Web Design</Radio>
								<Radio value={'Web Development'}>Web Development</Radio>
								<Radio value={'New Website'}>New Website</Radio>
								<Radio value={'Existing Website'}>Existing Website</Radio>
							</Radio.Group>
						</div> */}
					</div>
				</div>
			</section>
		);
	}
}

export default Request;
