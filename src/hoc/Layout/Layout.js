import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import ScheduleCall from '../../components/ScheduleCall/ScheduleCall';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
	state = {
		scrolling: false,
		toolbarOpen: false,

		loading: false,
		visible: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		if (window.scrollY === 0 && this.state.scrolling === true) {
			this.setState({ scrolling: false });
		} else if (window.scrollY !== 0 && this.state.scrolling !== true) {
			this.setState({ scrolling: true });
		}
	};

	toggleToolbar = () => {
		this.setState({ toolbarOpen: !this.state.toolbarOpen });
	};

	click(e) {}

	showModal = () => {
		this.setState({
			visible: !this.state.visible
		});
	};

	render() {
		return (
			<div>
				<Navbar scrolling={this.state.scrolling} showModal={this.showModal} />

				{this.props.children}
				<ScheduleCall visible={this.state.visible} toggleModal={this.showModal} />
				<Footer />
			</div>
		);
	}
}

export default withRouter(Layout);
