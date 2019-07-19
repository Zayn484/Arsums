import React from 'react';
import { Timeline, Radio, Input } from 'antd';
import Button from '../Button/Button';

const { TextArea } = Input;

class Request extends React.Component {
	state = {
		service: 1
	};

	onChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};

	render() {
		return (
			<section className="container-fluid Request">
				<div className="container  ">
					<div className="Heading">
						<h1 className="text-center ">Let's Discuss</h1>
					</div>

					<div className="row no-gutters">
						<div className="col-12">
							<Timeline>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted ">How can we help you?</h3>
										<Radio.Group onChange={this.onChange} value={this.state.value}>
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
										/>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<h3 className="text-muted ">How urgent do you need your it?</h3>
										<Radio.Group onChange={this.onChange} value={this.state.value}>
											<Radio value={'Yesterday'}> Yesterday</Radio>
											<Radio value={'Today'}>Today</Radio>
											<Radio value={'Tomorrow'}>Tomorrow</Radio>
											<Radio value={'Within a week'}>Within a week</Radio>
											<Radio value={'Within a month'}>Within a month</Radio>
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
										/>
										<Input
											style={{ backgroundColor: 'transparent' }}
											placeholder="Your email"
											className="col-3 m-3 Input"
										/>
									</div>
								</Timeline.Item>
								<Timeline.Item>
									<div className="Input-Group">
										<Button>Submit Request</Button>
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
