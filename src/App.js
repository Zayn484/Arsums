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
import Contact from './containers/Contact/Contact';
import ExpertiseDetail from './containers/ExpertiseDetail/ExpertiseDetail';
import Careers from './containers/Careers/Careers';
import Team from './containers/Team/Team';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<ScrollToTop>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/about-us" component={AboutUs} />
							<Route path="/expertise" exact component={Expertise} />
							<Route path="/expertise/:id" component={ExpertiseDetail} />
							<Route path="/portfolio" component={Portfolio} />
							<Route path="/contact" component={Contact} />
							<Route path="/careers" component={Careers} />
							<Route path="/team" component={Team} />
						</Switch>
					</ScrollToTop>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
