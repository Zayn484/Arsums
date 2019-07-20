import React from 'react';
import { Input } from 'antd';
import Button from '../Button/Button';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const { TextArea } = Input;

const style = {
	width: '100%',
	height: '30rem'
};

const contactUs = (props) => (
	<section className="container-fluid Contact-Us" id="Contact-Us">
		<div className="container">
			<div className="row ">
				<div className="col-sm-12 col-md-6 Form">
					<h2 className="text-center">Contact us for a Quote or Consulting</h2>
					<div className="">
						<Input
							style={{ backgroundColor: 'transparent' }}
							placeholder="First Name"
							className="col-5 m-3  Input "
						/>
						<Input
							style={{ backgroundColor: 'transparent' }}
							placeholder="Last Name"
							className="col-5 m-3 Input "
						/>
						<Input
							style={{ backgroundColor: 'transparent' }}
							placeholder="Email Address"
							className="col-5 m-3  Input"
						/>
						<Input
							style={{ backgroundColor: 'transparent' }}
							placeholder="Phone Number"
							className="col-5 m-3  Input"
						/>
						<TextArea
							style={{ backgroundColor: 'transparent' }}
							placeholder="Message"
							className="col-5 Input"
							rows={4}
						/>
						<div className="text-center m-5">
							<Button>Send Message</Button>
						</div>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 ">
					<Map
						style={style}
						google={props.google}
						zoom={14}
						initialCenter={{
							lat: 32.485376,
							lng: 74.534093
						}}
						center={{
							lat: 32.485376,
							lng: 74.534093
						}}
					>
						<Marker name={'Current location'} />
					</Map>
				</div>
			</div>
		</div>
	</section>
);

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCQ-LaMq2FK4Fyr7ZmJJ2BUNI5S283C9ls'
})(contactUs);
