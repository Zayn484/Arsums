import React from 'react';
import { Input, Modal, Select } from 'antd';
import Button from '../Button/Button';
import axios from 'axios';
import { HOST_URL } from '../../settings';

import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/dist/style.css';
import validator from 'validator';

const { TextArea } = Input;
const { Option } = Select;

const phoneStyle = {
	width: '100%',
	backgroundColor: 'transparent'
};

class ContactUs extends React.Component {
	state = {
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		service: 'Branding',
		message: '',
		disabled: false,
		submit: false
	};

	updateState = (key, e) => {
		this.setState({ [key]: e.target.value });
	};

	onChange = (e, field) => {
		if (field === 'firstname') {
			this.updateState(field, e);
		}
		if (field === 'lastname') {
			this.updateState(field, e);
		}
		if (field === 'email') {
			this.updateState(field, e);
		}

		if (field === 'message') {
			this.updateState(field, e);
		}
	};

	onChangeOption = (value) => {
		this.setState({ service: value });
	};

	OnChangePhone = (value) => {
		this.setState({ phone: value });
	};

	showError = (msg) => {
		Modal.error({
			title: 'Request failed',
			content: (
				<div>
					<p>{msg}</p>
				</div>
			),
			onOk() {}
		});
	};

	submit = (e) => {
		e.preventDefault();
		// Validating fields
		if (!validator.isAlpha(this.state.firstname) || !validator.isAlpha(this.state.lastname)) {
			this.showError('Name fields must contain letters');
			return;
		}
		if (this.state.email !== null && !validator.isEmail(this.state.email)) {
			this.showError('Please use a valid email address');
			return;
		}

		this.setState({ disabled: true });

		const data = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			phone: this.state.phone,
			message: this.state.message
		};

		axios
			.post(`${HOST_URL}/messages/`, data)
			.then((response) => {
				if (response.status === 201) {
					this.setState({
						submit: true,
						firstname: '',
						lastname: '',
						email: '',
						phone: '',
						message: ''
					});
				}
			})
			.catch((error) => {
				this.setState({ disabled: false });
				Modal.error({
					title: 'Request failed',
					content: (
						<div>
							<p>Unexpected error occurred! Please try again later</p>
						</div>
					),
					onOk() {}
				});
			});
	};

	render() {
		return (
			<section className="container-fluid Contact-Us" id="Contact-Us" style={this.props.style}>
				<div className="container ">
					<div className="row ">
						<div className={this.props.disableMap ? 'col-12 Form ' : 'col-sm-12 col-md-6 mx-auto Form'}>
							<h1 className="text-center">
								{this.props.disableMap ? (
									'Your business elevated, one message away'
								) : (
									'Contact us for a Quote or Consulting'
								)}
							</h1>
							<form onSubmit={this.submit} className="">
								<Input
									style={{ backgroundColor: 'transparent' }}
									placeholder="First Name"
									value={this.state.firstname}
									className={
										this.props.disableMap ? (
											'col-12 col-md-6 mt-3 mr-3  Input '
										) : (
											'col-12 m-1  Input '
										)
									}
									onChange={(e) => this.onChange(e, 'firstname')}
								/>
								<Input
									style={{ backgroundColor: 'transparent' }}
									placeholder="Last Name"
									value={this.state.lastname}
									className={
										this.props.disableMap ? (
											'col-12 col-md-6  Input mt-3 mr-3  '
										) : (
											'col-12 m-1  Input '
										)
									}
									onChange={(e) => this.onChange(e, 'lastname')}
								/>
								<Input
									style={{ backgroundColor: 'transparent' }}
									placeholder="Email Address"
									value={this.state.email}
									className={
										this.props.disableMap ? (
											'col-12 col-md-6  Input mt-3 mr-3  '
										) : (
											'col-12 m-1  Input '
										)
									}
									onChange={(e) => this.onChange(e, 'email')}
								/>
								<div
									className={
										this.props.disableMap ? (
											'col-12 col-md-6 mt-3 mr-3 p-0'
										) : (
											'col-12 m-1  mb-2 p-0  '
										)
									}
								>
									<ReactPhoneInput
										inputStyle={phoneStyle}
										inputExtraProps={{
											name: 'phone'
										}}
										defaultCountry={'us'}
										value={this.state.phone}
										onChange={this.OnChangePhone}
									/>
								</div>

								{this.props.disableMap && (
									<div className="col-12 mt-3 mb-3 p-0">
										<Select
											showSearch
											className="col-12 col-md-6 "
											placeholder="Choose a service"
											optionFilterProp="children"
											onChange={this.onChangeOption}
											onSearch={this.onSearch}
											filterOption={(input, option) =>
												option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
										>
											<Option value="Branding">Branding</Option>
											<Option value="UI/UX Design">UI/UX Design</Option>
											<Option value="Web Development">Web Development</Option>
											<Option value="Mobile Application Development">
												Mobile Application Development
											</Option>
											<Option value="E-Commerce">E-Commerce</Option>
											<Option value="Digital Marketing">Digital Marketing</Option>
											<Option value="SEO">SEO</Option>
											<Option value="Strategy & Consulting">Strategy & Consulting</Option>
											<Option value="Ongoing Support">Ongoing Support</Option>
										</Select>
									</div>
								)}
								<TextArea
									style={{ backgroundColor: 'transparent' }}
									placeholder="Message"
									value={this.state.message}
									className="col-5 Input"
									rows={6}
									onChange={(e) => this.onChange(e, 'message')}
								/>
								<div className="text-center m-5">
									<Button disabled={this.state.disabled}>Send Message</Button>
									<button className="btn bg-transparent">
										{this.state.submit && <i className="fas fa-check-circle fa-2x text-success " />}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ContactUs;
