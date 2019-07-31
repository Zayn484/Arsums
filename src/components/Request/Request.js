import React from 'react';
import axios from 'axios';
import { Timeline, Radio, Input, Modal } from 'antd';
import validator from 'validator';
import { HOST_URL } from '../../settings';
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
		// Validating fields
		if (this.state.email !== null && !validator.isEmail(this.state.email)) {
			Modal.error({
				title: 'Request failed',
				content: (
					<div>
						<p>Please use a valid email address</p>
					</div>
				),
				onOk() {}
			});
			return;
		}
		if (this.state.projectDescription === null) {
			Modal.error({
				title: 'Request failed',
				content: (
					<div>
						<p>Please fill out project description field</p>
					</div>
				),
				onOk() {}
			});
			return;
		}

		const data = {
			project_type: this.state.projectType,
			project_description: this.state.projectDescription,
			duration: this.state.duration,
			username: this.state.username,
			email: this.state.email
		};

		axios
			.post(`${HOST_URL}/requests/`, data)
			.then((response) => {
				if (response.status === 201) {
					this.setState({
						submit: true,
						disabled: true,
						projectDescription: null,
						username: null,
						email: null
					});
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
			<section className="container-fluid Request" style={this.props.style}>
				<div className="container  ">
					<div className="Heading col-12">
						<h1 className="text-center ">Life is short. Work with us.</h1>
					</div>

					<div className="row no-gutters">
						<div className="col-12">
							<Timeline>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted Heading">How can we help you?</h3>
										<Radio.Group
											className=" p-0 "
											onChange={(e) => this.onChange(e, 'projectType')}
											value={this.state.projectType}
										>
											<Radio value={'Branding'} className="col-12">
												Branding
											</Radio>
											<Radio value={'UI/UX Design'} className="col-12">
												UI/UX Design
											</Radio>
											<Radio value={'Mobile App Development'} className="col-12">
												Mobile App Development
											</Radio>
											<Radio value={'SEO'} className="col-12">
												SEO
											</Radio>
											<Radio value={'E-Commerce'} className="col-12">
												E-Commerce
											</Radio>
											<Radio value={'IT Startups and Consulting'} className="col-12">
												IT Startups and Consulting
											</Radio>
											<Radio value={' Web Development'} className="col-12">
												Web Development
											</Radio>
										</Radio.Group>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted Heading">Describe project</h3>
										<TextArea
											style={{ backgroundColor: 'transparent' }}
											className="Input"
											value={this.state.projectDescription}
											rows={4}
											onChange={(e) => this.onChange(e, 'projectDescription')}
										/>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted Heading">How urgent do you need it?</h3>
										<Radio.Group
											onChange={(e) => this.onChange(e, 'duration')}
											value={this.state.duration}
										>
											<Radio value={'Yesterday'} className="m-4">
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Yesterday} alt="Yesterday" />
												</div>
												Yesterday
											</Radio>
											<Radio value={'Today'} className="m-4">
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Today} alt="Today" />
												</div>Today
											</Radio>
											<Radio value={'Tomorrow'} className="m-4">
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Tomorrow} alt="Tomorrow" />
												</div>Tomorrow
											</Radio>
											<Radio value={'Within a week'} className="m-4">
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Week} alt="Week" />
												</div>Within a week
											</Radio>
											<Radio value={'Within a month'} className="m-4">
												<div style={{ width: '80px', height: '80px' }}>
													<img className="img-fluid" src={Month} alt="Month" />
												</div>Within a month
											</Radio>
										</Radio.Group>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted Heading">Contact information</h3>
										<Input
											style={{ backgroundColor: 'transparent' }}
											placeholder="Your name"
											value={this.state.username}
											className="col-12 col-md-3 m-3 Input"
											onChange={(e) => this.onChange(e, 'username')}
										/>
										<Input
											style={{ backgroundColor: 'transparent' }}
											placeholder="Your email"
											value={this.state.email}
											className="col-12 col-md-3 m-3 Input"
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
					</div>
				</div>
			</section>
		);
	}
}

export default Request;
