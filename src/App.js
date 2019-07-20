import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import ScrollToTop from './util/scrollToTop';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import Expertise from './containers/Expertise/Expertise';
import Portfolio from './containers/Portfolio/Portfolio';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<ScrollToTop>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about-us" component={AboutUs} />
							<Route path="/expertise" component={Expertise} />
							<Route path="/portfolio" component={Portfolio} />
						</Switch>
					</ScrollToTop>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
