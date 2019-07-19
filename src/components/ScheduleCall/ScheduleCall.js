import React from 'react';
import { Modal, Icon, Calendar, Alert } from 'antd';
import moment from 'moment-timezone';

class ScheduleCall extends React.Component {
	state = {
		value: moment('2017-01-25'),
		selectedValue: moment('2017-01-25')
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

	render() {
		const { value, selectedValue } = this.state;
		const currentDate = moment().tz('Pakistan/karachi').format('HH:mm A');

		return (
			<Modal
				title="Schedule a Call"
				visible={this.props.visible}
				onOk={this.props.handleOk}
				confirmLoading={this.props.confirmLoading}
				onCancel={this.props.handleCancel}
			>
				<div className="row">
					<div className="col-12">
						<h4>Intro Call</h4>
						<h6>
							<Icon type="phone" /> &nbsp;30 min
						</h6>
						<h6>
							<Icon type="clock-circle" />&nbsp; 9:00 A.M - 6:00 P.M
						</h6>
						<span className="text-muted">(Pakistan, Maldives Time)&nbsp;{currentDate}</span>
					</div>
					<div className="col-12 mt-3">
						<h4>Select Date</h4>
						<Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />

						<Calendar
							fullscreen={false}
							value={value}
							onSelect={this.onSelect}
							onPanelChange={this.onPanelChange}
						/>
					</div>
				</div>
			</Modal>
		);
	}
}

export default ScheduleCall;
