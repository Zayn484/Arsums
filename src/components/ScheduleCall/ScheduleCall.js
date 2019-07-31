import React from 'react';
import { Modal, Icon, Calendar, Alert } from 'antd';
import moment from 'moment-timezone';
import axios from 'axios';
import { HOST_URL } from '../../settings';

import Timekeeper from 'react-timekeeper';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class ScheduleCall extends React.Component {
	state = {
		loading: false,
		visible: false,
		value: moment(),
		selectedValue: moment(),
		country: '',
		region: '',
		time: moment().format('HH:mm A')
	};

	onSelect = (value) => {
		this.setState({
			value,
			selectedValue: value
		});
	};

	onPanelChange = (value) => {
		this.setState({ value });
	};

	changeTime = (time) => {
		this.setState({ time: time.formatted });
	};

	selectCountry(val) {
		this.setState({ country: val });
	}

	selectRegion(val) {
		this.setState({ region: val });
	}

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = () => {
		this.setState({ loading: true });

		setTimeout(() => {
			const data = {
				date: this.state.value.format('YYYY-MM-DD'),
				country: this.state.country,
				region: this.state.region,
				time: this.state.time
			};

			axios
				.post(`${HOST_URL}/call-schedules/`, data)
				.then((response) => {
					if (response.status === 201) {
						this.setState({ loading: false });
						this.props.toggleModal();
						Modal.success({
							title: 'Success',
							content: `Your call has been scheduled on ${this.state.value}`
						});
					}
				})
				.catch((error) => {
					this.setState({ loading: false });
					alert('Unexpected error occurred! Please try again');
				});
		}, 500);
	};

	handleCancel = () => {
		this.props.toggleModal();
	};

	render() {
		const { value, selectedValue, country, region } = this.state;
		const currentDate = moment().tz('Pakistan/karachi').format('HH:mm A');

		return (
			<Modal
				width={'60rem'}
				title="Schedule a Call"
				visible={this.props.visible}
				onOk={this.handleOk}
				confirmLoading={this.state.loading}
				onCancel={this.handleCancel}
			>
				<div className="row p-0 no-gutters ">
					<div className="col-12 col-md-4  ">
						<div className="m-2">
							<h5>Intro Call</h5>
							<h6>
								<Icon type="phone" /> &nbsp;30 min
							</h6>
							<h6>
								<Icon type="clock-circle" />&nbsp; 9:00 A.M - 6:00 P.M
							</h6>
							<span className="text-muted">(Pakistan, Maldives Time)&nbsp;{currentDate}</span>
						</div>
					</div>
					<div className="col-12 col-md-4 ">
						<div className="m-2">
							<h5>Select Date</h5>
							<Alert
								message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
							/>

							<Calendar
								fullscreen={false}
								value={value}
								onSelect={this.onSelect}
								onPanelChange={this.onPanelChange}
							/>
						</div>
					</div>
					<div className="col-12 col-md-4 ">
						<div className="m-2">
							<h5>Choose Country and Time</h5>

							<CountryDropdown
								style={{ width: '50%' }}
								value={country}
								onChange={(val) => this.selectCountry(val)}
							/>

							<RegionDropdown
								style={{ width: '50%' }}
								country={country}
								value={region}
								onChange={(val) => this.selectRegion(val)}
							/>

							<div className="m-2">
								<Timekeeper onChange={this.changeTime} />
							</div>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}

export default ScheduleCall;
